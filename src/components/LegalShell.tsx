import Link from "next/link";
import { Logo } from "./Logo";
import { SiteFooter } from "./SiteFooter";

export function LegalShell({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Logo priority />
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-ink"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Última atualização: {updatedAt}
          </p>
          <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-slate-700">
            {children}
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
