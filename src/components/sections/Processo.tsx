"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const etapas = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Entendemos o contexto, os processos e os objetivos do negócio para mapear oportunidades reais.",
  },
  {
    n: "02",
    title: "Planejamento",
    desc: "Definimos escopo, arquitetura, prioridades e indicadores de sucesso de forma transparente.",
  },
  {
    n: "03",
    title: "Desenvolvimento",
    desc: "Construímos a solução em ciclos curtos, com qualidade, segurança e validação contínua.",
  },
  {
    n: "04",
    title: "Implantação",
    desc: "Colocamos em produção com cuidado, integrando aos sistemas e capacitando as equipes.",
  },
  {
    n: "05",
    title: "Evolução Contínua",
    desc: "Acompanhamos resultados e evoluímos a solução com novas melhorias e inteligência.",
  },
];

export function Processo() {
  return (
    <section
      id="processo"
      className="border-y border-border bg-secondary/40 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Processo de Trabalho"
          title="Como conduzimos cada projeto"
          subtitle="Um método claro do diagnóstico à evolução contínua — previsível, colaborativo e orientado a resultado."
        />

        <ol className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {etapas.map((e, i) => (
            <motion.li
              key={e.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div
                className="brand-gradient-text text-4xl font-bold tracking-tight"
                aria-hidden
              >
                {e.n}
              </div>
              <span className="mt-3 block h-px w-12 bg-gradient-to-r from-brand-blue to-brand-violet" />
              <h3 className="mt-4 text-base font-semibold text-ink">
                {e.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {e.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
