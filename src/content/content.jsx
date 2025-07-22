import logo from "../assets/imgs/logo/logo.webp";
import imgFeatures from "../assets/imgs/features/imgServices.jpg";
import aboutImg1 from "../assets/imgs/about/aboutImg.webp";
import aboutSocial from "../assets/imgs/about/aboutSocial.webp";
import aboutSocialImg from "../assets/imgs/about/aboutSocial.webp";
import imgSteps from "../assets/imgs/steps/imgSteps.webp";

const currentYear = new Date().getFullYear();

export const infos = {
  name: "Reis & Loyola Advocacia",
  email: "contato", // Email desejado pelo cliente
  domain: "reiseloyola.adv.br", // Sem "www"
  phone: {
    ddd: "62",
    firstPart: "99833", // Apenas os 5 primeiros números (incluindo o 9)
    secondPart: "5893", // Apenas os 4 últimos números
  },
  endereco: (
    <div>
      <p>Endereço:</p>
      <p>Rua Brasil, nº 50, Setor Bueno</p>
      <p>Goiânia - GO</p>
      <p>CEP 74215-070</p>
    </div>
  ),
  expediente: (
    <div>
      <p>Horário de expediente:</p>
      <p>Segunda a Sexta-feira</p>
      <p>Das 8h às 18h</p>
    </div>
  ),
  obs: <span className="italic">A Definir</span>,
  instagramProfile: "A_definir", // Sem o @
  facebookProfile: "A_Definir",
  linkeDinProfile: "A_Definir",
  x: "A_Definir",
  whatsappDefaultMessage:
    "Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.",
  whatsChatDefaultMessage:
    "Gostaria de falar conosco agora mesmo? Clque abaixo 👇",
  slogan: "",
};

