import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "A AIFLUENT atende empresas de qualquer porte?",
    a: "Sim. Trabalhamos desde provas de conceito para times enxutos até projetos de IA e integração em grandes operações, adaptando o escopo à realidade de cada empresa.",
  },
  {
    q: "Como a AIFLUENT garante a segurança e a conformidade com a LGPD?",
    a: "Adotamos segurança desde a concepção (privacy by design), tratamento mínimo de dados, controles de acesso e processos aderentes à LGPD. Dados pessoais são tratados com base legal e consentimento explícito.",
  },
  {
    q: "Vocês integram com os sistemas que já utilizamos?",
    a: "Sim. Nossa abordagem é de arquitetura aberta: conectamos ERPs, CRMs, LMS e outras ferramentas via APIs e conectores, sem exigir a substituição do que já funciona.",
  },
  {
    q: "Qual a diferença entre solução pronta e desenvolvimento sob medida?",
    a: "Quando uma plataforma existente resolve, aceleramos a implantação. Quando o processo é específico, desenvolvemos software sob medida — sempre com foco em aderência e evolução.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Você solicita uma demonstração ou fala com um especialista pelo formulário. A partir daí, iniciamos um diagnóstico para entender o desafio e propor o melhor caminho.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="FAQ"
        title="Perguntas frequentes"
        subtitle="Tudo o que você precisa saber antes de falar com a gente."
      />

      <Reveal delay={0.1} className="mt-10">
        <Accordion multiple={false} className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-ink">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
