import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Tecnologias } from "@/components/sections/Tecnologias";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { Solucoes } from "@/components/sections/Solucoes";
import { CasosDeUso } from "@/components/sections/CasosDeUso";
import { Diferenciais } from "@/components/sections/Diferenciais";
import { Processo } from "@/components/sections/Processo";
import { FAQ } from "@/components/sections/FAQ";
import { CTAFinal } from "@/components/sections/CTAFinal";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export default function Home() {
  // Dados estruturados para SEO (Organization).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legal.companyName,
    alternateName: site.name,
    url: site.url,
    description: site.description,
    email: site.contact.email,
    areaServed: "BR",
    knowsAbout: [
      "Inteligência Artificial",
      "Automação de Processos",
      "Integração de Sistemas",
      "Educação Corporativa",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Tecnologias />
        <QuemSomos />
        <Solucoes />
        <CasosDeUso />
        <Diferenciais />
        <Processo />
        <FAQ />
        <CTAFinal />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
