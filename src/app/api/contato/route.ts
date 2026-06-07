import { NextResponse } from "next/server";

// Handler do formulário de contato institucional.
// Hoje apenas valida e registra a intenção. Para entrega real de e-mail,
// integre um provedor (ex.: Resend) lendo a chave de variável de ambiente —
// nunca commite segredos. Veja o README (seção "Formulário de contato").

export const runtime = "nodejs";

type Payload = {
  nome?: string;
  email?: string;
  telefone?: string;
  instituicao?: string;
  mensagem?: string;
  consent?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // TODO: integrar envio de e-mail / CRM.
  // Ex.: await sendEmail({ to: process.env.CONTACT_INBOX, ... })
  // Log estruturado, sem expor dados sensíveis em produção.
  console.info("contato.recebido", {
    nome,
    email,
    temTelefone: Boolean(body.telefone),
  });

  return NextResponse.json({ ok: true });
}
