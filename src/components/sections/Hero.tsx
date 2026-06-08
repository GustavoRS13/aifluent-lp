"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl, img } from "@/lib/site";

const stats = [
  { k: "+15 anos", v: "de experiência" },
  { k: "+100", v: "projetos entregues" },
  { k: "LGPD", v: "by design" },
];

export function Hero() {
  // Carrega o vídeo apenas em telas maiores (performance/dados no mobile).
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShowVideo(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {/* Mídia de fundo: poster sempre presente (LCP rápido) + vídeo em desktop */}
      <Image
        src={img.heroPoster}
        alt="Equipe corporativa da AIFLUENT em reunião"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={img.heroPoster}
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full object-cover motion-reduce:hidden"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}
      {/* Overlay escuro para legibilidade */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/92 via-ink/85 to-ink/70"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
            <Sparkles className="size-3.5 text-brand-cyan" />
            Tecnologia, IA &amp; Educação Corporativa
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Inteligência artificial que dá{" "}
            <span className="brand-gradient-text">fluência</span> à sua empresa
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Conectamos educação corporativa, inteligência artificial, automação
            de processos e integração de sistemas — transformando conhecimento e
            dados em produtividade, com segurança e conformidade à LGPD.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="brand" size="xl" render={<a href="#contato" />}>
              Solicitar demonstração
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="brandOutline"
              size="xl"
              className="border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white/10"
              render={
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Falar com especialista
            </Button>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.k}>
                <dt className="text-2xl font-bold text-white">{s.k}</dt>
                <dd className="text-sm text-white/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
