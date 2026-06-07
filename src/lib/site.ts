// Configuração central de conteúdo institucional da AIFLUENT.
// Centralizar aqui facilita ajustes de copy, contato e SEO sem mexer nos componentes.

export const site = {
  name: "AIFLUENT",
  tagline: "Tecnologia que dá fluência à educação",
  description:
    "A AIFLUENT é uma empresa de tecnologia focada em educação, especializada no desenvolvimento de funções integradas de sistemas, automação de processos e inteligência artificial aplicada ao ensino.",
  // Domínio de produção — atualize após apontar o registro.br para a Vercel.
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
  // Dados para a Política de Privacidade (LGPD). Ajuste com os dados oficiais da empresa.
  legal: {
    companyName: "AIFLUENT Tecnologia",
    cnpj: "00.000.000/0001-00",
    dpoEmail: "privacidade@aifluent.com.br",
  },
} as const;

export const nav = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;
