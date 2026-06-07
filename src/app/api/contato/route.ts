import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

// Handler do formulário de contato institucional.
// Envia e-mail via Resend quando RESEND_API_KEY estiver configurada (na Vercel).
// Sem a chave, valida e registra o lead sem quebrar o formulário — útil em preview.
// Nunca commite segredos: a chave vem de variável de ambiente. Veja env.example.

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  // Honeypot preenchido => provável bot. Responde 200 sem processar.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const nome = body.nome?.trim();
  const email = body.email?.trim();
  const mensagem = body.mensagem?.trim();
  const empresa = body.empresa?.trim() ?? "";
  const telefone = body.telefone?.trim() ?? "";

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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOX ?? site.contact.email;
  // Remetente: precisa ser um domínio verificado no Resend. Configurável por env.
  const from = process.env.CONTACT_FROM ?? "AIFLUENT <contato@aifluent.com.br>";

  if (!apiKey) {
    // Sem chave configurada: não falha o formulário, apenas registra.
    console.warn("contato.sem_resend_key", { nome, email, empresa });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const html = `
      <h2>Novo contato — ${escapeHtml(site.name)}</h2>
      <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
      <p><strong>Empresa:</strong> ${escapeHtml(empresa) || "—"}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(telefone) || "—"}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(mensagem).replace(/\n/g, "<br/>")}</p>
    `;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Novo contato de ${nome}${empresa ? ` (${empresa})` : ""}`,
      html,
    });

    if (error) {
      console.error("contato.resend_error", error);
      return NextResponse.json({ error: "Falha ao enviar." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("contato.exception", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
