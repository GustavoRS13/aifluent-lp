import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Solutions } from "@/components/Solutions";
import { Differentiators } from "@/components/Differentiators";
import { About } from "@/components/About";
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
        <Pillars />
        <Solutions />
        <Differentiators />
        <About />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
