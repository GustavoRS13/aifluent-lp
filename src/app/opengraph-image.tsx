import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagem Open Graph gerada dinamicamente (compartilhamento em redes sociais).
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0b1020",
        backgroundImage:
          "radial-gradient(60% 60% at 15% 10%, rgba(34,211,238,0.30), transparent 60%), radial-gradient(50% 50% at 90% 20%, rgba(168,85,247,0.34), transparent 60%), radial-gradient(60% 60% at 70% 100%, rgba(79,123,240,0.30), transparent 60%)",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 40,
          fontWeight: 800,
          letterSpacing: 2,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            background: "linear-gradient(120deg,#22d3ee,#4f7bf0,#a855f7)",
          }}
        />
        AIFLUENT
      </div>

      <div
        style={{
          marginTop: 40,
          fontSize: 68,
          fontWeight: 800,
          lineHeight: 1.1,
          maxWidth: 900,
        }}
      >
        Inteligência artificial que dá fluência à sua empresa
      </div>

      <div
        style={{
          marginTop: 28,
          fontSize: 30,
          color: "rgba(255,255,255,0.72)",
          maxWidth: 880,
        }}
      >
        IA, automação, integração de sistemas e educação corporativa.
      </div>
    </div>,
    { ...size },
  );
}
