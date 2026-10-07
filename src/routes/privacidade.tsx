import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { contact } from "@/lib/contact";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () =>
    pageHead({
      path: "/privacidade",
      title: "Política de privacidade | JPGLabs",
      description:
        "Como a JPGLabs trata os dados de quem entra em contato e o que acontece com os cookies de medição do site.",
    }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Quem somos",
    body: [
      "A JPGLabs é uma empresa de tecnologia de Fortaleza, no Ceará. Esta política explica como tratamos os dados de quem visita este site ou entra em contato com a gente.",
    ],
  },
  {
    title: "Quais dados tratamos",
    body: [
      "Formulário de contato: nome, empresa (opcional), e-mail (opcional), WhatsApp (opcional) e a descrição do seu desafio. O formulário não envia nada para um servidor nosso: ele abre o WhatsApp com a mensagem já escrita. Os dados só chegam até nós se você enviar essa mensagem por lá.",
      "Conversas no WhatsApp: o que você nos envia pelo WhatsApp é tratado também conforme a política do próprio WhatsApp.",
      "Medição do site e dos anúncios: só com o seu consentimento, podemos usar cookies do Google (Google Analytics e Google Ads) para entender quantas pessoas visitam o site, quais páginas acessam e se um anúncio levou a um contato. Se você recusar, esses cookies não são usados.",
      "Dados técnicos: o provedor de hospedagem do site pode registrar informações técnicas, como o endereço IP, para fins de segurança e funcionamento.",
    ],
  },
  {
    title: "Para que usamos os dados",
    body: [
      "Para responder o seu contato, entender o seu processo, preparar propostas e medir e melhorar o site e os anúncios. Não vendemos os seus dados.",
    ],
  },
  {
    title: "Com quem compartilhamos",
    body: [
      "Com a Meta (WhatsApp), quando você conversa com a gente por lá, com o Google, quando você aceita os cookies de medição, e com o provedor de hospedagem do site.",
    ],
  },
  {
    title: "Seus direitos",
    body: [
      "Pela Lei Geral de Proteção de Dados (LGPD), você pode pedir a confirmação de que tratamos seus dados, o acesso a eles, a correção, a exclusão e a revogação do consentimento. Para isso, fale com a gente pelo WhatsApp ou pelo Instagram, indicados abaixo.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Você pode mudar a sua escolha a qualquer momento em “Preferências de cookies”, no rodapé do site, ou apagando os dados do navegador.",
    ],
  },
  {
    title: "Contato sobre privacidade",
    body: [`WhatsApp: ${contact.whatsappLabel}. Instagram: ${contact.instagramHandle}.`],
  },
];

function PrivacyPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="PRIVACIDADE"
        title="Política de privacidade"
        description="Como tratamos os dados de quem entra em contato e o que acontece com os cookies do site. Última atualização: 7 de outubro de 2026."
      />
      {sections.map((section, index) => (
        <Section key={section.title} id={`privacy-${index}`} title={section.title}>
          <div className="prose-block">
            {section.body.map((paragraph) => (
              <p key={paragraph} className="prose">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>
      ))}
    </main>
  );
}
