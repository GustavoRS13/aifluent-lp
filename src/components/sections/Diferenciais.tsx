import { Users, ShieldCheck, Plug, TrendingUp, Headset } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const itens = [
  {
    icon: Users,
    title: "Equipe especializada",
    desc: "Profissionais experientes em IA, engenharia de software e educação corporativa.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e LGPD",
    desc: "Proteção de dados por padrão, com práticas e processos aderentes à LGPD.",
  },
  {
    icon: Plug,
    title: "Integrações modernas",
    desc: "Arquitetura aberta que conecta seus sistemas atuais via APIs e conectores.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    desc: "Soluções que crescem com a sua empresa, da prova de conceito à operação plena.",
  },
  {
    icon: Headset,
    title: "Suporte consultivo",
    desc: "Acompanhamento próximo e orientação estratégica, não apenas atendimento reativo.",
  },
];

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Diferenciais"
        title="Por que escolher a AIFLUENT"
        subtitle="Tecnologia de ponta combinada a parceria de verdade — para entregar resultado com segurança."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.08}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-white">
                <item.icon className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
