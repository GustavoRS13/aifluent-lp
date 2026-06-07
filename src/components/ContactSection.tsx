"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
    <section
      id="contato"
      className="hero-mesh relative overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-50" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Vamos conversar sobre o seu projeto
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
            Conte o seu desafio. Nosso time retorna com uma proposta de IA,
            automação, integração ou desenvolvimento sob medida.
          </p>

          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-brand-cyan" />
              <a
                href={`mailto:${site.contact.email}`}
                className="font-medium hover:text-brand-cyan"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-5 text-brand-cyan" />
              <span className="font-medium">{site.contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <LinkedinIcon className="size-5 text-brand-cyan" />
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-brand-cyan"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="card-ring rounded-2xl border border-white/10 bg-white p-6 text-ink sm:p-8">
          {status === "success" ? (
            <div className="flex h-full min-h-[22rem] flex-col items-center justify-center text-center">
              <div className="brand-gradient flex size-14 items-center justify-center rounded-full text-white">
                <Check className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Mensagem enviada!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
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

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="Nome"
                  name="nome"
                  autoComplete="name"
                  required
                />
                <FormField
                  label="Empresa"
                  name="empresa"
                  autoComplete="organization"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  label="E-mail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                <FormField
                  label="Telefone"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="mensagem">
                  Mensagem <span className="text-brand-fuchsia">*</span>
                </Label>
                <Textarea id="mensagem" name="mensagem" rows={4} required />
              </div>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  name="consent"
                  value="aceito"
                  className="mt-0.5 size-4 shrink-0 rounded border-input accent-brand-blue"
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

              <Button
                type="submit"
                variant="brand"
                size="xl"
                disabled={status === "loading"}
                className="w-full"
              >
                {status === "loading" ? "Enviando…" : "Enviar mensagem"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormField({
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
    <div className="grid gap-2">
      <Label htmlFor={name}>
        {label} {required && <span className="text-brand-fuchsia">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
      />
    </div>
  );
}
