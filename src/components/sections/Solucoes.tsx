import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "./SectionHeading";
import { img } from "@/lib/site";

const solucoes = [
  {
    image: img.ia,
    alt: "Infraestrutura de dados e inteligência artificial",
    title: "Inteligência Artificial",
    desc: "Modelos e assistentes de IA aplicados ao seu contexto: análise preditiva e apoio à decisão.",
  },
  {
    image: img.automacao,
    alt: "Automação de processos em ambiente de tecnologia",
    title: "Automação de Processos",
    desc: "Eliminação de tarefas manuais com fluxos automatizados, seguros e auditáveis.",
  },
  {
    image: img.integracao,
    alt: "Desenvolvedores integrando sistemas",
    title: "Integração de Sistemas",
    desc: "Conectamos ERPs, CRMs e APIs em um ecossistema único, com dados consistentes.",
  },
  {
    image: img.educacao,
    alt: "Treinamento empresarial e educação corporativa",
    title: "Educação Corporativa",
    desc: "Trilhas de aprendizagem que capacitam equipes e aceleram a adoção de tecnologia.",
  },
  {
    image: img.desenvolvimento,
    alt: "Equipe de desenvolvimento de software",
    title: "Desenvolvimento Sob Medida",
    desc: "Software construído para o seu processo real, quando o pronto não resolve.",
  },
  {
    image: img.consultoria,
    alt: "Consultoria e planejamento de tecnologia",
    title: "Consultoria Tecnológica",
    desc: "Estratégia, arquitetura e roadmap para evoluir sua operação com método.",
  },
];

export function Solucoes() {
  return (
    <section
      id="solucoes"
      className="border-y border-border bg-secondary/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Soluções"
          title="O que a AIFLUENT entrega"
          subtitle="Portfólio completo para levar inteligência, automação e conhecimento para dentro da sua empresa."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solucoes.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <a
                    href="#contato"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-violet"
                  >
                    Saiba mais
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
