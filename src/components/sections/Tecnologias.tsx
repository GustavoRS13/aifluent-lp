import { Reveal } from "@/components/motion/Reveal";

const techs = [
  { name: "OpenAI", src: "/logos/openai.svg" },
  { name: "Anthropic", src: "/logos/anthropic.svg" },
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "Google Cloud", src: "/logos/googlecloud.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "PostgreSQL", src: "/logos/postgresql.svg" },
  { name: "Next.js", src: "/logos/nextjs.svg" },
];

export function Tecnologias() {
  return (
    <section className="border-b border-border bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tecnologias que utilizamos
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-9 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {techs.map((t) => (
              <li key={t.name} className="flex items-center justify-center">
                <span
                  role="img"
                  aria-label={t.name}
                  title={t.name}
                  className="block h-8 w-full bg-slate-500 transition-colors duration-300 hover:bg-ink"
                  style={{
                    maskImage: `url(${t.src})`,
                    WebkitMaskImage: `url(${t.src})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
