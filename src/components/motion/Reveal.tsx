"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  /** Atraso da animação em segundos (útil para efeito cascata). */
  delay?: number;
  /** Deslocamento vertical inicial em px. */
  y?: number;
};

// Wrapper de revelação ao entrar na viewport. Respeita prefers-reduced-motion
// (o Framer Motion desativa a transição automaticamente nesse caso).
export function Reveal({ delay = 0, y = 20, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
