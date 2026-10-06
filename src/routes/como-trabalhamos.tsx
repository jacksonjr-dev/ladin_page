import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, Checklist, Faq } from "@/components/blocks";
import { RevealItem, RevealList } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand, Section } from "@/components/section";
import { principles, steps } from "@/lib/process";

export const Route = createFileRoute("/como-trabalhamos")({
  head: () => ({
    meta: [
      { title: "Como trabalhamos | JPGLabs" },
      {
        name: "description",
        content:
          "Veja o passo a passo da JPGLabs, da primeira conversa até a solução funcionando: o que acontece em cada etapa, o que você faz e o que recebe.",
      },
    ],
  }),
  component: HowWeWorkPage,
});

const faq = [
  {
    question: "Preciso ter tudo definido antes de falar com vocês?",
    answer:
      "Não. A primeira conversa serve justamente para organizar as ideias. Você pode chegar só com a sensação de que algo poderia ser mais simples, e isso já basta para começar.",
  },
  {
    question: "Quanto tempo leva até a solução funcionar?",
    answer:
      "Depende do tamanho do que será feito. Por isso o prazo só é definido na proposta, depois de entendermos o seu processo. Quando possível, dividimos em etapas para você ver resultado cedo.",
  },
  {
    question: "Posso mudar o que foi combinado durante o projeto?",
    answer:
      "Pode. Como você acompanha as entregas, é normal ajustar o rumo. Mudanças maiores são conversadas e alinhadas antes, para que prazo e valores continuem claros.",
  },
  {
    question: "E depois que a solução estiver pronta?",
    answer:
      "Orientamos a sua equipe a usar a solução e conversamos sobre acompanhamento e melhorias futuras. O formato é combinado na proposta.",
  },
];

function HowWeWorkPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="COMO TRABALHAMOS"
        title={
          <>
            Do primeiro papo até a <span>solução.</span>
          </>
        }
        description="Um caminho simples, com você participando em cada etapa. Veja o que acontece em cada fase, o que esperamos de você e o que você recebe ao final."
      />

      <Section
        id="steps-title"
        title="O passo a passo"
        intro="Quatro etapas, nesta ordem. Cada uma termina com algo concreto na sua mão."
      >
        <RevealList className="timeline">
          {steps.map((step) => (
            <RevealItem key={step.title} className="timeline-item" lift={false}>
              <div className="timeline-head">
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </div>
              <div className="timeline-body">
                <div>
                  <h4 className="detail-label">O que acontece</h4>
                  <p>{step.happens}</p>
                </div>
                <div>
                  <h4 className="detail-label">O que você faz</h4>
                  <Checklist items={step.youDo} />
                </div>
                <div>
                  <h4 className="detail-label">O que você recebe</h4>
                  <Checklist items={step.youGet} />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealList>
      </Section>

      <Section
        id="principles-title"
        title="Princípios que guiam o trabalho"
        intro="Regras simples que valem em todos os projetos, grandes ou pequenos."
      >
        <CardGrid items={principles} columns={4} />
      </Section>

      <Section id="faq-title" title="Perguntas frequentes">
        <Faq items={faq} />
      </Section>
      <CtaBand
        title="A primeira etapa é uma conversa."
        text="Conte o desafio com as suas palavras. É por aí que tudo começa."
        label="Começar a conversa"
      />
    </main>
  );
}
