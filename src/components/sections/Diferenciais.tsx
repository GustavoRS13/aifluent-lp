import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { img } from "@/lib/site";

const indicadores = [
  { valor: "+15", label: "anos de experiência" },
  { valor: "+100", label: "projetos entregues" },
  { valor: "LGPD", label: "by design" },
  { valor: "100%", label: "arquitetura escalável" },
];

export function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="relative isolate overflow-hidden bg-ink py-24 text-white"
    >
      <Image
        src={img.diferenciaisBg}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/95 via-ink/90 to-ink/80"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            A solidez de quem entrega de verdade
          </h2>
        </Reveal>

        <dl className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {indicadores.map((ind, i) => (
            <Reveal key={ind.label} delay={i * 0.08} className="text-center">
              <dt className="brand-gradient-text text-4xl font-bold tracking-tight sm:text-5xl">
                {ind.valor}
              </dt>
              <dd className="mt-2 text-sm font-medium text-white/70">
                {ind.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
