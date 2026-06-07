import { Target, Eye, Gem } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const valores = [
  {
    icon: Target,
    title: "Missão",
    desc: "Desenvolver soluções tecnológicas que conectem educação, inteligência artificial e produtividade empresarial.",
  },
  {
    icon: Eye,
    title: "Visão",
    desc: "Ser referência em tecnologia educacional e IA aplicada, tornando empresas mais inteligentes e preparadas para o futuro.",
  },
  {
    icon: Gem,
    title: "Valores",
    desc: "Inovação responsável, segurança de dados, excelência técnica e parceria de longo prazo com cada cliente.",
  },
];

export function QuemSomos() {
  return (
    <section
      id="quem-somos"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">
              Quem Somos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
              Tecnologia, inteligência e educação no centro do seu negócio
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A AIFLUENT é uma empresa de tecnologia focada em educação
              corporativa, inteligência artificial, automação de processos e
              integração de sistemas. Unimos engenharia de software de alto
              nível ao conhecimento do que realmente move resultados nas
              organizações.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Trabalhamos lado a lado com cada cliente para transformar
              conhecimento e dados em produtividade — sempre com um compromisso
              inegociável com a segurança da informação e a conformidade à{" "}
              <strong className="text-ink">LGPD</strong>.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4">
          {valores.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="brand-gradient flex size-11 shrink-0 items-center justify-center rounded-xl text-white">
                  <v.icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
