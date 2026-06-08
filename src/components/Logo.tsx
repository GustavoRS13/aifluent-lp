import Link from "next/link";
import { site } from "@/lib/site";

// `priority` é aceito por compatibilidade com chamadas existentes (não é
// necessário: o logo é um SVG leve), por isso não é desestruturado aqui.
export function Logo({
  className = "",
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — página inicial`}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      {/* Símbolo "A" da marca — SVG transparente, sem quadrado branco */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo-a.svg"
        alt=""
        aria-hidden
        width={342}
        height={240}
        className="h-10 w-auto md:h-11"
      />
      <span className="text-xl font-bold tracking-tight text-ink">
        AIFLUENT
      </span>
    </Link>
  );
}
