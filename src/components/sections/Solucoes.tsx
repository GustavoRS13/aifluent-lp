import {
  Brain,
  Workflow,
  Network,
  GraduationCap,
  Code2,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const solucoes = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    desc: "Modelos e assistentes de IA aplicados ao seu contexto: análise preditiva, automação cognitiva e apoio à decisão.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    desc: "Eliminação de tarefas manuais e repetitivas com fluxos automatizados, seguros e auditáveis ponta a ponta.",
  },
  {
    icon: Network,
    title: "Integração de Sistemas",
    desc: "Conectamos ERPs, CRMs, LMS e APIs em um ecossistema único, com dados consistentes e sem retrabalho.",
  },
  {
    icon: GraduationCap,
    title: "Educação Corporativa",
    desc: "Plataformas e trilhas de aprendizagem que capacitam equipes e aceleram a adoção de novas tecnologias.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Sob Medida",
    desc: "Software construído para o seu processo real, quando nenhuma solução de prateleira resolve o desafio.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Tecnológica",
    desc: "Estratégia, arquitetura e roadmap para evoluir sua operação com método e visão de longo prazo.",
  },
];

export function Solucoes() {
  return (
    <section
      id="solucoes"
      className="bg-grid border-y border-border bg-secondary/40 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Soluções"
          title="O que a AIFLUENT entrega"
          subtitle="Um portfólio completo para levar inteligência artificial, automação e conhecimento para dentro da sua empresa."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solucoes.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08} className="h-full">
              <Card className="group h-full gap-0 rounded-2xl [--card-spacing:--spacing(7)] transition-all duration-300 hover:-translate-y-1 hover:shadow-brand hover:ring-brand-blue/20">
                <CardContent>
                  <div className="brand-gradient inline-flex size-12 items-center justify-center rounded-xl text-white">
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
