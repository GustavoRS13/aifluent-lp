// Configuração central de conteúdo institucional da AIFLUENT.
// Centralizar aqui facilita ajustes de copy, contato e SEO sem mexer nos componentes.

export const site = {
  name: "AIFLUENT",
  tagline: "Inteligência artificial e tecnologia para empresas consolidadas",
  description:
    "A AIFLUENT é uma empresa de tecnologia focada em educação corporativa, inteligência artificial, automação de processos e integração de sistemas. Conectamos educação, IA e produtividade empresarial.",
  url: "https://aifluent.com.br",
  locale: "pt-BR",
  contact: {
    email: "contato@aifluent.com.br",
    // Número usado para o link do WhatsApp (apenas dígitos, com DDI).
    whatsapp: "5511999999999",
    whatsappLabel: "+55 (11) 99999-9999",
    // Link do Calendly para agendamento de reunião.
    calendly: "https://calendly.com/aifluent/reuniao",
    address: "São Paulo / SP — Brasil",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/aifluent",
    instagram: "https://www.instagram.com/aifluent",
  },
  // Dados para documentos legais (LGPD). Ajuste com os dados oficiais da empresa.
  legal: {
    companyName: "AIFLUENT Tecnologia",
    cnpj: "00.000.000/0001-00",
    dpoEmail: "privacidade@aifluent.com.br",
  },
} as const;

export const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  "Olá! Vim pelo site da AIFLUENT e gostaria de falar com um especialista.",
)}`;

export const nav = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Casos de Uso", href: "#casos-de-uso" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

// Mapa central das fotos corporativas (Unsplash, verificadas).
const U = (id: string, w = 1200, q = 70) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const img = {
  heroPoster: U("photo-1521737604893-d14cc237f11d", 1600),
  equipe: U("photo-1522071820081-009f0129c71c", 1100),
  // Soluções
  ia: U("photo-1573164713988-8665fc963095", 900),
  automacao: U("photo-1581091226825-a6a2a5aee158", 900),
  integracao: U("photo-1517245386807-bb43f82c33c4", 900),
  educacao: U("photo-1556761175-5973dc0f32e7", 900),
  desenvolvimento: U("photo-1551434678-e076c223a692", 900),
  consultoria: U("photo-1454165804606-c3d57bc86b40", 900),
  // Casos de uso
  casoEducacao: U("photo-1540575467063-178a50c2df87", 900),
  casoRH: U("photo-1552581234-26160f608093", 900),
  casoAtendimento: U("photo-1531482615713-2afd69097998", 900),
  casoOperacoes: U("photo-1542744173-8e7e53415bb0", 900),
  // Faixa de diferenciais (fundo)
  diferenciaisBg: U("photo-1600880292203-757bb62b4baf", 1600),
} as const;
