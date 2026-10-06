import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Checklist, Faq } from "@/components/blocks";
import { RevealItem, RevealList } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand, Section } from "@/components/section";
import { solutions } from "@/lib/solutions";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções | JPGLabs" },
      {
        name: "description",
        content:
          "Automação de WhatsApp, sistemas de gestão, agendamento online, dashboards, sites e assistentes com IA: veja para que serve cada solução da JPGLabs.",
      },
    ],
  }),
  component: SolutionsPage,
});

const faq = [
  {
    question: "Como saber qual solução é a certa para mim?",
    answer:
      "Comece pelo problema, não pela ferramenta. Conte o que mais atrapalha o dia a dia e indicamos qual solução resolve isso primeiro. Muitas vezes a resposta é uma só.",
  },
  {
    question: "Posso contratar só uma das soluções?",
    answer:
      "Sim. Cada solução funciona sozinha. Você pode começar por uma e, conforme o resultado, conectar as outras.",
  },
  {
    question: "As soluções podem funcionar juntas?",
    answer:
      "Muitas podem. Um agendamento online, por exemplo, pode enviar lembretes pelo WhatsApp e alimentar um painel de relatórios. Avaliamos caso a caso o que faz sentido conectar.",
  },
  {
    question: "Preciso trocar as ferramentas que já uso?",
    answer:
      "Não necessariamente. Primeiro entendemos o que você já usa e só propomos trocar algo quando isso trouxer ganho real. Sempre que possível, conectamos o que já existe.",
  },
  {
    question: "Vocês fazem soluções sob medida?",
    answer:
      "Sim. As seis soluções acima são pontos de partida. Se o seu processo pede algo diferente, conversamos e desenhamos a solução em torno dele.",
  },
  {
    question: "Quanto custa uma solução?",
    answer:
      "Depende do tamanho do que será feito. Depois da primeira conversa, apresentamos a proposta com o que será feito, o prazo e os valores antes de qualquer compromisso.",
  },
];

function SolutionsPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="SOLUÇÕES"
        title={
          <>
            Soluções pensadas para o seu <span>processo.</span>
          </>
        }
        description="Cada empresa trabalha de um jeito. Começamos entendendo o seu e escolhemos o que realmente ajuda. Aqui você vê, para cada solução, para quem ela serve, o que muda no dia a dia e um exemplo de uso."
      />
      <Section
        id="catalog-title"
        title="O que podemos construir"
        intro="Escolha por onde começar ou conte o seu desafio. Também montamos soluções sob medida."
      >
        <RevealList className="solutions">
          {solutions.map(({ id, icon: Icon, title, text }) => (
            <RevealItem key={id} className="solution">
              <span className="solution-icon">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link to="/solucoes" hash={id} className="solution-link">
                Ver detalhes<span className="sr-only"> de {title}</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </RevealItem>
          ))}
        </RevealList>
      </Section>
      {solutions.map(({ id, icon: Icon, title, forWho, benefits, example }) => (
        <section key={id} id={id} className="section detail" aria-labelledby={`${id}-title`}>
          <div className="section-inner detail-grid">
            <div className="detail-intro">
              <span className="solution-icon">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h2 id={`${id}-title`}>{title}</h2>
              <h3 className="detail-label">Para quem é</h3>
              <p>{forWho}</p>
            </div>
            <div className="detail-body">
              <h3 className="detail-label">O que muda no dia a dia</h3>
              <Checklist items={benefits} />
              <div className="example">
                <h3 className="detail-label">Exemplo ilustrativo</h3>
                <p>{example}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
      <Section id="faq-title" title="Perguntas frequentes">
        <Faq items={faq} />
      </Section>
      <CtaBand
        title="Não achou exatamente o que precisa?"
        text="Conte como funciona o seu processo. Dizemos qual solução faz sentido ou desenhamos uma sob medida."
        label="Falar sobre o meu caso"
      />
    </main>
  );
}