const content = {
  texts: {
    navbar: {
      logo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      solidLogo: {
        img: logo,
        alt: `Logomarca ${infos.name}`,
      },
      menuItems: ["Início", "Serviços", "Sobre Nós", "Perguntas Frequentes"],
      ctaButtonText: "Contato",
      ctaButtonTextResponsive: "Contato",
    },
    hero: {
      miniTag: "ESCRITÓRIO DE DIREITO BANCÁRIO EM GOIÂNIA - GO",
      title: (
        <h1 className="mb-[16px]">
          Proteja seu patrimônio e enfrente dívidas bancárias
          <span className="text-primary"> com estratégia </span> e assessoria
          jurídica
        </h1>
      ),
      subtitle:
        "No escritório Reis & Loyola oferecemos expertise jurídica especializada em dívidas bancárias e proteção patrimonial. Com estratégias personalizadas e resultados comprovados, garantimos a defesa dos seus direitos e a segurança do seu patrimônio. Fale agora com nossos especialistas e descubra como podemos ajudar você!",
      ctaButtonText: "Entre em contato",
      obsHero: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin-check"
          >
            <path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" />
            <circle cx="12" cy="10" r="3" />
            <path d="m16 18 2 2 4-4" />
          </svg>
        ),
        text: "Atendimento em todo o Brasil",
      },
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
      secondaryCta: "A_Definir",
      images: {
        static: {
          img: {},
          alt: "",
        },
        slide1: {
          img: {},
          alt: "",
        },
        slide2: {
          img: {},
          alt: "",
        },
        slide3: {
          img: {},
          alt: "",
        },
      },
      app: {
        description: "Baixe nosso aplicativo para companhar seu processo:",
        imgs: {
          appStore: {
            alt: "Ícone da App Store",
            link: "#",
          },
          playStore: {
            alt: "Ícone da Play Store",
            link: "#",
          },
        },
      },
    },
    features: {
      miniTag: "ÁREA DE ATUAÇÃO",
      title: "Soluções Reis & Loyola",
      subtitle: "",
      imgFeatures: imgFeatures,
      card1: {
        title: "Defesa do Executado",
        subtitle:
          "Oferecemos representação jurídica especializada para pessoas físicas e jurídicas que estão enfrentando processos de execução ou cobrança por dívidas bancárias. Atuamos para garantir a proteção dos direitos do nosso cliente, evitando medidas abusivas e protegendo seu patrimônio.",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shield-alert"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card2: {
        title: "(Re)Negociação Bancária",
        subtitle:
          "Realizamos uma análise detalhada de contratos e dívidas bancárias, identificando irregularidades e abusividades. Por meio de negociações estratégicas, conseguimos repactuar débitos com até 90% de desconto no valor da dívida, oferecendo uma solução eficiente e personalizada para você recuperar sua saúde financeira.",
        description: (
          <div>
            A_Definir
            <br />
            <br />
            A_Definir
          </div>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-banknote"
          >
            <rect width="20" height="12" x="2" y="6" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card3: {
        title: "Dívidas Rurais: Soluções Especializadas para o Produtor Rural",
        subtitle:
          "Oferecemos assistência jurídica especializada para produtores rurais, solucionando débitos sem comprometer seu patrimônio. Nossa equipe analisa detalhadamente todos os tipos de contratos rurais, como Contratos de Custeio, Barter, Cédulas de Crédito Rural - CCR, Cédulas de Crédito Bancário - CCB, Células de Produto Rural - CPR e CPR Financeira, entre outros, para encontrar a solução ideal para o seu caso.",
        description: (
          <div>
            A_Definir <br />
            <br />
            A_Definir
          </div>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-wheat"
          >
            <path d="M2 22 16 8" />
            <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
            <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
            <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
            <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
            <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
            <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
            <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card4: {
        title: "Gestão de Passivos Bancários Empresariais e de Pessoas Físicas",
        subtitle:
          "Oferecemos soluções eficazes para a gestão de passivos bancários, tanto para empresas quanto para pessoas físicas. Com orientação jurídica especializada, atuamos na renegociação de dívidas, defesa de contratos financeiros, combate a cobranças indevidas e proteção dos direitos financeiros de nossos clientes.",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-scale"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card5: {
        title: "Defesa em Leilão Judicial e Extrajudicial",
        subtitle:
          "Atuamos para suspender e anular leilões de bens imóveis, veículos e outros patrimônios ameaçados por penhoras. Nossa equipe especializada utiliza estratégias jurídicas eficientes para interromper processos de leilão, garantindo a proteção do seu patrimônio e a defesa dos seus direitos.",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-gavel"
          >
            <path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
            <path d="m16 16 6-6" />
            <path d="m8 8 6-6" />
            <path d="m9 7 8 8" />
            <path d="m21 11-8-8" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card6: {
        title: "Juros Abusivos",
        subtitle:
          "Identificamos e combatemos juros abusivos em contratos bancários, garantindo a revisão das taxas aplicadas e a restituição dos valores pagos indevidamente. Nossa equipe especializada irá analisar detalhadamente o seu caso podendo reduzir drasticamente o valor de suas parcelas.",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-percent"
          >
            <line x1="19" x2="5" y1="5" y2="19" />
            <circle cx="6.5" cy="6.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card7: {
        title: "Fraudes Bancárias",
        subtitle:
          "Oferecemos uma equipe especializada em fraudes e golpes bancários. Em muitos casos, a responsabilidade pela fraude é da instituição financeira, que falhou em adotar medidas para prevenir a ação de criminosos. Traçamos estratégias personalizadas para identificar irregularidades, responsabilizar os culpados e recuperar o seu dinheiro de forma ágil e segura.",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shield"
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      card8: {
        title: "Superendividamento de Funcionário Público",
        subtitle:
          "Buscamos a melhor estratégia para funcionários públicos que enfrentam o superendividamento, garantindo que a cobrança sobre seus proventos seja reduzida ao limite de 30%, conforme permitido pela Lei do Superendividamento. Nossa equipe especializada atua para proteger seus rendimentos e devolver sua tranquilidade financeira.",
        description: (
          <div>
            A_Definir
            <br />
            A_Definir
            <br />
          </div>
        ),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-clipboard-list"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="M12 11h4" />
            <path d="M12 16h4" />
            <path d="M8 11h.01" />
            <path d="M8 16h.01" />
          </svg>
        ),
        buttonLabelModal: "Fale Conosco",
        buttonLabel: "Saiba Mais",
      },
      moreFeatures: {
        card1: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card2: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
        card3: {
          ico: "A_Definir",
          title: "A_Definir",
          subtitle: "A_Definir",
        },
      },
    },
    about: {
      imagem: {
        img: aboutImg1,
        alt: "Imagem profissional de escritório/advogado(a)",
      },
      miniTag: "QUEM É REIS & LOYOLA ADVOCACIA",
      title: "Nossa trajetória",
      subtitle:
        "Sólida experiência em renegociação bancária, leilões e reestruturação de dívidas.",
      paragraph: (
        <div>
          Fundado pelos sócios Daniel Reis e Tiago Loyola, o escritório Reis &
          Loyola é referência nacional na defesa de devedores em dívidas
          bancárias. Especializado em oferecer soluções jurídicas
          personalizadas, o escritório atua com excelência para clientes que
          enfrentam desafios financeiros, garantindo proteção patrimonial e
          dignidade financeira.
          <br />
          <br />
          Dr. Daniel Reis, formado em Direito pela Universidade Federal de Goiás
          (UFG), é especialista em dívidas rurais e gestão de passivos. Com
          vasta experiência em renegociação e recuperação de créditos vinculados
          ao agronegócio, além de reestruturação financeira para pessoas físicas
          e jurídicas, ele traz um profundo conhecimento técnico e estratégico
          para cada caso.
        </div>
      ),
      buttonModalLabelAbout: "Continuar lendo",
      modal: (
        <p>
          Fundado pelos sócios Daniel Reis e Tiago Loyola, o escritório Reis &
          Loyola é referência nacional na defesa de devedores em dívidas
          bancárias. Especializado em oferecer soluções jurídicas
          personalizadas, o escritório atua com excelência para clientes que
          enfrentam desafios financeiros, garantindo proteção patrimonial e
          dignidade financeira.
          <br />
          <br />
          Dr. Daniel Reis, formado em Direito pela Universidade Federal de Goiás
          (UFG), é especialista em dívidas rurais e gestão de passivos. Com
          vasta experiência em renegociação e recuperação de créditos vinculados
          ao agronegócio, além de reestruturação financeira para pessoas físicas
          e jurídicas, ele traz um profundo conhecimento técnico e estratégico
          para cada caso.
          <br />
          <br />
          Dr. Tiago Loyola, também graduado em Direito pela UFG, é especialista
          em direito bancário e do consumidor. Com ampla atuação em operações
          financeiras, contratos bancários, práticas abusivas e processos de
          execução, ele combina expertise jurídica e sensibilidade para lidar
          com as complexidades do sistema financeiro.
          <br />
          <br />
          No Reis & Loyola, o trabalho vai além de um simples serviço jurídico.
          Nosso propósito é entregar tranquilidade, segurança e justiça de forma
          ágil, eficiente e transparente. Compreendemos as dificuldades
          enfrentadas por quem está endividado e buscamos, por meio de soluções
          jurídicas eficazes, aliviar o peso das dívidas, proteger patrimônios e
          restaurar a dignidade financeira de nossos clientes.
          <br />
          <br />
          Acreditamos que todos têm o direito de viver livres de preocupações
          financeiras e cobranças abusivas. Com um histórico de sucesso, já
          impactamos positivamente milhares de clientes, gerando milhões de
          reais em descontos e repactuações.
          <br />
          <br />
          Combinando conhecimento técnico, experiência prática e um compromisso
          inabalável com os resultados, o escritório Reis & Loyola é a escolha
          certa para quem busca uma defesa sólida e especializada em dívidas
          bancárias. Atuamos sempre com ética, transparência e excelência
          jurídica, garantindo a melhor solução para cada caso.
          <br />
          <br />
        </p>
      ),
      ctaButtonAriaLabel: "Botão para entrar em contato",
      ctaButtonText: "Entre em contato",

      aboutSocial: {
        img: {
          img: aboutSocial,
          imgPrint: aboutSocialImg,
          alt: `Foto do Instagram do ${infos.name}`,
        },
        miniTag: "ASSESSORIA JURÍDICA NACIONAL",
        title: "Atendimento on-line em todo Brasil",
        subtitle:
          "Com um atendimento especializado e sem fronteiras, nossa equipe de advogados não mede esforços para atender nossos clientes em qualquer lugar do Brasil. Onde você estiver, estamos prontos para oferecer suporte jurídico eficiente e personalizado, garantindo que seus direitos sejam protegidos.",
        labelwhatsapp: "Entre em contato agora",
        labelInstagram: "Siga-nos no Instagram",
        labelFacebook: "Siga-nos no Facebook",
        labelLinkedin: "Siga-nos no LinkedIn",
        labelX: "Siga-nos no X",
        paragraph: (
          <p>
            Aproveite nossas redes sociais para mantermos contato e ficar por
            dentro de atualizações importantes no mundo do direito.
          </p>
        ),
      },
    },
    cta: {
      miniTag: "FALE CONOSCO",
      title:
        "Buscando soluções para a suas dívidas? Deixe que cuidamos disso pra você!",
      subtitle:
        "Converse com nossa equipe. Estamos prontos para oferecer a orientação jurídica de que você precisa.",
      ctaButtonText: "Entre em contato pelo WhatsApp",
    },
    steps: {
      miniTag: "PASSO A PASSO",
      title: "Como funciona nosso atendimento?",
      subtitle: "",
      img: imgSteps,
      alt: "",
      cards: {
        card1: {
          stepNumber: 1,
          cardTitle: "Consulta inicial",
          cardDescription:
            "Ao entrar em contato com nosso escritório voce já será atendido por um de nossos advogados especializados.",
        },
        card2: {
          stepNumber: 2,
          cardTitle: "Análise detalhada",
          cardDescription:
            "Durante seu atendimento analisaremos todos seus contratos bancários, bem como as possíveis ações judiciais ou leilões em curso para traçar a melhor estratégia para o seu caso. ",
        },
        card3: {
          stepNumber: 3,
          cardTitle: "Elaboração da estratégia",
          cardDescription:
            "Nossa equipe especializada irá elaborar uma estratégia e um plano de ação para cada um de seus débitos, buscando sempre uma solução personalizada e ágil para nosso cliente.",
        },
        card4: {
          stepNumber: 4,
          cardTitle: "Ação legal",
          cardDescription:
            "Após o fechamento de contrato, nosso corpo jurídico irá atuar com afinco para o cumprimento de todas estratégias traçadas para nosso cliente, protegendo seus bens e resolvendo seus débitos de maneira segura e eficiente.",
        },
      },
    },
    faq: {
      miniTag: "TIRE SUAS DÚVIDAS",
      title: "Perguntas Frequentes",
      subtitle: "Confira as perguntas abaixo para esclarecer suas dúvidas. ",
      questions: {
        question1: {
          question: "Como posso contratar seus serviços?",
          answer:
            "Para contratar nossos serviços, basta agendar uma consulta conosco via WhatsApp. Durante a consulta, conversaremos sobre suas necessidades e analisaremos seu caso detalhadamente e apresentaremos as melhores soluções. Entre em contato agora mesmo e dê o primeiro passo para resolver sua situação!",
        },
        question2: {
          question: "O que acontece se eu não pagar uma dívida bancária?",
          answer:
            "A falta de pagamento pode levar a cobranças judiciais e extrajudiciais, como penhora de bens, bloqueio de contas entre outras inúmeras situações delicadas para o devedor. Para entender os riscos específicos do seu caso, fale conosco e agende uma análise personalizada.",
        },
        question3: {
          question: "O que é uma execução de dívida bancária?",
          answer:
            "A execução de dívida bancária é um processo judicial em que o banco busca cobrar o valor devido. Se você foi notificado ou está preocupado com uma possível execução, entre em contato conosco para analisarmos suas opções de defesa.",
        },
        question4: {
          question: "O que fazer se eu for notificado de uma ação de execução?",
          answer:
            "Se você foi notificado, é crucial agir rapidamente buscando ajuda especializada para minimizar todos os danos que a ação pode causar . Entre em contato conosco imediatamente para analisarmos a legalidade da cobrança e prepararmos sua defesa.",
        },
        question5: {
          question: "O que é um leilão extrajudicial?",
          answer:
            "O leilão extrajudicial é uma venda de bens (como imóveis, veículos ou maquinários) realizada por instituições financeiras para quitar dívidas não pagas. Ele ocorre sem a necessidade de uma ação judicial. Se seu bem está em risco de leilão, entre em contato conosco para avaliarmos suas opções de defesa.",
        },
        question6: {
          question: "O que é um leilão judicial?",
          answer:
            "O leilão judicial é realizado por determinação de um juiz, geralmente em processos de execução de dívidas. Os bens do devedor são penhorados e vendidos para pagar a dívida. Se você recebeu uma notificação de leilão judicial, fale conosco para analisarmos seu caso e proteger seus direitos.",
        },
        question7: {
          question: "Posso impedir um leilão extrajudicial ou judicial?",
          answer:
            "Sim, em muitos casos é possível suspender ou cancelar um leilão, especialmente se houver irregularidades na cobrança ou se o valor da dívida for questionável. Entre em contato conosco para avaliarmos as possibilidades de defesa no seu caso.",
        },
      },
      paragraph: "Clique aqui caso tenha mais dúvidas",
    },
    footer: {
      copyrightLine: ` ${currentYear} - ${infos.name} - Todos os direitos reservados`,
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
      midSectionName: "Até mais",
      footerText:
        "Agradecemos sua visita! Esperamos que em breve você se torne nosso cliente e desfrute de todos os benefícios que oferecemos.",
      footerSocialText: "Siga a gente nas redes sociais:",
      footerNavegacaoText: "NAVEGAÇÃO",
    },
    testimonials: {
      miniTag: "A_Definir",
      title: "A_Definir",
      subtitle: "A_Definir",
      images: {
        img1: {
          alt: "Imagem de feedback",
        },
        img2: {
          alt: "Imagem de feedback",
        },
        img3: {
          alt: "Imagem de feedback",
        },
        img4: {
          alt: "Imagem de feedback",
        },
      },
    },
    trustedBy: {
      title: "A_Definir",
      subtitle: "A_Definir",
      trustedMore: {
        title: "A_Definir",
        subtitle: "A_Definir",
      },
      images: {
        img1: {
          alt: "marca Rennova",
        },
        img2: {
          alt: "marca Colgate",
        },
        img3: {
          alt: "marca dental Cremer",
        },
      },
    },
    numbers: {
      number1: 7,
      number1Description: "A_Definir",
      number2: 500,
      number2Description: "A_Definir",
      number3: 1000,
      number3Description: "A_Definir",
    },
    maps: {
      minitag: "Google Maps",
      title: "Como nos encontrar?",
      subtitle:
        "Utilize o mapa abaixo para chegar até nós com mais facilidade.",
      embedsrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5228.594742930791!2d-51.169466!3d-23.321824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb435bf9b37d8f%3A0xfb3125702df9f29d!2sMolina%20%26%20Spigarollo%20%7C%20Advogados%20Associados!5e1!3m2!1spt-BR!2sbr!4v1736876812303!5m2!1spt-BR!2sbr",
    },
    team: {
      title: "A_Definir",
      subtitle: "A_Definir",
      members: {
        member1: {
          img: {
            alt: "Edison Matos",
          },
          name: "Edison Matos",
          role: "CEO & Diretor de Desenvolvimento",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/edison-matoss/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/EdisonMatos",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            ),
            link3: "https://edisonmatos.github.io/",
          },
        },
        member2: {
          img: {
            alt: "Gabriel Adans",
          },
          name: "Gabriel Adans",
          role: "Marketing Outsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/gabriel-adans-2bb029227/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/GabrielAdans",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: "https://www.instagram.com/adansgabriel/",
          },
        },
        member3: {
          img: {
            alt: "Gabriel Souza",
          },
          name: "Gabriel Souza",
          role: "Desenvolvedor Frontend",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: " https://www.linkedin.com/in/gabriel-souza-b9945929a",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            ),
            link2: "https://github.com/BiellSouza",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link3: " https://www.instagram.com/biel.souza.904",
          },
        },
        member4: {
          img: {
            alt: "Luiz Felipe",
          },
          name: "Luiz Felipe",
          role: "Designer Ourtsourcing",
          socialMedia: {
            icon1: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
            link1: "https://www.linkedin.com/in/luiz-felipe-leite-95a246192/",
            icon2: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            ),
            link2: "https://www.instagram.com/luizleitedesigner/",
            icon3: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="#000000"
                className=" bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            ),
            link3: "https://wa.me/+556596241854",
          },
        },
      },
    },
    links: {
      instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
      ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
      facebook: `https://www.facebook.com/${infos.facebookProfile}`,
      x: `https://x.com/${infos.x}`,
      linkedin: `https://www.linkedin.com/in/${infos.linkeDinProfile}`,
    },
    infos: {
      phone: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
      email: `${infos.email}@${infos.domain}`,
      adress: infos.endereco,
      officeHours: infos.expediente,
      year: currentYear,
      footerexpediente: infos.expediente,
      obsFooter: infos.obs,
      footerNavegacaoText: "NAVEGAÇÃO",
      footerDivulgacaoText: "Gostaria de ter um site como este? Clique aqui",
    },
  },
};

export const abstractions = {
  titleModal: <strong>{content.texts.about.title}</strong>,
  subtitleModal: <strong>{content.texts.about.subtitle}</strong>,
};

export default content;
