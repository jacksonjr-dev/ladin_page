import {
  Bot,
  CalendarCheck,
  ChartNoAxesColumn,
  LayoutDashboard,
  MessageCircle,
  PanelTop,
  type LucideIcon,
} from "lucide-react";

export type Faq = { question: string; answer: string };

export type Solution = {
  id: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  topic: string;
  faq: Faq[];
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
    slug: "automacao-whatsapp",
    seoTitle: "Automação de WhatsApp para empresas | JPGLabs",
    seoDescription:
      "Atendimento automático no WhatsApp: respostas rápidas, coleta de dados do cliente e encaminhamento para a equipe. Conte seu caso e peça uma conversa.",
    h1: "Automação de WhatsApp para o atendimento da sua empresa",
    topic: "automação de WhatsApp",
    faq: [
      {
        question: "O que dá para automatizar no WhatsApp?",
        answer:
          "Respostas às dúvidas mais comuns, coleta de dados do cliente (como nome e interesse), direcionamento para a pessoa ou o setor certo e avisos para a equipe. O que automatizar é definido junto com você, a partir do seu atendimento.",
      },
      {
        question: "O atendimento deixa de ser humano?",
        answer:
          "Não. A automação cuida do que é repetitivo e passa a conversa para uma pessoa quando o assunto exige atenção humana.",
      },
      {
        question: "Por onde começar?",
        answer:
          "Contando como é o seu atendimento hoje: quais perguntas se repetem, quem responde e onde as mensagens se perdem. Com isso, propomos um primeiro fluxo pequeno para validar o resultado.",
      },
      {
        question: "Quanto custa e quanto tempo leva?",
        answer:
          "Depende do tamanho do que será feito. Depois da primeira conversa, apresentamos a proposta com o que será feito, o prazo e os valores antes de qualquer compromisso.",
      },
    ],
    icon: MessageCircle,
    title: "Automação para WhatsApp",
    text: "Atendimento inicial, respostas automáticas, coleta de dados e direcionamento de clientes com mais rapidez.",
    forWho:
      "Empresas que recebem muitas mensagens e gastam tempo respondendo sempre as mesmas perguntas.",
    benefits: [
      "Respostas rápidas às dúvidas mais comuns, a qualquer hora do dia",
      "Coleta de nome, interesse e dados do cliente antes de uma pessoa entrar na conversa",
      "Direcionamento para a pessoa ou o setor certo",
      "Menos mensagens perdidas e menos trabalho repetitivo para a equipe",
    ],
    example:
      "Uma loja recebe, em uma noite, uma dúvida sobre horário e um pedido de orçamento. O atendimento automático responde o horário na hora, pergunta o produto e a quantidade, guarda os dados do cliente e, de manhã, a equipe encontra o pedido organizado, pronto para ser respondido.",
  },
  {
    id: "gestao",
    slug: "sistema-de-gestao-personalizado",
    seoTitle: "Sistema de gestão sob medida para empresas | JPGLabs",
    seoDescription:
      "Saia das planilhas: sistema de gestão sob medida para clientes, pedidos, estoque e ordens de serviço, com permissão por pessoa. Fale com a JPGLabs.",
    h1: "Sistema de gestão personalizado para o seu jeito de trabalhar",
    topic: "um sistema de gestão personalizado",
    faq: [
      {
        question: "Em que um sistema sob medida é diferente de um pronto?",
        answer:
          "Ele é desenhado em torno do seu processo: telas, campos e etapas refletem como a sua empresa trabalha. Um sistema pronto costuma exigir que o processo se adapte a ele. Qual dos dois faz sentido depende do caso, e dizemos com sinceridade quando um sistema pronto resolve.",
      },
      {
        question: "Dá para aproveitar o que já tenho nas planilhas?",
        answer:
          "Essa é uma das coisas que avaliamos na etapa de entendimento do processo: o que dá para aproveitar das planilhas e como organizar a migração para o sistema.",
      },
      {
        question: "Cada pessoa da equipe vê tudo?",
        answer:
          "Não precisa. O sistema pode ter permissões por pessoa, para que cada um veja só o que faz parte do seu trabalho. As regras são combinadas com você.",
      },
      {
        question: "Quanto custa e quanto tempo leva?",
        answer:
          "Depende do tamanho do que será feito. Depois da primeira conversa, apresentamos a proposta com o que será feito, o prazo e os valores antes de qualquer compromisso.",
      },
    ],
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
      "Uma empresa de manutenção anota as ordens de serviço em planilha e no caderno. No sistema, cada chamado ganha cliente, endereço, responsável e status, e quem está no escritório vê na hora o que está aberto, em andamento e concluído.",
  },
  {
    id: "agendamento",
    slug: "agendamento-online",
    seoTitle: "Agendamento online com lembretes no WhatsApp | JPGLabs",
    seoDescription:
      "Sistema de agendamento online: o cliente escolhe o horário, recebe confirmação e lembrete no WhatsApp e remarca sozinho. Peça uma conversa.",
    h1: "Agendamento online com confirmação e lembretes no WhatsApp",
    topic: "agendamento online",
    faq: [
      {
        question: "Como o cliente faz o agendamento?",
        answer:
          "Ele acessa um link, escolhe o serviço e o horário livre e recebe a confirmação no WhatsApp. Se precisar remarcar, faz isso por conta própria, sem precisar ligar.",
      },
      {
        question: "Dá para controlar cancelamentos e remarcações?",
        answer:
          "Sim, essa é uma das funções da solução: o cliente remarca ou cancela e a agenda se atualiza. As regras, como o prazo mínimo para cancelar, são combinadas com você.",
      },
      {
        question: "O agendamento conversa com o WhatsApp da empresa?",
        answer:
          "Os lembretes e confirmações são enviados pelo WhatsApp. Como o agendamento pode ser conectado a outras soluções, como a automação de atendimento, avaliamos caso a caso o que faz sentido ligar.",
      },
      {
        question: "Quanto custa e quanto tempo leva?",
        answer:
          "Depende do tamanho do que será feito. Depois da primeira conversa, apresentamos a proposta com o que será feito, o prazo e os valores antes de qualquer compromisso.",
      },
    ],
    icon: CalendarCheck,
    title: "Agendamento online",
    text: "Agenda de horários com cadastro do cliente, confirmações, lembretes pelo WhatsApp e controle de cancelamentos.",
    forWho:
      "Negócios que atendem com hora marcada e perdem tempo organizando a agenda por mensagem.",
    benefits: [
      "O cliente escolhe sozinho entre os horários disponíveis",
      "Confirmação e lembretes enviados pelo WhatsApp",
      "Controle de cancelamentos e remarcações",
      "Lembretes que ajudam a reduzir faltas e evitam idas e vindas para combinar horário",
    ],
    example:
      "Um salão atende com hora marcada pelo WhatsApp. Com o agendamento online, o cliente abre o link, escolhe o serviço e o horário livre e recebe a confirmação. Na véspera chega um lembrete, e se precisar remarcar ele mesmo faz isso, sem ligar.",
  },
  {
    id: "dashboards",
    slug: "dashboards-e-relatorios",
    seoTitle: "Dashboard e relatórios para empresas | JPGLabs",
    seoDescription:
      "Painéis de vendas e atendimentos com relatórios para exportar em Excel ou PDF, a partir dos dados que a sua empresa já tem. Fale com a JPGLabs.",
    h1: "Dashboard e relatórios para acompanhar o seu negócio sem planilha manual",
    topic: "dashboards e relatórios",
    faq: [
      {
        question: "De onde vêm os dados do painel?",
        answer:
          "Dos dados que a sua empresa já tem, como planilhas, sistemas e registros de atendimento. Na etapa de entendimento do processo vemos quais fontes existem e se dá para conectá-las.",
      },
      {
        question: "Quais indicadores aparecem no painel?",
        answer:
          "Os que importam para você. Definimos juntos, a partir das decisões que você precisa tomar, como vendas por período, atendimentos ou pedidos.",
      },
      {
        question: "Consigo levar os relatórios para fora do painel?",
        answer: "Sim. A solução prevê relatórios prontos para exportar em Excel ou PDF.",
      },
      {
        question: "Quanto custa e quanto tempo leva?",
        answer:
          "Depende do tamanho do que será feito. Depois da primeira conversa, apresentamos a proposta com o que será feito, o prazo e os valores antes de qualquer compromisso.",
      },
    ],
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
      "O gestor de uma distribuidora junta vendas e pedidos de três planilhas para montar o relatório do mês. Com o painel, ele escolhe o período, vê vendas por produto e atendimentos por dia e exporta o resultado em Excel ou PDF em poucos cliques.",
  },
  {
    id: "sites",
    slug: "criacao-de-sites",
    seoTitle: "Criação de sites e landing pages | JPGLabs",
    seoDescription:
      "Sites institucionais, catálogos e landing pages rápidos no celular, com botão direto para o WhatsApp. Conte o que a sua empresa precisa.",
    h1: "Criação de sites e landing pages que levam o cliente ao WhatsApp",
    topic: "criação de site",
    faq: [
      {
        question: "Site institucional ou landing page: qual escolher?",
        answer:
          "O site institucional apresenta a empresa em várias páginas, como quem somos, soluções e contato. A landing page é uma página única, com foco em uma oferta ou campanha. Se a dúvida for essa, conte o seu objetivo e indicamos o formato.",
      },
      {
        question: "O site funciona bem no celular?",
        answer:
          "Os sites são pensados para funcionar bem no celular, que é de onde chega boa parte dos visitantes.",
      },
      {
        question: "O site ajuda a gerar contatos?",
        answer:
          "Essa é a ideia: o site apresenta a empresa e leva o visitante direto para uma conversa no WhatsApp, com a mensagem inicial já preenchida.",
      },
      {
        question: "Quanto custa e quanto tempo leva?",
        answer:
          "Depende do tamanho do que será feito. Depois da primeira conversa, apresentamos a proposta com o que será feito, o prazo e os valores antes de qualquer compromisso.",
      },
    ],
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
      "Uma prestadora de serviços local só aparece por indicação. Uma página de campanha explica a oferta em poucas seções, mostra como funciona e leva o visitante direto para o WhatsApp, já com a mensagem inicial preenchida.",
  },
  {
    id: "ia",
    slug: "assistente-com-inteligencia-artificial",
    seoTitle: "Chatbot e assistente com IA para empresas | JPGLabs",
    seoDescription:
      "Assistente com inteligência artificial que responde com base nas informações da sua empresa e passa para uma pessoa quando necessário.",
    h1: "Assistente com inteligência artificial para o atendimento da sua empresa",
    topic: "um assistente com inteligência artificial",
    faq: [
      {
        question: "O assistente pode responder algo errado?",
        answer:
          "Assistentes de inteligência artificial podem errar. Por isso definimos regras claras sobre o que ele pode e não pode responder, usamos o material da própria empresa como base e deixamos a conversa passar para uma pessoa quando necessário. Pontos sensíveis ficam sob revisão humana.",
      },
      {
        question: "Com o que o assistente aprende sobre a minha empresa?",
        answer:
          "Com as informações que a sua empresa fornece, como perguntas frequentes, condições e materiais de atendimento. O objetivo é que o que não estiver no material seja encaminhado a uma pessoa.",
      },
      {
        question: "O assistente substitui a minha equipe?",
        answer:
          "Não. Ele apoia a equipe nas tarefas repetitivas e deixa as pessoas livres para o que exige atenção humana.",
      },
      {
        question: "Quanto custa e quanto tempo leva?",
        answer:
          "Depende do tamanho do que será feito. Depois da primeira conversa, apresentamos a proposta com o que será feito, o prazo e os valores antes de qualquer compromisso.",
      },
    ],
    icon: Bot,
    title: "Assistentes com inteligência artificial",
    text: "Assistentes que usam as informações da sua empresa para tirar dúvidas, identificar quem tem interesse e apoiar a equipe.",
    forWho:
      "Equipes que repetem as mesmas explicações todos os dias e querem apoio no atendimento e nas tarefas internas.",
    benefits: [
      "Assistente que responde com base nas informações da própria empresa",
      "Responde dúvidas e identifica quem tem interesse antes de passar para a equipe",
      "Encaminha para uma pessoa quando o assunto exige atenção humana",
      "Apoia a equipe em tarefas repetitivas, com regras claras sobre o que pode e não pode fazer",
    ],
    example:
      "Uma loja repete todo dia as mesmas respostas sobre prazo, trocas e formas de pagamento. O assistente responde com base no material da própria loja e, quando a pergunta foge do que foi configurado, encaminha a conversa para um atendente.",
  },
];

export const findSolution = (slug: string) => solutions.find((solution) => solution.slug === slug);
