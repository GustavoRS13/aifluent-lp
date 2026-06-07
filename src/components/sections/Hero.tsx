import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { k: "IA", v: "aplicada ao negócio" },
  { k: "Automação", v: "de processos" },
  { k: "Integração", v: "de sistemas" },
];

// Server component: o conteúdo do hero é renderizado visível no primeiro paint
// (sem animação que esconda o texto), preservando um bom LCP. As animações de
// entrada ficam nas seções seguintes (on-scroll, via Framer Motion).
export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
            <Sparkles className="size-3.5 text-brand-cyan" />
            Tecnologia, IA &amp; Educação Corporativa
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Inteligência artificial que dá{" "}
            <span className="brand-gradient-text">fluência</span> à sua empresa
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            A AIFLUENT conecta educação corporativa, inteligência artificial,
            automação de processos e integração de sistemas — transformando
            conhecimento e dados em produtividade, com segurança e conformidade
            à LGPD.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="brand" size="xl" render={<a href="#contato" />}>
              Solicitar demonstração
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="brandOutline"
              size="xl"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              render={<a href="#contato" />}
            >
              Falar com especialista
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.k}>
                <dt className="text-base font-semibold text-white">{s.k}</dt>
                <dd className="text-sm text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden lg:block" aria-hidden>
          <div className="animate-float relative mx-auto aspect-square w-full max-w-md">
            <div className="brand-gradient absolute inset-0 rounded-[2rem] opacity-20 blur-2xl" />
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
                  <div className="h-14 rounded-lg bg-white/10 ring-1 ring-white/10" />
                  <div className="h-14 rounded-lg bg-white/10 ring-1 ring-white/10" />
                  <div className="h-14 rounded-lg bg-white/10 ring-1 ring-white/10" />
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
