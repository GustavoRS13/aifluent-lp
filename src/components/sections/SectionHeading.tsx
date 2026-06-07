import { Reveal } from "@/components/motion/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <span className="brand-gradient-text text-sm font-semibold uppercase tracking-wider">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
