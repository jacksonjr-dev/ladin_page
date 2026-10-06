import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CardGrid, Faq } from "@/components/blocks";
import { RevealItem, RevealList } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand, Section } from "@/components/section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { steps } from "@/lib/process";
import { solutions } from "@/lib/solutions";

const TITLE = "JPGLabs | Automações, sistemas e sites para a sua empresa";
const DESCRIPTION =
  "A JPGLabs cria automações, sistemas, sites e assistentes com IA para simplificar o dia a dia da sua empresa. Converse com a gente pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    title: "Ideias",
    text: "Tudo começa ouvindo o que a sua empresa precisa. Antes de pensar em ferramenta, queremos entender o problema.",
  },
  {
    title: "Processos",
    text: "Olhamos como o trabalho acontece hoje: quem faz, em que ordem e onde o tempo se perde.",
  },
  {
    title: "Soluções",
    text: "Construímos o que resolve de verdade o dia a dia do seu negócio, em vez de empurrar um pacote pronto.",
  },
];

const signs = [
  {
    title: "O WhatsApp não para",
    text: "A equipe passa o dia respondendo às mesmas perguntas e, mesmo assim, algumas mensagens ficam sem resposta.",
  },
  {
    title: "Tudo vive em planilhas",
    text: "Clientes, pedidos e tarefas ficam espalhados em arquivos e cadernos, e ninguém tem certeza de qual versão vale.",
  },
  {
    title: "Tarefas repetitivas",
    text: "As mesmas informações são digitadas mais de uma vez, em lugares diferentes, todos os dias.",
  },
  {
    title: "Falta de visão do negócio",
    text: "Fechar o relatório do mês dá trabalho, e as decisões acabam baseadas na intuição.",
  },
  {
    title: "Agenda por mensagem",
    text: "Marcar, confirmar e remarcar horários consome tempo da equipe e ainda gera faltas.",
  },
  {
    title: "Presença online fraca",
    text: "A empresa é boa no que faz, mas quem pesquisa na internet não encontra uma apresentação à altura.",
  },
];

const faq = [
  {
    question: "A JPGLabs atende qualquer tipo de empresa?",
    answer:
      "Atendemos empresas que querem simplificar processos, seja no atendimento, na gestão, nos agendamentos ou na presença online. Se você não tem certeza de que faz sentido para o seu caso, conte a situação pelo WhatsApp e respondemos com sinceridade.",
  },
  {
    question: "Por onde começar?",
    answer:
      "Pela conversa. Chame a gente pelo WhatsApp ou pelo Instagram com uma mensagem curta sobre o desafio. A partir daí sugerimos o próximo passo, que pode ser uma solução pequena para começar.",
  },
  {
    question: "Preciso saber de tecnologia?",
    answer:
      "Não. Cuidamos da parte técnica e explicamos tudo em linguagem direta. Você participa das decisões que são do seu negócio.",
  },
];

function HomePage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="JPGLABS"
        title={
          <>
            Transformando processos em <span>soluções.</span>
          </>
        }
        description="Criamos automações, sistemas, sites e assistentes que tiram o trabalho repetitivo do caminho da sua equipe. Conte o que sua empresa precisa e vamos pensar juntos no próximo passo."
      >
        <WhatsAppButton />
        <Link to="/solucoes" className="ghost-link">
          Ver soluções
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </PageHero>

      <Section
        id="pillars-title"
        title="Ideias. Processos. Soluções."
        intro="Tecnologia com propósito: do primeiro papo até a entrega. É assim que pensamos cada projeto."
      >
        <CardGrid items={pillars} />
      </Section>

      <Section
        id="signs-title"
        title="Sua empresa se reconhece em algum destes sinais?"
        intro="São os problemas que mais aparecem no dia a dia de quem atende, vende e gerencia. Se algum deles é familiar, vale conversar."
      >
        <CardGrid items={signs} />
      </Section>

      <Section
        id="what-title"
        title="O que podemos construir"
        intro="Seis soluções para começar. Cada uma resolve um tipo de problema, e muitas podem ser conectadas entre si."
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
                Saiba mais<span className="sr-only"> sobre {title}</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </RevealItem>
          ))}
        </RevealList>
      </Section>

      <Section
        id="how-title"
        title="Como funciona, em quatro etapas"
        intro="Da primeira conversa até a solução funcionando. Cada etapa termina com algo concreto para você."
      >
        <RevealList className="steps steps-4">
          {steps.map((step) => (
            <RevealItem key={step.title} className="step">
              <h3>{step.title}</h3>
              <p>{step.summary}</p>
            </RevealItem>
          ))}
        </RevealList>
        <p className="section-link">
          <Link to="/como-trabalhamos" className="ghost-link">
            Ver o passo a passo completo
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </p>
      </Section>

      <Section id="faq-title" title="Perguntas frequentes">
        <Faq items={faq} />
      </Section>
      <CtaBand />
    </main>
  );
}
