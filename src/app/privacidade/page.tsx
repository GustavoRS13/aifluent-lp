import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da AIFLUENT em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Logo priority />
          <Link
            href="/"
            className="text-sm font-medium text-muted hover:text-ink"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-white">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-muted">
            Última atualização: junho de 2026
          </p>

          <div className="prose-section mt-10 space-y-8 text-[15px] leading-relaxed text-slate-700">
            <Section title="1. Quem somos">
              <p>
                Esta Política descreve como a{" "}
                <strong>{site.legal.companyName}</strong>{" "}
                (&ldquo;AIFLUENT&rdquo;, &ldquo;nós&rdquo;), inscrita no CNPJ{" "}
                {site.legal.cnpj}, trata os dados pessoais coletados por meio
                deste site, em conformidade com a Lei nº 13.709/2018 (Lei Geral
                de Proteção de Dados — LGPD).
              </p>
            </Section>

            <Section title="2. Dados que coletamos">
              <ul className="list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Dados de contato</strong> que você nos fornece pelo
                  formulário: nome, e-mail, telefone, instituição e o conteúdo
                  da mensagem.
                </li>
                <li>
                  <strong>Dados de navegação essenciais</strong>, estritamente
                  necessários para o funcionamento e a segurança do site.
                </li>
              </ul>
              <p>
                Não utilizamos cookies de rastreamento ou publicidade.
                Registramos apenas a sua escolha no banner de consentimento,
                armazenada localmente no seu navegador.
              </p>
            </Section>

            <Section title="3. Finalidade e base legal">
              <p>
                Tratamos os dados de contato para responder à sua solicitação,
                apresentar propostas e manter comunicação sobre nossos serviços.
                As bases legais são o <strong>consentimento</strong> (art. 7º,
                I) e o interesse legítimo (art. 7º, IX) e/ou os procedimentos
                preliminares a um contrato a seu pedido (art. 7º, V).
              </p>
            </Section>

            <Section title="4. Compartilhamento">
              <p>
                Não vendemos seus dados. Podemos compartilhá-los com operadores
                que nos apoiam (ex.: hospedagem e e-mail), sempre sob obrigações
                de confidencialidade e segurança, ou quando exigido por lei.
              </p>
            </Section>

            <Section title="5. Retenção e segurança">
              <p>
                Mantemos os dados pelo tempo necessário às finalidades acima ou
                conforme exigências legais, aplicando medidas técnicas e
                organizacionais para protegê-los contra acesso não autorizado,
                perda ou alteração.
              </p>
            </Section>

            <Section title="6. Seus direitos (LGPD)">
              <p>
                Você pode, a qualquer momento, solicitar confirmação de
                tratamento, acesso, correção, anonimização, portabilidade,
                eliminação e a revogação do consentimento, nos termos do art. 18
                da LGPD.
              </p>
            </Section>

            <Section title="7. Encarregado (DPO) e contato">
              <p>
                Para exercer seus direitos ou tirar dúvidas sobre privacidade,
                escreva para{" "}
                <a
                  href={`mailto:${site.legal.dpoEmail}`}
                  className="font-medium text-brand-blue underline underline-offset-2"
                >
                  {site.legal.dpoEmail}
                </a>
                .
              </p>
            </Section>

            <Section title="8. Alterações">
              <p>
                Esta Política pode ser atualizada periodicamente. A data da
                última revisão é sempre indicada no topo desta página.
              </p>
            </Section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
