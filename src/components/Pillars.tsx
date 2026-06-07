const pillars = [
  {
    title: "Sistemas Integrados",
    desc: "Conectamos ERPs, LMS, plataformas acadêmicas e financeiras em um fluxo único, eliminando retrabalho e silos de informação.",
    icon: (
      <path d="M9 3H4a1 1 0 0 0-1 1v5m6-6v18m0-18h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9m6 0H3m18 0h-6" />
    ),
  },
  {
    title: "Inteligência Artificial",
    desc: "IA aplicada ao ensino: personalização da aprendizagem, análise preditiva de evasão e automação de tarefas pedagógicas.",
    icon: (
      <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a4 4 0 0 1-8 0v-1a4 4 0 0 1 0-8V6a4 4 0 0 1 4-4ZM8 9h.01M16 9h.01M9 16h6" />
    ),
  },
  {
    title: "Automação de Processos",
    desc: "Matrículas, cobranças, relatórios e rotinas administrativas executadas de forma automática, segura e auditável.",
    icon: (
      <path d="M12 2v4m0 12v4M2 12h4m12 0h4m-2.5-7.5-2.8 2.8M7.3 16.7l-2.8 2.8m0-15 2.8 2.8m9.4 9.4 2.8 2.8" />
    ),
  },
] as const;

export function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/70"
          >
            <div className="brand-gradient inline-flex h-12 w-12 items-center justify-center rounded-xl text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {p.icon}
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
