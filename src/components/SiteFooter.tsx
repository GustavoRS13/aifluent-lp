import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  const year = 2026;
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Tecnologia, automação e inteligência artificial para a educação.
              Sistemas integrados, com segurança e conformidade à LGPD.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Navegação</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted hover:text-ink"
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
                  className="text-sm text-muted hover:text-ink"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <Link
                  href="/privacidade"
                  className="text-sm text-muted hover:text-ink"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li className="text-sm text-muted">{site.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {site.legal.companyName}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted">
            Feito com tecnologia no Brasil 🇧🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
