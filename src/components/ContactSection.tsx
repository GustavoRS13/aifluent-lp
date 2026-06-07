"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot anti-spam: campo oculto preenchido = bot.
    if (data.website) return;

    if (!data.consent) {
      setStatus("error");
      setErrorMsg(
        "É necessário aceitar a Política de Privacidade para enviar.",
      );
      return;
    }

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        "Não foi possível enviar agora. Tente novamente ou escreva para nosso e-mail.",
      );
    }
  }

  return (
    <section id="contato" className="hero-mesh text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Vamos conversar sobre a sua instituição
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            Conte o seu desafio. Nosso time retorna com uma proposta de
            integração, automação ou desenvolvimento sob medida.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li>
              <span className="block text-white/50">E-mail</span>
              <a
                href={`mailto:${site.contact.email}`}
                className="font-medium hover:text-brand-cyan"
              >
                {site.contact.email}
              </a>
            </li>
            <li>
              <span className="block text-white/50">Localização</span>
              <span className="font-medium">{site.contact.address}</span>
            </li>
          </ul>
        </div>

        <div className="card-ring rounded-2xl border border-white/10 bg-white p-6 text-ink sm:p-8">
          {status === "success" ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <div className="brand-gradient flex h-14 w-14 items-center justify-center rounded-full text-white">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m20 6-11 11-5-5" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold">Mensagem enviada!</h3>
              <p className="mt-2 text-sm text-muted">
                Obrigado pelo contato. Retornaremos em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="hidden" aria-hidden>
                <label>
                  Não preencha este campo
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <Field
                label="Nome completo"
                name="nome"
                autoComplete="name"
                required
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="E-mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <Field
                  label="Telefone"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>
              <Field
                label="Instituição"
                name="instituicao"
                autoComplete="organization"
              />

              <div>
                <label
                  htmlFor="mensagem"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Mensagem <span className="text-brand-fuchsia">*</span>
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-muted">
                <input
                  type="checkbox"
                  name="consent"
                  value="aceito"
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-brand-blue"
                />
                <span>
                  Li e concordo com a{" "}
                  <Link
                    href="/privacidade"
                    className="font-medium text-brand-blue underline underline-offset-2"
                  >
                    Política de Privacidade
                  </Link>{" "}
                  e autorizo o tratamento dos meus dados para fins de contato
                  (LGPD).
                </span>
              </label>

              {status === "error" && (
                <p
                  className="text-sm font-medium text-brand-fuchsia"
                  role="alert"
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="brand-gradient w-full rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.01] disabled:opacity-60"
              >
                {status === "loading" ? "Enviando…" : "Enviar mensagem"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label} {required && <span className="text-brand-fuchsia">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
      />
    </div>
  );
}
