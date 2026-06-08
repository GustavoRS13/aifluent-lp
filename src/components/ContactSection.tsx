"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Mail, MessageCircle, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { site, whatsappUrl } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const canais = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.contact.whatsappLabel,
    href: whatsappUrl,
    external: true,
  },
  {
    icon: CalendarClock,
    label: "Agendar reunião",
    value: "Calendly",
    href: site.contact.calendly,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "/company/aifluent",
    href: site.social.linkedin,
    external: true,
  },
];

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (data.website) return; // honeypot

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
    <section id="contato" className="border-t border-border bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">
            Contato
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
            Vamos conversar sobre o seu projeto
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Escolha o canal de sua preferência ou envie uma mensagem. Nosso time
            retorna com uma proposta de IA, automação, integração ou
            desenvolvimento sob medida.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {canais.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-sm"
              >
                <span className="brand-gradient inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-white">
                  <c.icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-ink">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm text-muted-foreground">
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {status === "success" ? (
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center text-center">
              <div className="brand-gradient flex size-14 items-center justify-center rounded-full text-white">
                <Check className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                Mensagem enviada!
              </h3>
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
