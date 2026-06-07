export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
            <span className="h-2 w-2 rounded-full bg-brand-cyan" />
            Tecnologia &amp; Educação
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Tecnologia que dá{" "}
            <span className="brand-gradient-text">fluência</span> à educação
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Desenvolvemos funções integradas de sistemas, automação de processos
            e inteligência artificial para instituições de ensino conectarem
            dados, pessoas e plataformas — com segurança e conformidade à LGPD.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="brand-gradient inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-violet/20 transition-transform hover:scale-[1.03]"
            >
              Solicitar demonstração
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/5"
            >
              Conhecer soluções
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { k: "Integração", v: "ponta a ponta" },
              { k: "Automação", v: "de processos" },
              { k: "IA", v: "aplicada ao ensino" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-base font-semibold text-white">{s.k}</dt>
                <dd className="text-sm text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block" aria-hidden>
          <div className="animate-float relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-[2rem] brand-gradient opacity-20 blur-2xl" />
            <div className="card-ring absolute inset-6 rounded-[1.75rem] border border-white/10 bg-ink-soft/80 p-6 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-brand-cyan/80" />
                <span className="h-3 w-3 rounded-full bg-brand-blue/80" />
                <span className="h-3 w-3 rounded-full bg-brand-violet/80" />
              </div>
              <div className="mt-6 space-y-3">
                <div className="h-2.5 w-3/4 rounded-full bg-white/15" />
                <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
                <div className="brand-gradient mt-5 h-24 rounded-xl opacity-90" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="h-14 rounded-lg bg-white/8 ring-1 ring-white/10" />
                  <div className="h-14 rounded-lg bg-white/8 ring-1 ring-white/10" />
                  <div className="h-14 rounded-lg bg-white/8 ring-1 ring-white/10" />
                </div>
                <div className="h-2.5 w-2/3 rounded-full bg-white/10" />
                <div className="h-2.5 w-5/6 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
