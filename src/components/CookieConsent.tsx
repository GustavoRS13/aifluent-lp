"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "aifluent.cookie-consent.v1";

// Banner de consentimento LGPD. Sem cookies de rastreio por padrão:
// guardamos apenas a escolha do usuário em localStorage. Caso analytics
// sejam adicionados no futuro, dispare-os somente quando a escolha for "accepted".
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage só existe no cliente; lemos no mount para evitar mismatch de
    // hidratação. O setState pós-mount é intencional e ocorre uma única vez.
    let consented = false;
    try {
      consented = Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      consented = false;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- leitura client-only no mount
    if (!consented) setVisible(true);
  }, []);

  function decide(choice: "accepted" | "rejected") {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, ts: new Date().toISOString() }),
      );
    } catch {
      /* armazenamento indisponível — apenas oculta o banner */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de privacidade e cookies"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur sm:inset-x-4 sm:bottom-4"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-600">
          Usamos apenas os cookies essenciais para o funcionamento do site. Ao
          continuar, você concorda com a nossa{" "}
          <Link
            href="/privacidade"
            className="font-medium text-brand-link underline underline-offset-2"
          >
            Política de Privacidade
          </Link>{" "}
          (LGPD).
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            Rejeitar
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="brand-gradient rounded-full px-5 py-2 text-sm font-semibold text-white"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
