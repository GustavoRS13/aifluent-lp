import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empresa de tecnologia focada em educação corporativa, inteligência
              artificial, automação de processos e integração de sistemas.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da AIFLUENT"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand-blue/40 hover:text-ink"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label="Enviar e-mail"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand-blue/40 hover:text-ink"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Empresa</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">
              Contato &amp; Legal
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-sm text-muted-foreground hover:text-ink"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-sm text-muted-foreground hover:text-ink"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="text-sm text-muted-foreground hover:text-ink"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {site.legal.companyName}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Tecnologia, IA e educação — feito no Brasil 🇧🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
