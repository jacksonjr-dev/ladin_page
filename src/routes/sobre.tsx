import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, Faq } from "@/components/blocks";
import { PageHero } from "@/components/page-hero";
import { CtaBand, Section } from "@/components/section";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sobre")({
  head: () =>
    pageHead({
      path: "/sobre",
      title: "Sobre nós | JPGLabs",
      description:
        "Conheça a JPGLabs, de Fortaleza para todo o Brasil: o que nos move, como pensamos tecnologia e os valores que guiam cada projeto.",
    }),
  component: AboutPage,
});

const values = [
  {
    title: "Propósito antes de tecnologia",
    text: "Tecnologia só vale a pena quando resolve um problema real. Se uma solução simples basta, é essa que recomendamos.",
  },
  {
    title: "Clareza",
    text: "Dizemos o que será feito, o que não será e quanto isso custa. Sem letras miúdas e sem jargão.",
  },
  {
    title: "Parceria",
    text: "Trabalhamos ao lado da sua equipe, e não no lugar dela. Você participa das decisões que são do seu negócio.",
  },
  {
    title: "Simplicidade",
    text: "Uma boa solução é fácil de usar. Buscamos o caminho mais direto entre o problema e o resultado.",
  },
  {
    title: "Honestidade",
    text: "Se não fizer sentido para o seu caso, dizemos. Preferimos uma conversa franca a um projeto que não ajuda.",
  },
  {
    title: "Evolução contínua",
    text: "Processos mudam. Pensamos as soluções para crescer junto com a empresa, em etapas.",
  },
];

const faq = [
  {
    question: "O que significa “Transformando processos em soluções”?",
    answer:
      "Significa que o nosso ponto de partida é sempre o processo: o jeito como a empresa trabalha hoje. A partir dele, identificamos o que pode ser simplificado ou automatizado e construímos a solução para isso.",
  },
  {
    question: "Por que “Tecnologia com propósito”?",
    answer:
      "Porque tecnologia por si só não resolve nada. Cada decisão em um projeto precisa ter um motivo claro ligado ao que a sua empresa quer alcançar.",
  },
  {
    question: "Onde fica a JPGLabs e quem vocês atendem?",
    answer: "A JPGLabs é de Fortaleza, no Ceará, e atende empresas da região e de todo o Brasil.",
  },
  {
    question: "Como posso falar com a equipe?",
    answer:
      "Pelo WhatsApp ou pelo Instagram. A página de Contato tem o número do WhatsApp e uma mensagem inicial já pronta.",
  },
];

function AboutPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="SOBRE NÓS"
        title={
          <>
            Tecnologia com <span>propósito.</span>
          </>
        }
        description="A JPGLabs existe para transformar processos em soluções. Aqui você entende como pensamos, o que nos move e o que pode esperar de um projeto com a gente."
      />

      <Section id="about-title" title="O que nos move">
        <div className="prose-block">
          <p className="prose">
            Acreditamos que tecnologia boa começa numa boa conversa. Por isso, antes de falar de
            ferramentas, queremos entender o que a sua empresa precisa resolver e como o trabalho
            acontece hoje.
          </p>
          <p className="prose">
            Muitas empresas já fazem um bom trabalho, mas perdem tempo com tarefas repetitivas,
            informações espalhadas e processos que dependem de muita gente lembrando de tudo. É
            nesse espaço que atuamos: tirando o peso do que é repetitivo para que a equipe foque no
            que realmente importa.
          </p>
        </div>
      </Section>

      <Section id="place-title" title="De Fortaleza para todo o Brasil">
        <div className="prose-block">
          <p className="prose">
            Somos de Fortaleza e atendemos empresas da nossa região e de todo o Brasil. O ponto de
            partida é sempre o mesmo, esteja a sua empresa na nossa cidade ou do outro lado do país:
            uma conversa sobre o seu processo.
          </p>
        </div>
      </Section>

      <Section
        id="signature-title"
        title="Nossa assinatura, na prática"
        intro="Ideias, processos e soluções: a ordem em que cada projeto acontece."
      >
        <CardGrid
          items={[
            {
              title: "Ideias",
              text: "Ouvimos o desafio e ajudamos a transformá-lo em algo concreto, mesmo quando ele ainda está confuso.",
            },
            {
              title: "Processos",
              text: "Estudamos como o trabalho acontece e onde estão os gargalos antes de propor qualquer mudança.",
            },
            {
              title: "Soluções",
              text: "Construímos e entregamos o que resolve, acompanhando você na fase inicial de uso no dia a dia.",
            },
          ]}
        />
      </Section>

      <Section
        id="values-title"
        title="Os valores que guiam o trabalho"
        intro="Princípios que valem em todo projeto, do menor ao maior."
      >
        <CardGrid items={values} />
      </Section>

      <Section id="faq-title" title="Perguntas frequentes">
        <Faq items={faq} />
      </Section>
      <CtaBand
        title="Quer ver o que podemos construir?"
        text="Conheça as soluções da JPGLabs e veja qual combina com o seu dia a dia."
        label="Ver soluções"
        to="/solucoes"
      />
    </main>
  );
}
