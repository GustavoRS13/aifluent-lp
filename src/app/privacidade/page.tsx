import type { Metadata } from "next";
import { LegalShell, LegalSection } from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da AIFLUENT em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <LegalShell title="Política de Privacidade" updatedAt="junho de 2026">
      <LegalSection title="1. Quem somos">
        <p>
          Esta Política descreve como a{" "}
          <strong>{site.legal.companyName}</strong> (&ldquo;AIFLUENT&rdquo;,
          &ldquo;nós&rdquo;), inscrita no CNPJ {site.legal.cnpj}, trata os dados
          pessoais coletados por meio deste site, em conformidade com a Lei nº
          13.709/2018 (Lei Geral de Proteção de Dados — LGPD).
        </p>
      </LegalSection>

      <LegalSection title="2. Dados que coletamos">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Dados de contato</strong> que você nos fornece pelo
            formulário: nome, empresa, e-mail, telefone e o conteúdo da
            mensagem.
          </li>
          <li>
            <strong>Dados de navegação essenciais</strong>, estritamente
            necessários para o funcionamento e a segurança do site.
          </li>
        </ul>
        <p>
          Não utilizamos cookies de rastreamento ou publicidade. Registramos
          apenas a sua escolha no banner de consentimento, armazenada localmente
          no seu navegador.
        </p>
      </LegalSection>

      <LegalSection title="3. Finalidade e base legal">
        <p>
          Tratamos os dados de contato para responder à sua solicitação,
          apresentar propostas e manter comunicação sobre nossos serviços. As
          bases legais são o <strong>consentimento</strong> (art. 7º, I), o
          interesse legítimo (art. 7º, IX) e/ou os procedimentos preliminares a
          um contrato a seu pedido (art. 7º, V).
        </p>
      </LegalSection>

      <LegalSection title="4. Compartilhamento">
        <p>
          Não vendemos seus dados. Podemos compartilhá-los com operadores que
          nos apoiam (ex.: hospedagem e envio de e-mail), sempre sob obrigações
          de confidencialidade e segurança, ou quando exigido por lei.
        </p>
      </LegalSection>

      <LegalSection title="5. Retenção e segurança">
        <p>
          Mantemos os dados pelo tempo necessário às finalidades acima ou
          conforme exigências legais, aplicando medidas técnicas e
          organizacionais para protegê-los contra acesso não autorizado, perda
          ou alteração.
        </p>
      </LegalSection>

      <LegalSection title="6. Seus direitos (LGPD)">
        <p>
          Você pode, a qualquer momento, solicitar confirmação de tratamento,
          acesso, correção, anonimização, portabilidade, eliminação e a
          revogação do consentimento, nos termos do art. 18 da LGPD.
        </p>
      </LegalSection>

      <LegalSection title="7. Encarregado (DPO) e contato">
        <p>
          Para exercer seus direitos ou tirar dúvidas sobre privacidade, escreva
          para{" "}
          <a
            href={`mailto:${site.legal.dpoEmail}`}
            className="font-medium text-brand-link underline underline-offset-2"
          >
            {site.legal.dpoEmail}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="8. Alterações">
        <p>
          Esta Política pode ser atualizada periodicamente. A data da última
          revisão é sempre indicada no topo desta página.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
