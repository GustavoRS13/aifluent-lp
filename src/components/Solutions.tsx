const solutions = [
  {
    tag: "Plataformas Educacionais",
    title: "Gestão acadêmica integrada",
    desc: "Portais do aluno, professor e secretaria conectados: matrícula, notas, frequência e comunicação em um só ambiente, acessível em qualquer dispositivo.",
    points: [
      "Portal do aluno e responsável",
      "Diário e secretaria digital",
      "Comunicação centralizada",
    ],
  },
  {
    tag: "Integração de Sistemas",
    title: "APIs, ERPs e LMS conversando",
    desc: "Desenvolvemos as funções de integração que faltam entre os sistemas que sua instituição já usa — sem migração forçada e com dados consistentes.",
    points: [
      "Integrações via API REST",
      "Sincronização de dados",
      "Conectores sob medida",
    ],
  },
  {
    tag: "Desenvolvimento sob medida",
    title: "Software para o seu processo",
    desc: "Quando nenhuma solução de prateleira resolve, construímos sistemas alinhados ao processo real da instituição, com baixo custo e implantação rápida.",
    points: [
      "Análise do processo atual",
      "Implantação ágil",
      "Evolução contínua",
    ],
  },
] as const;

export function Solutions() {
  return (
    <section id="solucoes" className="bg-slate-50/80 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Soluções"
          title="Tecnologia educacional de ponta a ponta"
          subtitle="Da integração entre sistemas ao desenvolvimento sob demanda, cobrimos todo o ciclo digital da sua instituição de ensino."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <span className="brand-gradient-text text-xs font-semibold uppercase tracking-wider">
                {s.tag}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
              <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
                {s.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-slate-700"
                  >
                    <svg
                      className="mt-0.5 shrink-0 text-brand-blue"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m20 6-11 11-5-5" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}
