import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { img } from "@/lib/site";

const destaques = [
  "Educação corporativa, IA e automação sob um mesmo teto",
  "Times de tecnologia experientes e dedicados",
  "Segurança e LGPD em primeiro lugar",
];

export function QuemSomos() {
  return (
    <section
      id="quem-somos"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border">
            <Image
              src={img.equipe}
              alt="Equipe de tecnologia da AIFLUENT trabalhando em conjunto"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">
              Quem Somos
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance text-ink sm:text-4xl">
              Uma empresa de tecnologia, não mais uma startup de IA
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Unimos engenharia de software, inteligência artificial e
              conhecimento de negócio para tornar empresas mais produtivas — com
              entregas reais e suporte de verdade.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {destaques.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-base text-ink"
                >
                  <span className="brand-gradient mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m20 6-11 11-5-5" />
                    </svg>
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
