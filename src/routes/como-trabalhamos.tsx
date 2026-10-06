import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, Checklist, Faq } from "@/components/blocks";
import { RevealItem, RevealList } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand, Section } from "@/components/section";

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

// Draft copy: review before publishing, the steps describe the intended way of working.
const steps = [
  {
    title: "Conversamos",
    summary: "Você conta o que a sua empresa precisa, sem burocracia.",
    happens:
      "Chamamos você para uma conversa para entender o negócio, o que está travando o dia a dia e o que você gostaria que fosse diferente. Não precisa chegar com nada pronto.",
    youDo: ["Conte o desafio com as suas palavras", "Diga quem é afetado e com que frequência"],
    youGet: [
      "Clareza sobre se e como podemos ajudar",
      "Uma devolutiva honesta, mesmo que seja “isso não precisa de tecnologia”",
    ],
  },
  {
    title: "Entendemos o processo",
    summary: "Olhamos como o trabalho acontece hoje para achar onde a tecnologia ajuda.",
    happens:
      "Mapeamos o caminho de ponta a ponta: quem faz o quê, em que ordem, com quais ferramentas e onde o tempo se perde. É aqui que as melhores ideias aparecem.",
    youDo: [
      "Mostre como o processo funciona hoje",
      "Compartilhe planilhas, fluxos e exemplos reais",
    ],
    youGet: ["Um retrato claro do processo atual", "Os pontos em que a automação traz mais ganho"],
  },
  {
    title: "Propomos o próximo passo",
    summary: "Explicamos o que faz sentido fazer, em linguagem direta.",
    happens:
      "Apresentamos a proposta com o que será feito, o que fica fora, os prazos e os valores. Se fizer sentido, sugerimos começar por uma parte menor para validar o resultado.",
    youDo: ["Tire todas as dúvidas", "Decida se e por onde começar"],
    youGet: [
      "Escopo, prazo e valores combinados antes de qualquer compromisso",
      "Uma proposta que você consegue explicar para a sua equipe",
    ],
  },
  {
    title: "Construímos junto",
    summary: "Você acompanha o desenvolvimento e participa das decisões.",
    happens:
      "Desenvolvemos em etapas curtas, mostrando o que já funciona. Você testa, dá retorno e ajustamos o rumo antes de seguir. A equipe aprende a usar a solução durante o processo.",
    youDo: ["Teste cada entrega e dê retorno", "Valide se a solução reflete o seu processo"],
    youGet: [
      "Uma solução funcionando no seu dia a dia",
      "Orientação para a equipe usar com segurança",
    ],
  },
];

const principles = [
  {
    title: "Entender antes de construir",
    text: "Nenhuma solução nasce de um pacote pronto. Primeiro vem o entendimento do seu processo.",
  },
  {
    title: "Combinar antes de começar",
    text: "Escopo, prazo e valores ficam claros antes de qualquer compromisso, sem surpresas no meio do caminho.",
  },
  {
    title: "Mostrar o que está funcionando",
    text: "Entregas curtas e frequentes, para você ver o progresso e corrigir o rumo cedo.",
  },
  {
    title: "Explicar em português claro",
    text: "Sem jargão. Se algo ficar confuso, nós explicamos de novo.",
  },
];

const faq = [
  {
    question: "Preciso ter tudo definido antes de falar com vocês?",
    answer:
      "Não. A primeira conversa serve justamente para organizar as ideias. Muita gente chega só com a sensação de que algo poderia ser mais simples, e isso já basta para começar.",
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
  {
    question: "Como faço para começar?",
    answer: "Chame a gente pelo WhatsApp e conte o desafio. É o ponto de partida de tudo.",
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
      <CtaBand />
    </main>
  );
}
