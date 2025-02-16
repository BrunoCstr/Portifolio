import images from "../assets/images/images";

export const projects = [
  {
    id: "1",
    homeImage: images.AvantarIndicaImg,
    homeDescription: `Aplicativo desenvolvido para facilitar a indicação de clientes e recompensar indicadores de forma prática e atrativa. Por meio do app, o indicador pode acessar sua lista de contatos, indicar clientes ao franqueado designado e selecionar os seguros com maior potencial de fechamento.
    Clique no botão para mais detalhes!`,
    appLogo: images.AvantarIndicaLogo,
    appName: "Avantar Indica",
    description: `Avantar Indica é um aplicativo inovador desenvolvido para a franqueadora de seguros Avantar, projetado para facilitar a captação de leads e recompensar os indicadores por suas indicações. Com uma interface intuitiva e de fácil navegação, o app permite que qualquer pessoa cadastre e acompanhe indicações de clientes interessados em seguros, direcionando esses leads para as franquias da rede.
    A cada indicação convertida em venda, o indicador recebe uma comissão, tornando o processo simples, eficiente e vantajoso para todos os envolvidos.
    Desenvolvido com Flutter e utilizando Firebase para garantir uma infraestrutura escalável e segura, o Avantar Indica oferece uma experiência fluida e confiável, unindo tecnologia e inovação para potencializar os negócios da Avantar. 🚀`,
    techLogos: [
      images.dartOriginal,
      images.flutterOriginal,
      images.firebaseOriginal,
    ],
    appImages: [images.AvantarIndicaImg],
  },
  {
    id: "2",
    homeImage: images.DashboardAvantarImg,
    homeDescription: `Uma ferramenta gerencial estratégica desenvolvida com Power BI para análise de dados na franqueadora. Ele consolida informações de plataformas externas, atualizadas automaticamente a cada 30 minutos via API, fornecendo insights em tempo real para a tomada de decisões. Clique no botão para mais detalhes!`,
    appLogo: images.AvantarIndicaLogo,
    appName: "Dashboard Avantar",
    description: `Descrição aqui`,
    techLogos: [
      images.pbiOriginal,
      images.pyOriginal,
      images.jsOriginal,
      images.htmlOriginal,
      images.nodeOriginal,
      images.mysqlOriginal,
    ],
    appImages: [images.DashboardAvantarImg],
  },
  {
    id: "3",
    homeImage: images.AvantarIndicaLogo,
    homeDescription: `Sistema web criado para otimizar as operações do RH. Ele permite que colaboradores tenham acesso rápido e fácil aos seus contra-cheques diretamente pelo celular, enquanto o RH consegue gerenciar todas as operações relacionadas, como criar, visualizar, editar e excluir contra-cheques. Clique no botão para mais detalhes!`,
    appLogo: images.AvantarIndicaLogo,
    appName: "Sou Avantar Colaborador",
    description: `Descrição aqui`,
    techLogos: [
      images.jsOriginal,
      images.htmlOriginal,
      images.cssOriginal,
      images.sassOriginal,
      images.firebaseOriginal
    ],
    appImages: [images.SouAvantarColaboradorImg],
  },
  {
    id: "4",
    homeImage: images.PessoasAvantarImg,
    homeDescription: `Um sistema completo de processo seletivo, com foco na análise de perfil tipológico e comportamental. O sistema conta com um teste composto por 69 questões cuidadosamente elaboradas para identificar as características e comportamentos dos candidatos à franquia ou colaboradores. Clique no botão para mais detalhes!`,
    appLogo: images.PessoasAvantarImg,
    appName: "Pessoas Avantar",
    description: `Descrição aqui`,
    techLogos: [
      images.reactOriginal,
      images.tsOriginal,
      images.tailwindOriginal,
      images.firebaseOriginal
    ],
    appImages: [images.PessoasAvantarImg],
  },
  {
    id: "5",
    homeImage: images.PainelRedeRSupImg,
    homeDescription: `Uma plataforma administrativa desenvolvida exclusivamente para a equipe interna de uma franqueadora de corretora de seguros. Ele centraliza e organiza informações essenciais para a transmissão de seguros da rede, garantindo um fluxo de trabalho mais eficiente e estruturado. Clique no botáo para mais detalhes!`,
    appLogo: images.logoRSup,
    appName: "Painel Rede RSup!",
    description: `Descrição aqui`,
    techLogos: [
      images.jsOriginal,
      images.htmlOriginal,
      images.cssOriginal,
      images.firebaseOriginal,
    ],
    appImages: [images.PainelRedeRSupImg],
  }
];
