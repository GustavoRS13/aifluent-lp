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
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/aifluent-logo.jpeg"
        alt={`Logotipo ${site.name}`}
        width={680}
        height={196}
        priority={priority}
        className="h-9 w-auto md:h-10"
      />
    </Link>
  );
}
