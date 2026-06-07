const services = [
  {
    title: "Suporte personalizado",
    desc: "Atendimento próximo, remoto e presencial, para resolução rápida de qualquer demanda.",
  },
  {
    title: "Consultoria especializada",
    desc: "Consultoria técnica e de processos educacionais para evoluir a operação com método.",
  },
  {
    title: "Desenvolvimento sob demanda",
    desc: "Implementações customizadas que garantem aderência total à realidade da instituição.",
  },
] as const;

export function About() {
  return (
    <section id="sobre" className="bg-slate-50/80 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">
              Sobre a AIFLUENT
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Uma empresa de tecnologia focada em educação
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Nascemos para aproximar tecnologia e ensino. Nossa especialidade é
              o desenvolvimento de funções integradas de sistemas — fazendo
              plataformas acadêmicas, administrativas e financeiras trabalharem
              juntas.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Unimos engenharia de software, automação e inteligência artificial
              a um compromisso inegociável com privacidade e conformidade à{" "}
              <strong className="text-ink">LGPD</strong>, tratando os dados de
              alunos e instituições com a segurança que a educação exige.
            </p>
          </div>

          <div className="grid gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="brand-gradient flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
