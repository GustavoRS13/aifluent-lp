import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({
  className = "",
  priority = false,
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
      {/* Símbolo "A" da marca — PNG transparente (sem quadrado branco),
          otimizado pelo next/image. */}
      <Image
        src="/logo-a.png"
        alt=""
        aria-hidden
        width={342}
        height={240}
        priority={priority}
        sizes="64px"
        className="h-10 w-auto md:h-11"
      />
      <span className="text-xl font-bold tracking-tight text-ink">
        AIFLUENT
      </span>
    </Link>
  );
}
