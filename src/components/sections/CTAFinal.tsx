import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { whatsappUrl } from "@/lib/site";

export function CTAFinal() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="hero-mesh relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <div
            className="absolute inset-0 bg-grid-dark opacity-50"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Pronto para levar inteligência artificial à sua empresa?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Converse com a AIFLUENT e descubra como educação, IA e automação
              podem transformar a produtividade do seu negócio.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button variant="brand" size="xl" render={<a href="#contato" />}>
                Agendar conversa
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="brandOutline"
                size="xl"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
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
          </div>
        </div>
      </Reveal>
    </section>
  );
}
