import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "./SectionHeading";
import { img } from "@/lib/site";

const casos = [
  {
    image: img.casoEducacao,
    alt: "Treinamento e capacitação de equipes",
    title: "Educação Corporativa",
    desc: "Capacitação contínua e onboarding com trilhas inteligentes e mensuráveis.",
  },
  {
    image: img.casoRH,
    alt: "Equipe de recursos humanos em reunião",
    title: "Recursos Humanos",
    desc: "Triagem, automação de processos de pessoas e apoio à tomada de decisão.",
  },
  {
    image: img.casoAtendimento,
    alt: "Atendimento e suporte ao cliente",
    title: "Atendimento",
    desc: "Assistentes de IA e automações que agilizam o atendimento ao cliente.",
  },
  {
    image: img.casoOperacoes,
    alt: "Operações e gestão empresarial",
    title: "Operações",
    desc: "Integração de sistemas e dados para uma operação mais eficiente e visível.",
  },
];

export function CasosDeUso() {
  return (
    <section
      id="casos-de-uso"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Casos de Uso"
        title="Onde a AIFLUENT gera resultado"
        subtitle="Aplicações reais de IA, automação e integração nas áreas que mais impactam o negócio."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {casos.map((c, i) => (
          <Reveal key={c.title} delay={(i % 4) * 0.08} className="h-full">
            <article className="group relative h-72 overflow-hidden rounded-2xl ring-1 ring-border">
              <Image
                src={c.image}
                alt={c.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                  {c.desc}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
