import { SectionHeading } from "./Solutions";

const items = [
  {
    title: "Integração Inteligente",
    desc: "Interface organizada e fluxos conectados que tornam a navegação entre sistemas simples, rápida e agradável.",
    icon: <path d="M4 7h16M4 12h16M4 17h10" />,
  },
  {
    title: "Soluções Completas",
    desc: "Cobrimos toda a operação digital da instituição, dando visibilidade profunda do negócio educacional.",
    icon: <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
  },
  {
    title: "Implantação Rápida",
    desc: "Alta aderência ao processo: implantação ágil, segura e com investimento reduzido.",
    icon: <path d="M13 2 3 14h7l-1 8 10-12h-7z" />,
  },
  {
    title: "Flexibilidade Total",
    desc: "Sistema aberto e flexível, com telas customizáveis e ferramentas de análise de dados (BI) e IA.",
    icon: <path d="M12 3v18m9-9H3m15.5-6.5-13 13m0-13 13 13" />,
  },
] as const;

export function Differentiators() {
  return (
    <section
      id="diferenciais"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Diferenciais"
        title="Por que a AIFLUENT"
        subtitle="Engenharia de software combinada a conhecimento do setor educacional para entregar resultado de verdade."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
