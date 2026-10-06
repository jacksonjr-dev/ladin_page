import {
  Bot,
  CalendarCheck,
  ChartNoAxesColumn,
  LayoutDashboard,
  MessageCircle,
  PanelTop,
  type LucideIcon,
} from "lucide-react";

export type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  text: string;
  forWho: string;
  benefits: string[];
  example: string;
};

export const solutions: Solution[] = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "Automação para WhatsApp",
    text: "Atendimento inicial, respostas automáticas, coleta de dados e direcionamento de clientes com mais rapidez.",
    forWho:
      "Empresas que recebem muitas mensagens e gastam tempo respondendo sempre as mesmas perguntas.",
    benefits: [
      "Respostas imediatas às dúvidas mais comuns, a qualquer hora do dia",
      "Coleta de nome, interesse e dados do cliente antes de uma pessoa entrar na conversa",
      "Direcionamento para a pessoa ou o setor certo",
      "Menos mensagens perdidas e menos trabalho repetitivo para a equipe",
    ],
    example:
      "Um cliente pergunta o horário de funcionamento e pede um orçamento. O fluxo responde o horário, pergunta o que ele precisa, registra os dados e avisa a equipe com tudo organizado.",
  },
  {
    id: "gestao",
    icon: LayoutDashboard,
    title: "Sistemas de gestão personalizados",
    text: "Sistemas feitos para centralizar clientes, pedidos, tarefas, estoque e ordens de serviço num só lugar.",
    forWho:
      "Empresas que controlam clientes, pedidos e tarefas em planilhas, cadernos ou vários aplicativos soltos.",
    benefits: [
      "Informações centralizadas em um único lugar, sem retrabalho de digitação",
      "Telas e fluxos desenhados para o jeito de trabalhar da sua empresa",
      "Controle de estoque, pedidos, tarefas e ordens de serviço",
      "Permissões por pessoa, para cada um ver só o que precisa",
    ],
    example:
      "Uma empresa de serviços registra a ordem de serviço, atribui ao responsável e acompanha cada etapa até a conclusão, sem planilhas paralelas.",
  },
  {
    id: "agendamento",
    icon: CalendarCheck,
    title: "Agendamento online",
    text: "Agenda de horários com cadastro do cliente, confirmações, lembretes pelo WhatsApp e controle de cancelamentos.",
    forWho:
      "Negócios que atendem com hora marcada e perdem tempo organizando a agenda por mensagem.",
    benefits: [
      "O cliente escolhe sozinho entre os horários disponíveis",
      "Confirmação e lembretes enviados pelo WhatsApp",
      "Controle de cancelamentos e remarcações",
      "Menos faltas e menos idas e vindas para combinar horário",
    ],
    example:
      "O cliente abre o link, escolhe o serviço e o horário, recebe a confirmação no WhatsApp e um lembrete antes do atendimento. Se precisar remarcar, faz isso sem ligar.",
  },
  {
    id: "dashboards",
    icon: ChartNoAxesColumn,
    title: "Dashboards e relatórios",
    text: "Painéis para acompanhar vendas, atendimentos e indicadores, com relatórios prontos para exportar.",
    forWho: "Quem precisa tomar decisões, mas tem os dados espalhados e demora para consolidá-los.",
    benefits: [
      "Indicadores de vendas, atendimentos e pedidos num só painel",
      "Atualização automática a partir dos dados que a empresa já tem",
      "Relatórios para exportar em Excel ou PDF",
      "Visão clara do que está funcionando e do que precisa de atenção",
    ],
    example:
      "Em vez de montar o relatório do mês na mão, o gestor abre o painel, filtra o período e exporta o resultado em poucos cliques.",
  },
  {
    id: "sites",
    icon: PanelTop,
    title: "Sites e landing pages",
    text: "Páginas institucionais, catálogos e páginas de campanha para apresentar a empresa e gerar contatos pelo WhatsApp.",
    forWho: "Empresas que querem se apresentar bem online e receber contato de novos clientes.",
    benefits: [
      "Site institucional claro, rápido e que funciona bem no celular",
      "Catálogo de produtos ou serviços",
      "Páginas de campanha com foco em um único objetivo",
      "Botões diretos para conversar pelo WhatsApp",
    ],
    example:
      "Uma página de campanha explica a oferta em poucas seções e leva o visitante direto para uma conversa no WhatsApp, já com a mensagem inicial preenchida.",
  },
  {
    id: "ia",
    icon: Bot,
    title: "Assistentes com inteligência artificial",
    text: "Assistentes treinados com as informações da empresa para tirar dúvidas, qualificar contatos e apoiar a equipe.",
    forWho:
      "Equipes que repetem as mesmas explicações todos os dias e querem apoio no atendimento e nas tarefas internas.",
    benefits: [
      "Assistente alimentado com as informações da própria empresa",
      "Responde dúvidas e qualifica contatos antes da equipe",
      "Encaminha para uma pessoa quando o assunto exige atenção humana",
      "Apoia a equipe em tarefas repetitivas, com regras claras sobre o que pode e não pode fazer",
    ],
    example:
      "O assistente responde dúvidas sobre produtos e condições com base no material da empresa e, quando a pergunta foge do que ele sabe, passa a conversa para um atendente.",
  },
];
