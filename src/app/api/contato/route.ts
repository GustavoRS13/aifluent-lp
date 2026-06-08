import { NextResponse } from "next/server";
import { site } from "@/lib/site";

// Handler do formulário de contato.
// Entrega do lead em dois canais para máxima confiabilidade:
//  1) E-mail para site.contact.email — via Resend (se RESEND_API_KEY estiver
//     configurada na Vercel) ou, sem chave, via FormSubmit (keyless).
//  2) WhatsApp com os dados — disparado no cliente após o retorno ok.
// Se o e-mail falhar (ex.: serviço fora do ar), ainda retornamos ok para que o
// WhatsApp abra com os dados: assim o lead nunca se perde.

export const runtime = "nodejs";

type Payload = {
  nome?: string;
  empresa?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
  consent?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(v: string) {
  return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

type Lead = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
  dataHora: string;
};

const SUBJECT = "[LEAD SITE] Novo contato recebido";

async function sendViaResend(lead: Lead): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const from = process.env.CONTACT_FROM ?? "AIFLUENT <onboarding@resend.dev>";
  const html = `
    <h2>${SUBJECT}</h2>
    <p><strong>Nome:</strong> ${escapeHtml(lead.nome)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(lead.empresa) || "—"}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(lead.telefone) || "—"}</p>
    <p><strong>Mensagem:</strong><br/>${escapeHtml(lead.mensagem).replace(/\n/g, "<br/>")}</p>
    <p><strong>Data e hora:</strong> ${escapeHtml(lead.dataHora)}</p>`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [site.contact.email],
        reply_to: lead.email,
        subject: SUBJECT,
        html,
      }),
    });
    if (!res.ok) console.error("contato.resend_http", res.status);
    return res.ok;
  } catch (err) {
    console.error("contato.resend_err", err);
    return false;
  }
}

async function sendViaFormSubmit(lead: Lead): Promise<boolean> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(site.contact.email)}`;
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Nome: lead.nome,
        Empresa: lead.empresa || "—",
        Email: lead.email,
        Telefone: lead.telefone || "—",
        Mensagem: lead.mensagem,
        "Data e hora": lead.dataHora,
        _subject: SUBJECT,
        _replyto: lead.email,
        _template: "table",
        _captcha: "false",
      }),
    });
    if (!res.ok) {
      console.error("contato.formsubmit_http", res.status);
      return false;
    }
    const json = (await res.json().catch(() => ({}))) as { success?: string };
    return json.success === "true";
  } catch (err) {
    console.error("contato.formsubmit_err", err);
    return false;
  }
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  const nome = body.nome?.trim();
  const email = body.email?.trim();
  const mensagem = body.mensagem?.trim();

  if (!nome || !email || !mensagem) {
    return NextResponse.json(
      { error: "Nome, e-mail e mensagem são obrigatórios." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 422 });
  }
  if (body.consent !== "aceito") {
    return NextResponse.json(
      { error: "Consentimento LGPD é obrigatório." },
      { status: 422 },
    );
  }

  const lead: Lead = {
    nome,
    email,
    mensagem,
    empresa: body.empresa?.trim() ?? "",
    telefone: body.telefone?.trim() ?? "",
    dataHora: new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      dateStyle: "short",
      timeStyle: "short",
    }),
  };

  // Tenta Resend primeiro (se configurado); senão FormSubmit.
  const delivered =
    (await sendViaResend(lead)) || (await sendViaFormSubmit(lead));
  if (!delivered) {
    console.warn("contato.email_indisponivel", {
      email: lead.email,
      dataHora: lead.dataHora,
    });
  }

  // Sempre ok: o cliente abre o WhatsApp com os dados (canal garantido).
  return NextResponse.json({ ok: true, delivered });
}
