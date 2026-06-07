# AIFLUENT — Landing Page Institucional

Site institucional premium da **AIFLUENT**, empresa de tecnologia focada em
**educação corporativa, inteligência artificial, automação de processos e integração
de sistemas**. O objetivo da página é transmitir autoridade, inovação, tecnologia,
segurança e IA — não venda direta.

🔗 **Produção:** https://aifluent.com.br · https://aifluent-lp.vercel.app

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19
- **TypeScript** (estrito)
- **Tailwind CSS v4**
- **Shadcn/UI** (Base UI) — Button, Card, Accordion, Input, Textarea, Label
- **Framer Motion** — animações de revelação on-scroll
- **Resend** — envio do formulário de contato
- **lucide-react** — ícones
- Deploy contínuo na **Vercel**

> Identidade visual derivada exclusivamente do logo da AIFLUENT
> (gradiente ciano → azul → roxo).

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
│  ├─ layout.tsx              # metadata/SEO, fonte, banner de cookies (LGPD)
│  ├─ page.tsx                # composição das seções + JSON-LD (schema.org Organization)
│  ├─ opengraph-image.tsx     # imagem Open Graph dinâmica (1200x630)
│  ├─ icon.png / apple-icon.png  # favicon (símbolo "A" da marca)
│  ├─ privacidade/            # Política de Privacidade (LGPD)
│  ├─ termos/                 # Termos de Uso
│  ├─ api/contato/route.ts    # endpoint do formulário (validação + Resend)
│  ├─ sitemap.ts / robots.ts
│  └─ globals.css             # design tokens da marca + tokens shadcn
├─ components/
│  ├─ sections/               # Hero, QuemSomos, Solucoes, Diferenciais,
│  │                          # Processo, Parceiros, FAQ, CTAFinal, SectionHeading
│  ├─ ui/                     # componentes shadcn
│  ├─ motion/Reveal.tsx       # wrapper de animação (Framer Motion)
│  ├─ icons/                  # ícones de marca (SVG inline)
│  ├─ SiteHeader / SiteFooter / ContactSection / CookieConsent / LegalShell / Logo
└─ lib/site.ts                # conteúdo central (copy, contato, dados legais)
```

## Seções da página

Hero · Quem Somos · Soluções (IA, Automação, Integração, Educação Corporativa,
Desenvolvimento Sob Medida, Consultoria Tecnológica) · Diferenciais · Processo de
Trabalho · Clientes e Parceiros · FAQ · CTA Final · Footer.

## LGPD

- Banner de consentimento de cookies (apenas cookies essenciais por padrão).
- **Política de Privacidade** em `/privacidade` e **Termos de Uso** em `/termos`.
- Checkbox de consentimento **obrigatório** no formulário de contato.
- Nenhum rastreador de terceiros incluído por padrão.

## Formulário de contato (Resend)

Campos: **Nome, Empresa, E-mail, Telefone, Mensagem** + consentimento LGPD.
O endpoint `POST /api/contato` valida os dados e envia o e-mail via **Resend**
quando as variáveis de ambiente estão configuradas. Sem a chave, valida e
responde `{ ok: true, delivered: false }` (não quebra o formulário).

Variáveis (configure na Vercel — ver `env.example`):

| Variável         | Descrição                                |
| ---------------- | ---------------------------------------- |
| `RESEND_API_KEY` | Chave da API do Resend                   |
| `CONTACT_INBOX`  | E-mail que recebe os contatos            |
| `CONTACT_FROM`   | Remetente (domínio verificado no Resend) |

## SEO

Metadata completa, Open Graph + Twitter Card (imagem dinâmica), `sitemap.xml`,
`robots.txt` e dados estruturados **schema.org Organization**.

## Deploy (Vercel)

Deploy automático a cada push na branch `main` (projeto conectado ao GitHub).
Deploy manual: `vercel deploy --prod`.

## Conectar domínio do Registro.br

O domínio `aifluent.com.br` aponta para a Vercel **sem trocar os nameservers**
(preservando os registros de e-mail existentes). Na zona DNS do Registro.br:

| Nome                | Tipo    | Dados                  |
| ------------------- | ------- | ---------------------- |
| _(raiz, em branco)_ | `A`     | `76.76.21.21`          |
| `www`               | `CNAME` | `cname.vercel-dns.com` |

Após salvar, a Vercel verifica e emite o certificado SSL automaticamente. Não troque
os nameservers para a Vercel se o domínio usar e-mail no Registro.br — isso
desativaria os registros MX/SPF/DKIM.

## Qualidade

`npm run lint` e `npm run build` sem erros/warnings. Layout mobile-first e
responsivo, sem overflow horizontal. Animações respeitam `prefers-reduced-motion`.
