import type { Metadata } from "next";
import { LegalShell, LegalSection } from "@/components/LegalShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site institucional da AIFLUENT.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <LegalShell title="Termos de Uso" updatedAt="junho de 2026">
      <LegalSection title="1. Aceitação dos termos">
        <p>
          Ao acessar e utilizar o site da{" "}
          <strong>{site.legal.companyName}</strong> (&ldquo;AIFLUENT&rdquo;),
          você concorda com estes Termos de Uso. Caso não concorde, recomendamos
          não utilizar o site.
        </p>
      </LegalSection>

      <LegalSection title="2. Objeto do site">
        <p>
          Este site tem caráter <strong>institucional e informativo</strong>,
          destinado a apresentar a empresa e suas soluções de tecnologia,
          inteligência artificial, automação e educação corporativa. As
          informações aqui dispostas não constituem oferta ou proposta comercial
          vinculante.
        </p>
      </LegalSection>

      <LegalSection title="3. Propriedade intelectual">
        <p>
          Todo o conteúdo deste site — incluindo marca, logotipo, textos, layout
          e elementos visuais — pertence à AIFLUENT ou a seus licenciadores e é
          protegido pela legislação aplicável. É vedada a reprodução,
          distribuição ou modificação sem autorização prévia e por escrito.
        </p>
      </LegalSection>

      <LegalSection title="4. Uso adequado">
        <p>Ao utilizar o site, você se compromete a não:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Praticar atos que comprometam a segurança ou o funcionamento do
            site;
          </li>
          <li>
            Enviar conteúdo ilícito, ofensivo ou que viole direitos de
            terceiros;
          </li>
          <li>Utilizar meios automatizados para coleta indevida de dados.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Formulário de contato">
        <p>
          Os dados informados no formulário são tratados conforme a nossa{" "}
          <a
            href="/privacidade"
            className="font-medium text-brand-blue underline underline-offset-2"
          >
            Política de Privacidade
          </a>{" "}
          e a LGPD. O envio depende do aceite explícito do tratamento dos dados.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitação de responsabilidade">
        <p>
          A AIFLUENT empenha-se em manter as informações corretas e atualizadas,
          mas não garante a ausência de eventuais imprecisões ou
          indisponibilidades temporárias. O uso do site é de responsabilidade do
          usuário.
        </p>
      </LegalSection>

      <LegalSection title="7. Links externos">
        <p>
          O site pode conter links para páginas de terceiros. A AIFLUENT não se
          responsabiliza pelo conteúdo ou pelas práticas de privacidade desses
          sites externos.
        </p>
      </LegalSection>

      <LegalSection title="8. Alterações e foro">
        <p>
          Estes Termos podem ser atualizados a qualquer momento, com a data de
          revisão indicada no topo da página. Aplica-se a legislação brasileira,
          ficando eleito o foro do domicílio da AIFLUENT para dirimir eventuais
          controvérsias.
        </p>
        <p>
          Dúvidas sobre estes Termos podem ser enviadas para{" "}
          <a
            href={`mailto:${site.contact.email}`}
            className="font-medium text-brand-blue underline underline-offset-2"
          >
            {site.contact.email}
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  );
}
