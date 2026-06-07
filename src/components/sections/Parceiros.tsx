import { Reveal } from "@/components/motion/Reveal";

// Seção preparada para receber os logos de clientes e parceiros.
// Substitua os placeholders por <Image> dos logos quando disponíveis.
const placeholders = Array.from({ length: 6 }, (_, i) => `Parceiro ${i + 1}`);

export function Parceiros() {
  return (
    <section
      id="parceiros"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <Reveal className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Clientes e parceiros que confiam na AIFLUENT
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {placeholders.map((label) => (
            <div
              key={label}
              className="flex h-16 items-center justify-center rounded-xl border border-dashed border-border bg-secondary/40 text-xs font-medium text-muted-foreground/70"
            >
              {label}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
