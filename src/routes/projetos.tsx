import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/blocks";
import { RevealItem, RevealList } from "@/components/reveal";
import { PageHero } from "@/components/page-hero";
import { CtaBand, EmptyState, Section } from "@/components/section";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos | JPGLabs" },
      {
        name: "description",
        content:
          "Cenários de projetos que a JPGLabs desenvolve: do problema ao resultado esperado. Cases reais serão publicados aqui.",
      },
    ],
  }),
  component: ProjectsPage,
});

// Illustrative scenarios, not real clients: the page says so explicitly.
const scenarios = [
  {
    area: "Atendimento",
    title: "Atendimento organizado no WhatsApp",
    problem:
      "Uma empresa recebe dezenas de mensagens por dia. As perguntas se repetem, alguns contatos ficam sem resposta e ninguém sabe quem está atendendo quem.",
    solution:
      "Fluxo de atendimento que responde as dúvidas comuns, coleta os dados do cliente e encaminha a conversa para a pessoa certa.",
    result:
      "A equipe passa a receber conversas já organizadas, com o contexto do cliente, e dedica o tempo ao que exige atenção humana.",
  },
  {
    area: "Gestão",
    title: "Sistema para substituir as planilhas",
    problem:
      "Pedidos, clientes e tarefas vivem em planilhas diferentes. Há retrabalho de digitação e dúvidas sobre qual informação está atualizada.",
    solution:
      "Sistema de gestão desenhado para o fluxo da empresa, com cadastro de clientes, pedidos, tarefas e permissões por pessoa.",
    result:
      "Uma única fonte de informação, com cada pessoa vendo só o que precisa e o histórico de cada pedido à mão.",
  },
  {
    area: "Agenda",
    title: "Agenda online com lembretes",
    problem:
      "Marcar e remarcar horários acontece por mensagem, consome tempo da equipe e ainda gera faltas sem aviso.",
    solution:
      "Agendamento online em que o cliente escolhe o horário, com confirmação e lembrete pelo WhatsApp e controle de cancelamentos.",
    result: "Menos tempo gasto combinando horários e uma agenda mais previsível para a equipe.",
  },
  {
    area: "Gestão de dados",
    title: "Painel de acompanhamento do negócio",
    problem:
      "Os números estão espalhados e fechar o relatório do mês depende de montar tudo manualmente.",
    solution:
      "Dashboard que reúne vendas, atendimentos e indicadores, com relatórios prontos para exportar em Excel ou PDF.",
    result:
      "O gestor acompanha o negócio em tempo real e decide com base em dados, não em estimativa.",
  },
];

const faq = [
  {
    question: "Os cenários acima são clientes reais?",
    answer:
      "Não. São exemplos ilustrativos de problemas comuns e do tipo de solução que construímos. Quando houver projetos publicados com autorização dos clientes, eles aparecerão na seção de casos reais.",
  },
  {
    question: "Posso ver algo parecido com o que preciso?",
    answer:
      "Pode. Conte o seu cenário pelo WhatsApp e mostramos o que já fizemos de mais próximo, quando houver algo para apresentar.",
  },
  {
    question: "Vocês trabalham com projetos que não estão nesta lista?",
    answer:
      "Sim. Esta página mostra apenas exemplos. O ponto de partida é sempre o seu processo, e a solução pode ser sob medida.",
  },
];

function ProjectsPage() {
  return (
    <main id="conteudo">
      <PageHero
        eyebrow="PROJETOS"
        title={
          <>
            Do problema ao <span>resultado.</span>
          </>
        }
        description="Veja o tipo de problema que resolvemos e como pensamos cada solução. Os casos reais da JPGLabs serão publicados aqui, com autorização de cada cliente."
      />

      <Section
        id="scenarios-title"
        title="Cenários que resolvemos"
        intro="Exemplos ilustrativos, não são clientes reais. Cada um mostra o problema, a solução e o resultado que buscamos."
      >
        <RevealList className="scenarios">
          {scenarios.map((item) => (
            <RevealItem key={item.title} className="scenario">
              <span className="scenario-area">{item.area}</span>
              <h3>{item.title}</h3>
              <dl>
                <div>
                  <dt>O problema</dt>
                  <dd>{item.problem}</dd>
                </div>
                <div>
                  <dt>A solução</dt>
                  <dd>{item.solution}</dd>
                </div>
                <div>
                  <dt>O resultado esperado</dt>
                  <dd>{item.result}</dd>
                </div>
              </dl>
            </RevealItem>
          ))}
        </RevealList>
      </Section>

      <Section id="cases-title" title="Casos reais">
        <EmptyState
          title="Ainda não há casos publicados."
          text="Estamos reunindo projetos para publicar aqui com autorização dos clientes. Quer saber o que já fizemos? Pergunte pelo WhatsApp."
        />
      </Section>

      <Section id="faq-title" title="Perguntas frequentes">
        <Faq items={faq} />
      </Section>
      <CtaBand />
    </main>
  );
}
