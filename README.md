# AIFLUENT — Landing Page Institucional

Site institucional da **AIFLUENT**, empresa de tecnologia focada em educação,
especializada no desenvolvimento de funções integradas de sistemas, automação de
processos e inteligência artificial aplicada ao ensino.

Construído com **Next.js 16 (App Router)**, **React 19**, **TypeScript** e
**Tailwind CSS v4**. Design baseado na identidade visual do logo (gradiente
ciano → azul → roxo) e em conformidade com a **LGPD**.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript estrito
- Tailwind CSS v4
- Deploy: Vercel

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint     # eslint
```

## Estrutura

```
src/
├─ app/
│  ├─ layout.tsx           # metadata/SEO, fonte, banner de cookies
│  ├─ page.tsx             # composição das seções da LP
│  ├─ privacidade/         # Política de Privacidade (LGPD)
│  ├─ api/contato/route.ts # endpoint do formulário de contato
│  ├─ sitemap.ts / robots.ts
│  └─ globals.css          # design tokens da marca + utilitários
├─ components/             # Header, Hero, Soluções, Diferenciais, etc.
└─ lib/site.ts             # conteúdo central (copy, contato, dados legais)
```

## Conteúdo e identidade

Toda a copy institucional, dados de contato e informações legais ficam
centralizados em [`src/lib/site.ts`](src/lib/site.ts). Ajuste ali telefone,
e-mail, CNPJ e e-mail do encarregado (DPO) com os dados oficiais.

O logotipo está em `public/aifluent-logo.jpeg`.

## LGPD

- Banner de consentimento de cookies (somente cookies essenciais por padrão).
- Página de **Política de Privacidade** em `/privacidade`.
- Checkbox de consentimento obrigatório no formulário de contato.
- Nenhum rastreador de terceiros incluído por padrão.

## Formulário de contato

O endpoint `POST /api/contato` valida os dados e o consentimento. **Ainda não
envia e-mail** — para entrega real, integre um provedor (ex.: [Resend](https://resend.com))
em `src/app/api/contato/route.ts`, lendo a chave de uma variável de ambiente
(`CONTACT_INBOX`, `RESEND_API_KEY`). Nunca commite segredos. Veja `.env.example`.

## Deploy

Deploy contínuo via Vercel a cada push na branch `main`.
