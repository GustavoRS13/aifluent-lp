// Configuração central de conteúdo institucional da AIFLUENT.
// Centralizar aqui facilita ajustes de copy, contato e SEO sem mexer nos componentes.

export const site = {
  name: "AIFLUENT",
  tagline: "Inteligência artificial e educação que impulsionam empresas",
  description:
    "A AIFLUENT é uma empresa de tecnologia focada em educação corporativa, inteligência artificial, automação de processos e integração de sistemas. Conectamos educação, IA e produtividade empresarial.",
  // Domínio de produção.
  url: "https://aifluent.com.br",
  locale: "pt-BR",
  contact: {
    email: "contato@aifluent.com.br",
    phone: "+55 (11) 0000-0000",
    phoneHref: "+551100000000",
    whatsapp: "5511000000000",
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

export const nav = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;
