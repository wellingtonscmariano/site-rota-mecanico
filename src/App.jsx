import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BookOpenText,
  Briefcase,
  CalendarCheck,
  CaretDown,
  ChartLineUp,
  CheckCircle,
  Clock,
  Gauge,
  Handshake,
  Lightning,
  List,
  MapPin,
  ShieldCheck,
  UsersThree,
  WhatsappLogo,
  Wrench,
  X,
} from '@phosphor-icons/react';

const navItems = [
  ['A Rota', '#a-rota'],
  ['Cursos', '/cursos'],
  ['Workshops', '#workshops'],
  ['Professores', '/professores'],
  ['Comunidade', '#comunidade'],
  ['Parceiros', '#parceiros'],
];

const audiences = [
  {
    title: 'Quem quer entrar',
    text: 'Para quem está começando e quer aprender do zero com apoio e direção.',
    image: '/assets/course-diagnostics.png',
  },
  {
    title: 'Transição de carreira',
    text: 'Para quem busca uma nova rota e vê na mecânica uma carreira possível.',
    image: '/assets/community-workshop.png',
  },
  {
    title: 'Profissionais de oficina',
    text: 'Para quem já trabalha e precisa se atualizar com novas tecnologias.',
    image: '/assets/hero-workshop.png',
  },
  {
    title: 'Oficinas parceiras',
    text: 'Para empresas que buscam profissionais preparados e conexões com talentos.',
    image: '/assets/community-workshop.png',
  },
];

const routes = [
  {
    title: 'Aprender',
    icon: BookOpenText,
    text: 'Cursos práticos com foco em diagnóstico, sistemas e reparação automotiva.',
  },
  {
    title: 'Conectar',
    icon: UsersThree,
    text: 'Networking com alunos, mecânicos, instrutores e gestores do setor.',
  },
  {
    title: 'Evoluir',
    icon: ChartLineUp,
    text: 'Workshops, grupos e eventos para atualização contínua e troca real.',
  },
  {
    title: 'Trabalhar',
    icon: Briefcase,
    text: 'Conexão com oficinas parceiras e caminhos para oportunidades.',
  },
];

const courses = [
  {
    type: 'Workshop',
    title: 'Diagnóstico Avançado - Workshop',
    hours: '8 horas',
    level: 'Intermediário',
    format: 'Presencial e prático',
    category: 'workshop',
    image: '/assets/hero-workshop.png',
    href: '/workshops/diagnostico-avancado',
    text: 'Método, scanner, multímetro e osciloscópio aplicados a falhas reais.',
  },
  {
    type: 'Curso',
    title: 'Diagnóstico Avançado Completo',
    hours: '27 horas',
    level: 'Intermediário / Avançado',
    format: 'Presencial e prático',
    category: 'avancado',
    image: '/assets/course-diagnostics.png',
    href: '/cursos/diagnostico-avancado',
    text: 'Método e segurança para interpretar falhas com mais precisão.',
  },
  {
    type: 'Curso',
    title: 'Multímetro',
    hours: '10 horas',
    level: 'Iniciante',
    format: 'Base técnica',
    category: 'base',
    image: '/assets/course-multimetro.png',
    href: '/cursos/multimetro',
    text: 'Base essencial para medições, testes e diagnóstico elétrico.',
  },
  {
    type: 'Curso',
    title: 'Injeção Eletrônica',
    hours: '120 horas',
    level: 'Intermediário',
    format: 'Presencial e prático',
    category: 'base',
    image: '/assets/course-injecao.png',
    href: '/cursos/injecao-eletronica',
    text: 'Fundamentos e prática para entender sistemas modernos de alimentação e controle.',
  },
  {
    type: 'Workshop',
    title: 'Rede CAN na Prática',
    hours: '20 horas',
    level: 'Intermediário',
    format: 'Workshop prático',
    category: 'workshop',
    image: '/assets/course-rede-can.png',
    href: '/workshops/rede-can',
    text: 'Diagnóstico de comunicação automotiva para veículos modernos.',
  },
  {
    type: 'Curso',
    title: 'Troca de Óleo - Câmbio Automático',
    hours: '9 horas',
    level: 'Intermediário',
    format: 'Presencial e prático',
    category: 'base',
    image: '/assets/course-cambio-atf.png',
    href: '/cursos/troca-de-oleo-cambio-automatico',
    text: 'Procedimento correto, uso da máquina de ATF e serviço lucrativo.',
  },
  {
    type: 'Experiência',
    title: 'Auto Divas Experience',
    hours: '6 horas',
    level: 'Aberto a todas',
    format: 'Presencial e prático',
    category: 'base',
    image: '/assets/course-auto-divas.png',
    href: '/cursos/auto-divas-experience',
    text: 'Segurança e autonomia para mulheres entenderem o próprio veículo.',
  },
];

const workshopTopics = [
  'Downsizing e turbocompressores aplicados aos veículos modernos',
  'Diagnóstico de Rede CAN na prática',
  'Injeção direta e motores modernos',
  'Troca de óleo de câmbio automático',
  'Osciloscópio aplicado ao diagnóstico',
  'Diagnóstico avançado de sensores e atuadores',
  'Tecnologias Volkswagen, Fiat, GM e Hyundai',
];

const partners = [
  { name: 'TecnoCar', logo: '/assets/parceiros/tecnocar.png', tone: 'dark' },
  { name: 'MWH Automotiva', logo: '/assets/parceiros/mwh.webp', tone: 'dark' },
  { name: 'Garage 92', logo: '/assets/parceiros/garage92.png', tone: 'light' },
  { name: 'CCV Chevrolet', logo: '/assets/parceiros/ccv.png', tone: 'light' },
];

const heroImageBase = {
  '/assets/hero-workshop.png': 'hero-workshop',
  '/assets/course-diagnostics.png': 'course-diagnostics',
  '/assets/community-workshop.png': 'community-workshop',
  '/assets/course-multimetro.png': 'course-multimetro',
  '/assets/course-injecao.png': 'course-injecao',
  '/assets/course-rede-can.png': 'course-rede-can',
  '/assets/course-cambio-atf.png': 'course-cambio-atf',
  '/assets/course-auto-divas.png': 'course-auto-divas',
};

function heroSrcSet(path) {
  const base = heroImageBase[path];
  return {
    src: `/assets/${base}-1600.webp`,
    srcSet: `/assets/${base}-800.webp 800w, /assets/${base}-1600.webp 1600w`,
    sizes: '100vw',
  };
}

function cardSrc(path) {
  return `/assets/${heroImageBase[path]}-800.webp`;
}

const whatsappPhone = '5541998741990';

const pageTitleBySlug = {
  'diagnostico-avancado': 'Diagnóstico Avançado',
  'diagnostico-avancado-workshop': 'Diagnóstico Avançado',
  'rede-can': 'Rede CAN',
  'multimetro': 'Multímetro',
  'injecao-eletronica': 'Injeção Eletrônica',
  'troca-de-oleo-cambio-automatico': 'Troca de Óleo - Câmbio Automático',
  'auto-divas-experience': 'Auto Divas Experience',
};

function getTitleFromPathname(pathname) {
  const slug = pathname.split('/').filter(Boolean).at(-1);

  if (!slug) {
    return undefined;
  }

  return (
    pageTitleBySlug[slug] ||
    slug
      .split('-')
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  );
}

function getWhatsappHref({ type = 'rota', title } = {}) {
  const normalizedType = type === 'workshop' ? 'workshop' : type === 'curso' ? 'curso' : 'rota';
  const subject = title ? `${normalizedType} ${title}` : normalizedType;
  const message =
    normalizedType === 'rota'
      ? 'Olá, vi informações a respeito da Rota do Mecânico no site e quero saber mais.'
      : `Olá, vi informações a respeito do ${subject} no site da Rota do Mecânico e quero saber mais.`;

  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
}

function getPageWhatsappContext(pathname) {
  if (pathname.startsWith('/workshops/')) {
    return { type: 'workshop', title: getTitleFromPathname(pathname) };
  }

  if (pathname.startsWith('/cursos/')) {
    return { type: 'curso', title: getTitleFromPathname(pathname) };
  }

  return { type: 'rota' };
}

const trustItems = [
  'Instrutores que vivem a rotina de oficina',
  'Conteúdo aplicado em bancada, diagnóstico e sistemas reais',
  'Comunidade para continuar aprendendo depois da aula',
  'Conexão com oficinas e empresas do setor automotivo',
];

const faqItems = [
  {
    question: 'Os cursos são presenciais?',
    answer:
      'A proposta principal da Rota é o aprendizado presencial e prático, com contato direto com instrutores, ferramentas e rotina de oficina.',
  },
  {
    question: 'Preciso ter experiência para começar?',
    answer:
      'Não. Existem rotas para iniciantes, pessoas em transição de carreira e profissionais que já atuam e querem se atualizar.',
  },
  {
    question: 'Como funcionam os workshops?',
    answer:
      'Os workshops são encontros técnicos focados em temas atuais, com aplicação imediata e linguagem direta para quem precisa resolver problemas reais.',
  },
  {
    question: 'A Rota promete emprego?',
    answer:
      'Não há promessa de emprego garantido. A Rota aproxima alunos do mercado por meio de preparo técnico, networking e parceiros.',
  },
  {
    question: 'Como faço para falar com a equipe?',
    answer:
      'Use o formulário de interesse no fim da página. A equipe pode orientar sobre cursos, workshops, comunidade e próximos passos.',
  },
];

const diagnosticWorkshop = {
  type: 'workshop',
  title: 'Diagnóstico Avançado',
  label: 'Workshop',
  slug: '/workshops/diagnostico-avancado',
  heroTitle: 'Diagnóstico avançado para encontrar a causa da falha com mais segurança.',
  heroText:
    'Um workshop presencial e prático para mecânicos e eletricistas automotivos que querem organizar o raciocínio de diagnóstico, usar melhor scanner, multímetro e osciloscópio, e resolver casos reais com mais método.',
  metaTitle: 'Diagnóstico Avançado Workshop | Rota do Mecânico',
  metaDescription:
    'Workshop prático de diagnóstico automotivo para aprender método, scanner, esquemas elétricos, multímetro, osciloscópio e análise de falhas reais.',
  hours: '8 horas',
  format: 'Presencial e prático',
  level: 'Intermediário',
  partner: 'TecnoCar',
  location: 'A confirmar',
  investment: 'A confirmar',
  image: '/assets/course-diagnostics.png',
  practiceImage: '/assets/hero-workshop.png',
  highlights: ['8 horas de prática', 'Diagnóstico com método', 'Scanner, multímetro e osciloscópio', 'Casos reais de oficina'],
  audience: [
    'Mecânicos que atendem veículos com falhas eletrônicas e querem mais segurança no diagnóstico.',
    'Eletricistas automotivos que querem organizar melhor seus testes.',
    'Profissionais que usam scanner, mas querem ir além da leitura de códigos.',
    'Reparadores que desejam entender melhor multímetro, osciloscópio, sensores e sinais.',
    'Oficinas que querem reduzir tentativa, retrabalho e troca desnecessária de peças.',
  ],
  modules: [
    {
      title: 'Fundamentos do diagnóstico automotivo',
      text: 'Entenda a diferença entre sintoma, causa e falha para construir um raciocínio mais claro antes de trocar peças ou condenar componentes.',
    },
    {
      title: 'Uso correto do scanner',
      text: 'Use o scanner como ferramenta de análise, não apenas como leitor de códigos. O foco é interpretar informações e cruzar dados.',
    },
    {
      title: 'Estratégias de diagnóstico das montadoras',
      text: 'Compreenda caminhos de teste, lógica de sistemas e formas mais seguras de validar hipóteses.',
    },
    {
      title: 'Leitura de esquemas elétricos',
      text: 'Use diagramas para localizar alimentação, aterramento, sinais, módulos e componentes envolvidos no defeito.',
    },
    {
      title: 'Testes com multímetro e osciloscópio',
      text: 'Aplique medições e análise de sinais para confirmar ou descartar falhas com mais precisão.',
    },
    {
      title: 'Casos práticos de oficina',
      text: 'Analise situações reais, discuta caminhos possíveis e entenda como chegar à causa da falha sem depender de tentativa.',
    },
  ],
  faq: [
    [
      'Preciso ter experiência para participar?',
      'É recomendado já ter contato com rotina de oficina, elétrica automotiva ou diagnóstico básico. Se você está começando do zero, a equipe pode indicar uma rota de base antes.',
    ],
    [
      'O workshop é mais teórico ou prático?',
      'A proposta é prática. A teoria entra para organizar o raciocínio, mas o foco é aplicação, equipamentos, sinais e casos reais.',
    ],
    ['Vou aprender a usar scanner?', 'Sim. O scanner aparece como ferramenta de diagnóstico e interpretação, não apenas como leitor de códigos.'],
    [
      'O workshop aborda multímetro e osciloscópio?',
      'Sim. A página destaca testes com multímetro, osciloscópio e análise de sinais.',
    ],
    ['Tem certificado?', 'A emissão de certificado deve ser confirmada com a equipe no momento da inscrição.'],
    ['Onde será realizado?', 'Local a confirmar com a equipe da Rota do Mecânico.'],
  ],
  problemTitle: ['Nem toda falha', 'aparece de forma óbvia.'],
  problemText: [
    'Às vezes o scanner mostra um código, mas não entrega a causa. O sintoma aparece, some, volta diferente. O componente parece ser o problema, mas a falha está em alimentação, aterramento, sinal, rede ou interpretação.',
    'É nesse ponto que o diagnóstico deixa de ser tentativa e precisa virar método.',
  ],
  solutionTitle: ['Mais método.', 'Menos tentativa.'],
  audienceTitle: ['Para reparadores que querem', 'diagnosticar com mais segurança.'],
  note: 'Se você nunca teve contato com elétrica automotiva, multímetro ou rotina de oficina, a equipe pode indicar uma rota de base antes de avançar para diagnóstico.',
  practiceTitle: ['Teoria para organizar.', 'Prática para decidir melhor.'],
  practiceText:
    'O workshop combina explicação técnica, demonstração de equipamentos, análise de casos e aplicação prática. O foco não é encher o aluno de teoria. É mostrar como pensar, testar e decidir melhor diante de uma falha real.',
  teacherName: 'Jonas Santos',
  teacherTagline: 'diagnóstico avançado na prática.',
  finalTitle: ['Quer diagnosticar com mais método', 'e menos tentativa?'],
  finalText:
    'Fale com a equipe da Rota, tire suas dúvidas e entre na lista da próxima turma do Workshop de Diagnóstico Avançado.',
  finalButton: 'Quero participar da próxima turma',
};

const redeCanWorkshop = {
  type: 'workshop',
  title: 'Rede CAN',
  label: 'Workshop',
  slug: '/workshops/rede-can',
  heroTitle: 'Rede CAN na prática para diagnosticar a comunicação entre módulos com segurança.',
  heroText:
    'Um treinamento presencial e prático para mecânicos e eletricistas que querem entender como os módulos conversam, ler sinais CAN, interpretar diagramas e resolver falhas de comunicação em veículos modernos.',
  metaTitle: 'Rede CAN na Prática | Rota do Mecânico',
  metaDescription:
    'Treinamento prático de Rede CAN Bus: arquitetura, protocolos, topologias, leitura de sinais, PWM, duty cycle e diagnóstico de falhas de comunicação em veículos reais.',
  hours: '20 horas',
  format: 'Presencial e prático',
  level: 'Intermediário',
  partner: 'TecnoCar',
  location: 'A confirmar',
  investment: 'A confirmar',
  image: '/assets/course-rede-can.png',
  practiceImage: '/assets/hero-workshop.png',
  highlights: ['20 horas de prática', 'Leitura de sinais CAN', 'Diagramas e pinagens', 'Diagnóstico em veículos reais'],
  audience: [
    'Mecânicos e eletricistas que já lidam com sistemas eletrônicos e querem dominar a comunicação entre módulos.',
    'Profissionais que enfrentam falhas intermitentes e perda de comunicação e querem um caminho de teste seguro.',
    'Reparadores que usam scanner e osciloscópio e querem interpretar sinais CAN com mais confiança.',
    'Quem trabalha com veículos modernos e precisa ler diagramas, pinagens e a tomada OBD com método.',
  ],
  modules: [
    { title: 'Fundamentos da Rede CAN Bus', text: 'Entenda o que é a Rede CAN, por que ela existe e como se tornou a base da comunicação nos veículos atuais.' },
    { title: 'Arquitetura e comunicação entre módulos', text: 'Veja como os módulos trocam informação e como isso afeta o funcionamento do veículo.' },
    { title: 'Protocolos de comunicação automotiva', text: 'Conheça os principais protocolos e saiba diferenciar o que cada sistema utiliza.' },
    { title: 'Topologias e funcionamento da rede', text: 'Entenda como a rede é montada e por que a topologia influencia diretamente na falha.' },
    { title: 'Diagnóstico de falhas na Rede CAN', text: 'Aprenda um caminho de teste para localizar perda de comunicação, curto e interrupção na rede.' },
    { title: 'Interpretação de sinais CAN Bus', text: 'Leia as formas de onda CAN e reconheça quando o sinal está saudável ou comprometido.' },
    { title: 'Leitura de diagramas e pinagens', text: 'Use diagramas e pinagens para achar os pontos certos de medição, sem chute.' },
    { title: 'Tomada OBD e comunicação dos sistemas', text: 'Entenda a OBD como porta de comunicação e o que ela revela sobre a rede.' },
    { title: 'Fundamentos e aplicações do PWM', text: 'Compreenda o sinal PWM e onde ele aparece no controle dos atuadores.' },
    { title: 'Duty cycle e controle de atuadores', text: 'Interprete o duty cycle para avaliar o comando e a resposta dos atuadores.' },
    { title: 'Medições e análise de sinais na prática', text: 'Aplique multímetro e osciloscópio para confirmar ou descartar falhas com precisão.' },
    { title: 'Diagnóstico em veículos reais', text: 'Feche o raciocínio aplicando tudo em casos e veículos reais de oficina.' },
  ],
  faq: [
    [
      'Preciso ter experiência para participar?',
      'É recomendado já ter contato com elétrica automotiva, scanner ou diagnóstico. Se você está começando, a equipe pode indicar uma rota de base antes.',
    ],
    [
      'O treinamento é mais teórico ou prático?',
      'A proposta é prática. A teoria organiza o raciocínio, mas o foco é leitura de sinais, diagramas e diagnóstico em veículos reais.',
    ],
    ['Vou aprender a usar osciloscópio na rede?', 'Sim. Você aprende a medir e interpretar sinais CAN e PWM com osciloscópio e multímetro.'],
    ['Serve para qualquer marca de veículo?', 'Sim. O método de leitura de rede, diagramas e sinais se aplica aos diferentes sistemas do mercado.'],
    ['Tem certificado?', 'A emissão de certificado deve ser confirmada com a equipe no momento da inscrição.'],
    ['Onde será realizado?', 'Local a confirmar com a equipe da Rota do Mecânico.'],
  ],
  problemTitle: ['Quando os módulos', 'param de se entender.'],
  problemText: [
    'No veículo moderno, dezenas de módulos trocam informação o tempo todo pela Rede CAN. Quando essa comunicação falha, aparecem sintomas que não batem com nenhum componente: luzes acesas, perda de comunicação e falhas que somem e voltam.',
    'Sem entender a rede, o diagnóstico vira tentativa — e a troca de peças raramente resolve.',
  ],
  solutionTitle: ['Entenda a rede.', 'Leia o sinal.'],
  audienceTitle: ['Para quem trabalha com', 'veículos que dependem de comunicação.'],
  note: 'Se você ainda não teve contato com elétrica automotiva, multímetro ou scanner, a equipe pode indicar uma rota de base antes de avançar para Rede CAN.',
  practiceTitle: ['Sinal na tela.', 'Decisão com base.'],
  practiceText:
    'O treinamento combina fundamento técnico, leitura de diagramas, medição de sinais e diagnóstico em veículos reais. Você aprende a enxergar a rede funcionando e a agir sobre a causa da falha, não sobre o sintoma.',
  teacherName: 'Jonas Santos',
  teacherTagline: 'comunicação automotiva na prática.',
  finalTitle: ['Quer dominar a Rede CAN', 'e parar de trocar peça no escuro?'],
  finalText:
    'Fale com a equipe da Rota, tire suas dúvidas e entre na lista da próxima turma do treinamento de Rede CAN na Prática.',
  finalButton: 'Quero participar da próxima turma',
};

const diagnosticoAvancadoCurso = {
  type: 'curso',
  title: 'Diagnóstico Avançado',
  label: 'Curso',
  slug: '/cursos/diagnostico-avancado',
  heroTitle: 'Diagnóstico avançado, do sintoma à causa, com equipamento profissional.',
  heroText:
    'A trilha completa de diagnóstico da Rota do Mecânico. Um curso presencial e prático para mecânicos e eletricistas que querem dominar scanner, osciloscópio, sensores, ignição e rede, e fechar o raciocínio em casos reais.',
  metaTitle: 'Diagnóstico Avançado - Aprenda na Prática | Rota do Mecânico',
  metaDescription:
    'Curso completo de diagnóstico automotivo: scanner avançado, osciloscópio, DTC, sensores e atuadores, CKP e CMP, ignição, Rede CAN, formas de onda e casos reais.',
  hours: '27 horas',
  format: 'Presencial e prático',
  level: 'Intermediário / Avançado',
  partner: 'TecnoCar',
  location: 'A confirmar',
  investment: 'A confirmar',
  image: '/assets/course-diagnostics.png',
  practiceImage: '/assets/hero-workshop.png',
  highlights: ['27 horas de prática', 'Scanner e osciloscópio', 'Sensores, ignição e rede', 'Estudos de casos reais'],
  audience: [
    'Mecânicos e eletricistas que já atuam e querem estruturar um método de diagnóstico.',
    'Reparadores que usam scanner, mas querem ir além da leitura de códigos.',
    'Profissionais que querem dominar osciloscópio, formas de onda e análise de sinais.',
    'Quem quer reduzir tentativa, retrabalho e troca desnecessária de peças na oficina.',
  ],
  modules: [
    { title: 'Diagnóstico automotivo profissional', text: 'Construa um método claro para sair do chute e trabalhar com raciocínio técnico e seguro.' },
    { title: 'Scanner automotivo avançado', text: 'Use o scanner como ferramenta de análise, cruzando parâmetros e interpretando informações.' },
    { title: 'Osciloscópio automotivo', text: 'Aprenda a capturar e interpretar sinais para confirmar ou descartar falhas com precisão.' },
    { title: 'Interpretação de códigos DTC', text: 'Entenda o que o código diz e, principalmente, o que ele não diz sobre a causa da falha.' },
    { title: 'Sensores e atuadores', text: 'Saiba o que medir em cada componente e como relacionar o teste ao sintoma apresentado.' },
    { title: 'Sensores CKP e CMP', text: 'Analise os sinais de rotação e fase e reconheça falhas que afetam partida e funcionamento.' },
    { title: 'Sistema de ignição', text: 'Diagnostique o sistema de ignição com base em sinais e evidências, não em suposição.' },
    { title: 'Rede CAN Bus', text: 'Entenda a comunicação entre módulos e como a rede impacta o diagnóstico.' },
    { title: 'Formas de onda', text: 'Leia formas de onda reais e transforme o osciloscópio em decisão técnica.' },
    { title: 'Estudos de casos reais', text: 'Analise situações de oficina e siga o caminho lógico até a causa da falha.' },
    { title: 'Estratégias de diagnóstico', text: 'Organize hipóteses, testes e validações para diagnosticar mais rápido e com segurança.' },
    { title: 'Equipamentos profissionais', text: 'Conheça e use os equipamentos certos para cada etapa do diagnóstico.' },
  ],
  faq: [
    [
      'Preciso ter experiência para participar?',
      'É recomendado já ter contato com elétrica automotiva, scanner ou diagnóstico básico. Se você está começando do zero, a equipe pode indicar uma rota de base antes.',
    ],
    ['O curso é mais teórico ou prático?', 'A proposta é prática. A teoria organiza o raciocínio, mas o foco é equipamento, sinais e casos reais.'],
    ['Vou usar osciloscópio de verdade?', 'Sim. O osciloscópio é parte central do curso, com captura e interpretação de formas de onda.'],
    ['Qual a diferença para o Workshop de 8h?', 'O workshop é uma introdução ao método. Este curso é a trilha completa, mais longa e aprofundada.'],
    ['Tem certificado?', 'A emissão de certificado deve ser confirmada com a equipe no momento da inscrição.'],
    ['Onde será realizado?', 'Local a confirmar com a equipe da Rota do Mecânico.'],
  ],
  problemTitle: ['Ler o código', 'não é diagnosticar.'],
  problemText: [
    'O scanner aponta um caminho, mas a causa quase nunca está no código. Está no sinal, na alimentação, no aterramento, na rede ou na interpretação de quem está diante do carro.',
    'Sem método e sem equipamento bem usado, o diagnóstico vira tentativa — e a conta fica com a oficina.',
  ],
  solutionTitle: ['Método completo.', 'Do sintoma à causa.'],
  audienceTitle: ['Para quem quer diagnosticar', 'com profundidade e segurança.'],
  note: 'Se você ainda não teve contato com elétrica automotiva, multímetro ou scanner, a equipe pode indicar uma rota de base antes de avançar.',
  practiceTitle: ['Equipamento na mão.', 'Caso real na frente.'],
  practiceText:
    'O curso combina fundamento técnico, uso de scanner e osciloscópio, análise de sinais e estudos de casos reais. O foco é formar um profissional que pensa, testa e decide com base em evidência.',
  teacherName: 'Jonas Santos',
  teacherTagline: 'diagnóstico avançado do sintoma à causa.',
  finalTitle: ['Quer dominar o diagnóstico', 'do início ao fim?'],
  finalText:
    'Fale com a equipe da Rota, tire suas dúvidas e entre na lista da próxima turma do curso de Diagnóstico Avançado.',
  finalButton: 'Quero participar da próxima turma',
};

const multimetroCurso = {
  type: 'curso',
  title: 'Multímetro',
  label: 'Curso',
  slug: '/cursos/multimetro',
  heroTitle: 'Multímetro na prática para medir, testar e diagnosticar com segurança.',
  heroText:
    'A base elétrica que todo reparador precisa. Um curso presencial e prático para quem quer usar o multímetro com confiança, entender o que cada medição significa e localizar falhas elétricas sem chute.',
  metaTitle: 'Multímetro - Aprenda na Prática | Rota do Mecânico',
  metaDescription:
    'Curso prático de multímetro automotivo: medição de tensão, corrente e resistência, continuidade, diodo, teste de sensores e diagnóstico de falhas elétricas.',
  hours: '10 horas',
  format: 'Presencial e prático',
  level: 'Iniciante',
  partner: 'TecnoCar',
  location: 'A confirmar',
  investment: 'A confirmar',
  image: '/assets/course-multimetro.png',
  practiceImage: '/assets/course-diagnostics.png',
  highlights: ['10 horas de prática', 'Tensão, corrente e resistência', 'Teste de sensores', 'Diagnóstico elétrico'],
  audience: [
    'Quem está começando na elétrica automotiva e precisa de uma base sólida.',
    'Mecânicos que trabalham na mecânica geral e querem entrar no elétrico com segurança.',
    'Profissionais que usam o multímetro, mas têm dúvida sobre o que cada medição significa.',
    'Reparadores que querem localizar falhas elétricas sem depender de tentativa.',
  ],
  modules: [
    { title: 'Uso profissional do multímetro', text: 'Aprenda a configurar e usar o multímetro corretamente para cada tipo de medição.' },
    { title: 'Medição de tensão, corrente e resistência', text: 'Entenda o que cada grandeza representa e como medir sem errar a escala.' },
    { title: 'Testes de continuidade e diodo', text: 'Confirme caminhos elétricos e componentes com testes simples e confiáveis.' },
    { title: 'Diagnóstico de sensores automotivos', text: 'Meça sensores com método e relacione o resultado ao funcionamento do sistema.' },
    { title: 'Interpretação de valores e medições', text: 'Saiba ler o número na tela e decidir se o componente está bom ou comprometido.' },
    { title: 'Identificação de falhas elétricas', text: 'Localize interrupções, curtos e mau contato com um caminho de teste claro.' },
    { title: 'Testes práticos em componentes', text: 'Aplique as medições em componentes reais e ganhe confiança na bancada.' },
    { title: 'Técnicas de diagnóstico elétrico', text: 'Organize o raciocínio para diagnosticar problemas elétricos com segurança.' },
  ],
  faq: [
    ['Preciso ter experiência para participar?', 'Não. Este é um curso de base, indicado inclusive para quem está começando na elétrica automotiva.'],
    ['O curso é mais teórico ou prático?', 'A proposta é prática. Você mede, testa e interpreta na bancada, com apoio do instrutor.'],
    ['Preciso levar meu multímetro?', 'A necessidade de material próprio deve ser confirmada com a equipe no momento da inscrição.'],
    ['Serve como base para outros cursos?', 'Sim. O multímetro é porta de entrada para diagnóstico, injeção e Rede CAN.'],
    ['Tem certificado?', 'A emissão de certificado deve ser confirmada com a equipe no momento da inscrição.'],
    ['Onde será realizado?', 'Local a confirmar com a equipe da Rota do Mecânico.'],
  ],
  problemTitle: ['Sem base elétrica,', 'todo diagnóstico trava.'],
  problemText: [
    'Muita falha simples vira dor de cabeça quando o profissional não confia na própria medição. A dúvida sobre tensão, corrente e resistência faz trocar peça boa e perder tempo.',
    'Dominar o multímetro é o primeiro passo para diagnosticar qualquer sistema com segurança.',
  ],
  solutionTitle: ['Base sólida.', 'Medição sem chute.'],
  audienceTitle: ['Para quem quer entrar', 'no elétrico com segurança.'],
  note: 'Este é um curso de base. Se você já tem experiência com elétrica e diagnóstico, a equipe pode indicar uma trilha mais avançada.',
  practiceTitle: ['Multímetro na mão.', 'Componente na bancada.'],
  practiceText:
    'O curso é aplicado do começo ao fim. Você aprende a medir, interpretar e diagnosticar em componentes reais, com acompanhamento próximo do instrutor.',
  teacherName: 'Sylvio Bove',
  teacherTagline: 'medição elétrica com segurança.',
  finalTitle: ['Quer parar de chutar', 'e começar a medir?'],
  finalText:
    'Fale com a equipe da Rota, tire suas dúvidas e entre na lista da próxima turma do curso de Multímetro.',
  finalButton: 'Quero participar da próxima turma',
};

const injecaoEletronicaCurso = {
  type: 'curso',
  title: 'Injeção Eletrônica',
  label: 'Curso',
  slug: '/cursos/injecao-eletronica',
  heroTitle: 'Injeção eletrônica do zero à prática, para uma base técnica de verdade.',
  heroText:
    'Um curso presencial e completo para quem quer entender como o motor é gerenciado eletronicamente. Da ECU aos sensores, do scanner ao osciloscópio, com base sólida para atuar em veículos modernos.',
  metaTitle: 'Injeção Eletrônica - Aprenda na Prática | Rota do Mecânico',
  metaDescription:
    'Curso completo de injeção eletrônica: fundamentos, ECU e gerenciamento do motor, sensores e atuadores, scanner, osciloscópio, alimentação, Drive By Wire e diagnóstico.',
  hours: '120 horas',
  format: 'Presencial e prático',
  level: 'Iniciante / Intermediário',
  partner: 'TecnoCar',
  location: 'A confirmar',
  investment: 'A confirmar',
  image: '/assets/course-injecao.png',
  practiceImage: '/assets/hero-workshop.png',
  highlights: ['120 horas de formação', 'Da ECU aos sensores', 'Scanner e osciloscópio', 'Base para veículos modernos'],
  audience: [
    'Quem quer construir uma carreira sólida na reparação de veículos modernos.',
    'Iniciantes que precisam de uma formação estruturada em injeção eletrônica.',
    'Mecânicos da mecânica geral que querem migrar para o eletrônico.',
    'Profissionais que querem entender de verdade como a ECU gerencia o motor.',
  ],
  modules: [
    { title: 'Fundamentos da injeção eletrônica', text: 'Entenda como funciona o sistema e por que ele substituiu o carburador.' },
    { title: 'Funcionamento da ECU e gerenciamento do motor', text: 'Compreenda como a central lê, decide e comanda o funcionamento do motor.' },
    { title: 'Sensores, atuadores e sistema de ignição', text: 'Conheça o papel de cada componente e como eles se relacionam no sistema.' },
    { title: 'Scanner automotivo e interpretação de parâmetros', text: 'Use o scanner para ler parâmetros e entender o comportamento do motor.' },
    { title: 'Diagnóstico com osciloscópio', text: 'Capture e interprete sinais para diagnosticar com precisão.' },
    { title: 'Sistema de alimentação e combustível', text: 'Entenda a alimentação de combustível e sua influência no funcionamento.' },
    { title: 'Drive By Wire (acelerador eletrônico)', text: 'Compreenda o acelerador eletrônico e como diagnosticar suas falhas.' },
    { title: 'Estratégias da ECU e diagnóstico de falhas', text: 'Entenda as estratégias da central e como chegar à causa das falhas.' },
  ],
  faq: [
    ['Preciso ter experiência para participar?', 'Não é obrigatório. O curso parte do fundamento, mas ter base elétrica ou o curso de Multímetro ajuda bastante.'],
    ['Por que a carga horária é tão alta?', 'São 120 horas porque é uma formação completa, com base teórica sólida e muita prática em bancada e veículos.'],
    ['O curso é presencial?', 'Sim. A proposta da Rota é o aprendizado presencial e prático, com contato direto com instrutor e equipamentos.'],
    ['Vou aprender a usar scanner e osciloscópio?', 'Sim. Ambos são usados ao longo do curso para leitura de parâmetros e análise de sinais.'],
    ['Tem certificado?', 'A emissão de certificado deve ser confirmada com a equipe no momento da inscrição.'],
    ['Onde será realizado?', 'Local a confirmar com a equipe da Rota do Mecânico.'],
  ],
  problemTitle: ['O carro moderno', 'não perdoa o improviso.'],
  problemText: [
    'Veículos atuais são gerenciados por eletrônica em cada detalhe. Sem entender a injeção, o profissional fica limitado à mecânica básica e perde serviço para quem domina o sistema.',
    'Uma base bem construída é o que separa quem tenta de quem resolve.',
  ],
  solutionTitle: ['Formação completa.', 'Base que sustenta a carreira.'],
  audienceTitle: ['Para quem quer construir', 'uma carreira técnica de verdade.'],
  note: 'Se você busca um conteúdo curto e pontual, a equipe pode indicar um workshop específico. Este curso é uma formação completa.',
  practiceTitle: ['Teoria que sustenta.', 'Prática que forma.'],
  practiceText:
    'Ao longo de 120 horas, você constrói base teórica e aplica cada conceito em bancada e veículos reais, com acompanhamento do instrutor do início ao fim.',
  teacherName: 'Silas Arantes',
  teacherTagline: 'injeção eletrônica do zero à prática.',
  finalTitle: ['Quer construir uma base', 'técnica de verdade?'],
  finalText:
    'Fale com a equipe da Rota, tire suas dúvidas e entre na lista da próxima turma do curso de Injeção Eletrônica.',
  finalButton: 'Quero participar da próxima turma',
};

const trocaOleoCambioCurso = {
  type: 'curso',
  title: 'Troca de Óleo - Câmbio Automático',
  label: 'Curso',
  slug: '/cursos/troca-de-oleo-cambio-automatico',
  heroTitle: 'Troca de óleo de câmbio automático com procedimento correto e serviço lucrativo.',
  heroText:
    'Um curso presencial e prático para oficinas que querem executar a troca de ATF com segurança, usar a máquina corretamente e precificar o serviço com lucro.',
  metaTitle: 'Troca de Óleo de Câmbio Automático | Rota do Mecânico',
  metaDescription:
    'Curso prático de troca de óleo de câmbio automático: tipos de câmbio, fluidos ATF, procedimento correto, uso da máquina de troca, prática em veículos e precificação.',
  hours: '9 horas',
  format: 'Presencial e prático',
  level: 'Intermediário',
  partner: 'Garage 92',
  location: 'A confirmar',
  investment: 'A confirmar',
  image: '/assets/course-cambio-atf.png',
  practiceImage: '/assets/hero-workshop.png',
  highlights: ['9 horas de prática', 'Fluidos ATF e especificações', 'Uso da máquina de troca', 'Precificação com lucro'],
  audience: [
    'Oficinas que querem oferecer a troca de óleo de câmbio automático com segurança.',
    'Mecânicos que já executam o serviço, mas têm dúvidas sobre procedimento e fluidos.',
    'Profissionais que querem parar de terceirizar e passar a executar internamente.',
    'Gestores que querem transformar o serviço em uma fonte de receita lucrativa.',
  ],
  modules: [
    { title: 'Tipos de câmbios automáticos', text: 'Conheça os principais tipos de câmbio e o que muda no atendimento de cada um.' },
    { title: 'Fluidos ATF e especificações', text: 'Entenda as especificações e por que o fluido certo é decisivo para a durabilidade.' },
    { title: 'Mitos e verdades sobre troca de óleo', text: 'Separe o que é técnica do que é achismo e evite erros que custam caro.' },
    { title: 'Procedimento correto de troca', text: 'Siga o passo a passo seguro para uma troca bem executada.' },
    { title: 'Uso da máquina de troca de ATF', text: 'Aprenda a operar a máquina com segurança e obter o melhor resultado.' },
    { title: 'Prática em veículos reais', text: 'Aplique o procedimento em veículos reais, com acompanhamento do instrutor.' },
    { title: 'Diagnóstico e cuidados essenciais', text: 'Identifique sinais de atenção e cuide para não gerar problemas no câmbio.' },
    { title: 'Precificação e lucratividade do serviço', text: 'Aprenda a precificar o serviço com margem e transformá-lo em receita.' },
  ],
  faq: [
    ['Preciso ter experiência para participar?', 'É recomendado já ter rotina de oficina. O curso é voltado à execução correta e à gestão do serviço.'],
    ['O curso é mais teórico ou prático?', 'A proposta é prática, com procedimento em veículos reais e uso da máquina de troca de ATF.'],
    ['Preciso ter a máquina de ATF na minha oficina?', 'Não para o curso. Você aprende a operá-la e a avaliar o investimento para a sua realidade.'],
    ['O curso ajuda a precificar o serviço?', 'Sim. Um módulo é dedicado à precificação e à lucratividade do serviço.'],
    ['Tem certificado?', 'A emissão de certificado deve ser confirmada com a equipe no momento da inscrição.'],
    ['Onde será realizado?', 'Local a confirmar com a equipe da Rota do Mecânico.'],
  ],
  problemTitle: ['Serviço bom', 'mal executado dá prejuízo.'],
  problemText: [
    'A troca de óleo de câmbio automático é procurada e lucrativa, mas exige fluido certo, procedimento correto e uso adequado da máquina. Um erro compromete o câmbio e a confiança do cliente.',
    'Executar com método é o que garante segurança para o carro e margem para a oficina.',
  ],
  solutionTitle: ['Procedimento correto.', 'Serviço lucrativo.'],
  audienceTitle: ['Para oficinas que querem', 'executar e precificar com segurança.'],
  note: 'Se você busca diagnóstico eletrônico, a equipe pode indicar outra trilha. Este curso é focado na execução e na gestão do serviço de câmbio.',
  practiceTitle: ['Máquina em uso.', 'Veículo na frente.'],
  practiceText:
    'O curso combina fundamento técnico, uso da máquina de ATF e prática em veículos reais, fechando com a parte de precificação para tornar o serviço rentável.',
  teacherName: 'Marlon Wagner Hey',
  teacherTagline: 'serviço de câmbio com método e lucro.',
  finalTitle: ['Quer executar câmbio', 'com segurança e lucro?'],
  finalText:
    'Fale com a equipe da Rota, tire suas dúvidas e entre na lista da próxima turma do curso de Troca de Óleo de Câmbio Automático.',
  finalButton: 'Quero participar da próxima turma',
};

const autoDivasExperience = {
  type: 'curso',
  title: 'Auto Divas Experience',
  label: 'Experiência',
  slug: '/cursos/auto-divas-experience',
  heroTitle: 'Auto Divas Experience: segurança e autonomia para você e o seu carro.',
  heroText:
    'Uma experiência presencial e prática para mulheres que querem entender o próprio veículo, cuidar da manutenção e agir com confiança em qualquer situação do dia a dia.',
  metaTitle: 'Auto Divas Experience | Rota do Mecânico',
  metaDescription:
    'Experiência prática para mulheres: funcionamento do veículo, luzes do painel, manutenção preventiva, cuidados essenciais e como agir em situações de emergência.',
  hours: '6 horas',
  format: 'Presencial e prático',
  level: 'Aberto a todas',
  partner: 'Auto Divas Speed',
  location: 'A confirmar',
  investment: 'R$ 130',
  image: '/assets/course-auto-divas.png',
  practiceImage: '/assets/community-workshop.png',
  highlights: ['6 horas de prática', 'Luzes do painel descomplicadas', 'Manutenção preventiva', 'Como agir em emergências'],
  audience: [
    'Mulheres que querem entender o próprio carro sem depender de ninguém.',
    'Quem quer reconhecer os alertas do painel e saber a hora certa de agir.',
    'Quem deseja fazer a manutenção preventiva com consciência e segurança.',
    'Quem quer viajar e dirigir com mais tranquilidade e autonomia.',
  ],
  modules: [
    { title: 'Funcionamento básico do veículo', text: 'Entenda os principais sistemas do carro e como eles trabalham juntos.' },
    { title: 'Luzes do painel e alertas', text: 'Aprenda a identificar as luzes e os alertas mais importantes e o que fazer diante deles.' },
    { title: 'Manutenção preventiva', text: 'Verifique óleo, arrefecimento, freios e pneus com segurança e no tempo certo.' },
    { title: 'Cuidados para a vida útil do carro', text: 'Conheça os cuidados essenciais que aumentam a durabilidade do veículo.' },
    { title: 'Como agir em emergências', text: 'Saiba agir na troca de pneu, bateria descarregada, superaquecimento e falha na partida.' },
    { title: 'Inspeção completa e checklist de viagem', text: 'Faça uma inspeção do veículo e identifique os principais componentes na prática.' },
  ],
  faq: [
    ['Preciso saber alguma coisa de mecânica?', 'Não. A experiência é feita para quem está começando do zero, com linguagem clara e acolhedora.'],
    ['É teórico ou prático?', 'É prático. Você coloca a mão no carro, identifica componentes e pratica os cuidados essenciais.'],
    ['Preciso levar o meu carro?', 'A necessidade de veículo próprio deve ser confirmada com a equipe no momento da inscrição.'],
    ['Qual é o investimento?', 'O investimento é R$ 130. Condições e formas de pagamento podem ser confirmadas com a equipe.'],
    ['Onde e quando será realizado?', 'Data e local são confirmados com a equipe da Rota do Mecânico e do projeto Auto Divas Speed.'],
  ],
  problemTitle: ['Dirigir sem entender', 'o carro gera insegurança.'],
  problemText: [
    'Uma luz que acende, um barulho diferente, um pneu na estrada. Sem entender o básico do veículo, situações simples viram motivo de medo e dependência.',
    'Conhecer o próprio carro é o que traz segurança, autonomia e tranquilidade para dirigir.',
  ],
  solutionTitle: ['Conhecimento na prática.', 'Autonomia de verdade.'],
  audienceTitle: ['Para mulheres que querem', 'segurança e independência no volante.'],
  note: 'A experiência tem linguagem acessível e acolhedora, sem termos complicados e sem julgamento. O objetivo é que você saia confiante.',
  practiceTitle: ['Mão no carro.', 'Confiança para dirigir.'],
  practiceText:
    'A experiência é totalmente prática. Você identifica componentes, pratica a manutenção preventiva e aprende a agir nas principais situações de emergência.',
  teacherName: 'A confirmar',
  teacherTagline: '',
  finalTitle: ['Quer dirigir com', 'segurança e autonomia?'],
  finalText:
    'Fale com a equipe da Rota, tire suas dúvidas e garanta sua vaga na próxima turma da Auto Divas Experience.',
  finalButton: 'Quero garantir minha vaga',
};

const coursePages = [
  diagnosticWorkshop,
  redeCanWorkshop,
  diagnosticoAvancadoCurso,
  multimetroCurso,
  injecaoEletronicaCurso,
  trocaOleoCambioCurso,
  autoDivasExperience,
];

function getCoursePageBySlug(pathname) {
  return coursePages.find((course) => course.slug === pathname);
}

const teachers = [
  {
    name: 'Jonas Santos',
    specialty: 'Especialista em diagnóstico automotivo avançado',
    shortSpecialty: 'Diagnóstico avançado',
    image: '/assets/professores/jonas-portrait.webp',
    alt: 'Professor Jonas Santos',
    crop: 'crop-jonas',
    formation: 'Técnico em mecânica, tecnólogo em mecatrônica e especialista em diagnóstico automotivo avançado.',
    experience:
      'Fundador da Tecnocar Injeção Eletrônica, atua no segmento de eletrônica automotiva com diagnósticos em sistemas modernos.',
    contribution:
      'Leva para a sala de aula uma didática objetiva, aplicada e alinhada às necessidades reais de mecânicos e eletricistas automotivos.',
    tags: ['Injeção eletrônica', 'Rede CAN', 'Osciloscópio', 'Sensores e atuadores'],
  },
  {
    name: 'Marlon Wagner Hey',
    specialty: 'Especialista em gestão técnica, testes veiculares e Honda',
    shortSpecialty: 'Gestão técnica e Honda',
    image: '/assets/professores/marlon-portrait.webp',
    alt: 'Professor Marlon Wagner Hey',
    crop: 'crop-marlon',
    formation: 'Profissional do setor automotivo desde 2002, com trajetória em montadoras e concessionárias.',
    experience:
      'Passou por Volkswagen, BMW, Volvo, Toyota, Kia, Fiat e Honda, somando vivência em testes, oficina e relacionamento com clientes.',
    contribution:
      'Instrutor técnico na Rota do Mecânico e proprietário da MWH Automotiva, oficina especializada em Honda.',
    tags: ['Honda', 'Testes de veículos', 'Gestão de oficina', 'Atendimento técnico'],
  },
  {
    name: 'André Luiz da Silva',
    specialty: 'Especialista em mecânica prática e rotina de oficina',
    shortSpecialty: 'Mecânica prática',
    image: '/assets/professores/andre-portrait.webp',
    alt: 'Professor André Luiz da Silva',
    crop: 'crop-andre',
    formation: 'Mais de 40 anos no setor de mecânica, com início aos 12 anos realizando reparos em motocicletas.',
    experience:
      'Construiu uma carreira acompanhando a evolução tecnológica do setor e consolidando uma base técnica reconhecida.',
    contribution:
      'Compartilha experiência prática para formar novos profissionais com comprometimento, qualidade e visão de oficina.',
    tags: ['Mecânica geral', 'Motocicletas', 'Evolução técnica', 'Prática de oficina'],
  },
  {
    name: 'Silas Arantes',
    specialty: 'Especialista em mecânica de veículos e injeção para iniciantes',
    shortSpecialty: 'Mecânica e injeção inicial',
    image: '/assets/professores/silas-portrait.webp',
    alt: 'Professor Silas Arantes',
    crop: 'crop-silas',
    formation:
      'Profissional de reparação automotiva com experiência em suspensão, freios e diagnóstico de falhas em injeção eletrônica.',
    experience:
      'Desenvolveu conhecimentos técnicos voltados à identificação e solução de defeitos com foco em qualidade e eficiência.',
    contribution:
      'Ensina mecânica de veículos e injeção eletrônica de forma prática, didática e acessível para quem está começando.',
    tags: ['Suspensão', 'Freios', 'Injeção eletrônica', 'Formação inicial'],
  },
  {
    name: 'Sylvio Bove',
    specialty: 'Especialista em sistemas elétricos e montagem técnica de motores',
    shortSpecialty: 'Elétrica e motores',
    image: '/assets/professores/sylvio-portrait.webp',
    alt: 'Professor Sylvio Bove',
    crop: 'crop-sylvio',
    formation: 'Técnico em reparação automotiva, com sólida experiência em sistemas elétricos e injeção eletrônica.',
    experience:
      'Atua com diagnóstico, reparação e funcionamento dos principais sistemas automotivos, incluindo montagem técnica de motores.',
    contribution:
      'Fortalece a qualificação técnica de profissionais por meio do ensino prático e da troca de experiências de carreira.',
    tags: ['Elétrica automotiva', 'Montagem de motores', 'Diagnóstico', 'Reparação técnica'],
  },
];

function Brand() {
  return (
    <a className="brand" href="/" aria-label="Rota do Mecânico">
      <span>Rota</span>
      <strong>do Mecânico</strong>
    </a>
  );
}

function Header({ isSubPage = false, isTeachersPage = false, whatsappContext }) {
  const [open, setOpen] = useState(false);
  const menuLabel = open ? 'Fechar menu' : 'Abrir menu';

  return (
    <header className="site-header">
      <Brand />
      <nav id="primary-navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Navegação principal">
        {navItems.map(([item, href]) => (
          <a
            key={item}
            href={isSubPage && href.startsWith('#') ? `/${href}` : href}
            onClick={() => setOpen(false)}
            aria-current={href === '/professores' && isTeachersPage ? 'page' : undefined}
          >
            {item}
          </a>
        ))}
        <a
          className="nav-cta"
          href={getWhatsappHref(whatsappContext)}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <WhatsappLogo size={18} weight="bold" aria-hidden="true" />
          Falar com a equipe
        </a>
      </nav>
      <a className="header-cta" href={getWhatsappHref(whatsappContext)} target="_blank" rel="noreferrer">
        Falar com a equipe
      </a>
      <button
        className="menu-button"
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-controls="primary-navigation"
        aria-expanded={open}
        aria-label={menuLabel}
      >
        {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img {...heroSrcSet('/assets/hero-workshop.png')} alt="" fetchPriority="high" />
      </div>
      <div className="hero-content">
        <h1>
          Rota
          <span>do Mecânico</span>
        </h1>
        <p>
          Aprendizado prático, comunidade e conexão com o mercado para quem quer entrar,
          evoluir ou se atualizar no setor automotivo.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#rotas">
            Quero encontrar minha rota
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
          <a className="button secondary" href="#cursos">
            Ver cursos e workshops
          </a>
        </div>
      </div>
      <div className="proof-bar" aria-label="Diferenciais da Rota do Mecânico">
        <div>
          <Wrench size={30} weight="duotone" />
          <span>Cursos presenciais e práticos</span>
        </div>
        <div>
          <UsersThree size={30} weight="duotone" />
          <span>Comunidade de reparadores</span>
        </div>
        <div>
          <CalendarCheck size={30} weight="duotone" />
          <span>Workshops e eventos técnicos</span>
        </div>
        <div>
          <Handshake size={30} weight="duotone" />
          <span>Conexão com oficinas parceiras</span>
        </div>
      </div>
    </section>
  );
}

function CommunityIntro() {
  return (
    <section className="light-section" id="a-rota">
      <div className="section-head centered">
        <h2>
          Você não entra em uma escola.
          <span>Você entra em uma comunidade de reparadores.</span>
        </h2>
        <p>
          Aqui você aprende na prática, troca experiência com quem vive a oficina e
          encontra caminhos reais para evoluir na profissão.
        </p>
      </div>
      <div className="audience-grid">
        {audiences.map((audience) => (
          <article className="audience-card" key={audience.title}>
            <img src={cardSrc(audience.image)} alt="" loading="lazy" />
            <div>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RoutesSection() {
  return (
    <section className="route-section" id="rotas">
      <div className="section-head centered dark">
        <h2>Aprender. Conectar. Evoluir. Trabalhar.</h2>
      </div>
      <div className="route-line">
        {routes.map((route, index) => {
          const Icon = route.icon;
          return (
            <article className="route-step" key={route.title}>
              <span className="step-number">{index + 1}</span>
              <Icon size={44} weight="duotone" />
              <h3>{route.title}</h3>
              <p>{route.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function CoursesSection() {
  const [filter, setFilter] = useState('todos');
  const filtered = useMemo(
    () => (filter === 'todos' ? courses : courses.filter((course) => course.category === filter)),
    [filter],
  );

  return (
    <section className="courses-section" id="cursos">
      <div className="courses-copy">
        <h2>
          Aprenda na prática.
          <span>Aplique na oficina.</span>
        </h2>
        <p>
          Conteúdos diretos, atualizados e aplicáveis para quem quer resultado na bancada.
        </p>
        <div className="filter-row" aria-label="Filtrar cursos">
          {[
            ['todos', 'Todos'],
            ['base', 'Base técnica'],
            ['avancado', 'Avançado'],
            ['workshop', 'Workshops'],
          ].map(([value, label]) => (
            <button
              className={filter === value ? 'filter is-active' : 'filter'}
              type="button"
              key={value}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="course-grid">
        {filtered.map((course) => (
          <article className="course-card" key={course.title}>
            <img src={cardSrc(course.image)} alt="" loading="lazy" />
            <div className="course-body">
              <span>{course.type}</span>
              <h3>{course.title}</h3>
              <p>{course.text}</p>
              <dl>
                <div>
                  <Clock size={16} weight="bold" />
                  <dt>Carga</dt>
                  <dd>{course.hours}</dd>
                </div>
                <div>
                  <Gauge size={16} weight="bold" />
                  <dt>Nível</dt>
                  <dd>{course.level}</dd>
                </div>
                <div>
                  <CheckCircle size={16} weight="bold" />
                  <dt>Formato</dt>
                  <dd>{course.format}</dd>
                </div>
              </dl>
              <a
                href={
                  course.href ||
                  getWhatsappHref({
                    type: course.category === 'workshop' ? 'workshop' : 'curso',
                    title: course.title,
                  })
                }
                target={course.href ? undefined : '_blank'}
                rel={course.href ? undefined : 'noreferrer'}
                aria-label={`Quero saber mais sobre ${course.title}`}
              >
                Quero saber mais
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkshopsSection() {
  return (
    <section className="workshops-section" id="workshops">
      <div className="section-head">
        <h2>Conteúdo atual. Aplicação imediata.</h2>
        <p>
          Sem enrolação. Sem excesso de teoria. Direto ao que o mercado precisa hoje.
        </p>
      </div>
      <div className="topic-list">
        {workshopTopics.map((topic) => (
          <div className="topic" key={topic}>
            <Lightning size={20} weight="fill" />
            <span>{topic}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TeachersHomeSection() {
  return (
    <section className="teachers-home" id="professores-home">
      <div className="section-head dark">
        <h2>
          Quem ensina
          <span>vive a oficina.</span>
        </h2>
        <p>
          Um time formado por especialistas em diagnóstico, elétrica, injeção, motores,
          gestão técnica e formação de novos reparadores.
        </p>
        <a className="button secondary" href="/professores">
          Conhecer professores
        </a>
      </div>
      <div className="teacher-strip" aria-label="Corpo docente da Rota do Mecânico">
        {teachers.slice(0, 5).map((teacher) => (
          <article className="teacher-mini" key={teacher.name}>
            <img className={`teacher-photo ${teacher.crop}`} src={teacher.image} alt={teacher.alt} loading="lazy" />
            <div>
              <h3>{teacher.name}</h3>
              <p>Especialista em {teacher.shortSpecialty}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="community-band" id="comunidade">
      <div className="community-content">
        <h2>
          Comunidade
          <span>que te move</span>
        </h2>
        <div className="community-points">
          <div>
            <UsersThree size={36} weight="duotone" />
            <h3>Encontros técnicos</h3>
            <p>Aulas especiais, bate-papos e trocas que aproximam.</p>
          </div>
          <div>
            <BookOpenText size={36} weight="duotone" />
            <h3>Grupos de estudo</h3>
            <p>Aprenda junto, tire dúvidas e compartilhe conhecimento.</p>
          </div>
          <div>
            <MapPin size={36} weight="duotone" />
            <h3>Eventos e visitas</h3>
            <p>Workshops, visitas técnicas e experiências reais.</p>
          </div>
          <div>
            <Handshake size={36} weight="duotone" />
            <h3>Networking</h3>
            <p>Conexões que abrem portas dentro e fora da oficina.</p>
          </div>
        </div>
      </div>
      <img
        {...heroSrcSet('/assets/community-workshop.png')}
        alt="Grupo da Rota do Mecânico em oficina técnica"
        loading="lazy"
      />
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="partners-section" id="parceiros">
      <div>
        <h2>Fazem parte da Rota</h2>
        <p>
          Oficinas e empresas que acreditam na formação de profissionais cada vez mais
          preparados, com conexão entre sala, bancada e mercado.
        </p>
      </div>
      <div className="partners-content">
        <div className="partner-list">
          {partners.map((partner) => (
            <figure key={partner.name} className={`partner-card partner-card--${partner.tone}`}>
              <img src={partner.logo} alt={`Logo ${partner.name}`} loading="lazy" />
              <figcaption>{partner.name}</figcaption>
            </figure>
          ))}
        </div>
        <div className="trust-list" aria-label="Diferenciais de confiança">
          {trustItems.map((item) => (
            <div key={item}>
              <CheckCircle size={19} weight="fill" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="manifesto-section" id="manifesto">
      <div>
        <p>A Rota do Mecânico nasceu para unir</p>
        <h2>
          quem compartilha a mesma paixão
          <span>e a vontade de construir uma carreira de verdade.</span>
        </h2>
        <ul className="manifesto-tags">
          <li>Motores</li>
          <li>Ferramentas</li>
          <li>Diagnóstico</li>
          <li>Tecnologia</li>
        </ul>
      </div>
      <p>
        Aqui você encontra cursos, workshops, grupos de estudo e conexão com
        oficinas parceiras.
        <strong>Aqui ninguém caminha sozinho.</strong>
      </p>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="section-head">
        <p className="section-kicker">Perguntas frequentes</p>
        <h2>
          Antes de escolher
          <span>sua rota.</span>
        </h2>
      </div>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary>
              <span>{item.question}</span>
              <CaretDown size={18} weight="bold" aria-hidden="true" />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function LandingFaq({ items }) {
  return (
    <div className="landing-faq-list">
      {items.map(([question, answer], index) => (
        <details key={question} open={index === 0}>
          <summary>
            <span>{question}</span>
            <CaretDown size={18} weight="bold" aria-hidden="true" />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

function CoursePage({ course, whatsappContext }) {
  const teacher = teachers.find((item) => item.name === course.teacherName);

  useEffect(() => {
    document.title = course.metaTitle;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute('content', course.metaDescription);
  }, [course]);

  return (
    <>
      <Header isSubPage whatsappContext={whatsappContext} />
      <main id="main-content">
        <section className="landing-hero">
          <div className="landing-hero-media" aria-hidden="true">
            <img {...heroSrcSet(course.image)} alt="" fetchPriority="high" />
          </div>
          <div className="landing-hero-content">
            <a className="back-link" href="/#cursos">
              Cursos e workshops
            </a>
            <p className="section-kicker">{course.label}</p>
            <h1>{course.heroTitle}</h1>
            <p>{course.heroText}</p>
            <div className="landing-actions">
              <a className="button primary" href={getWhatsappHref(whatsappContext)} target="_blank" rel="noreferrer">
                <WhatsappLogo size={20} weight="bold" />
                {course.finalButton}
              </a>
              <a className="button secondary" href="#conteudo">
                Ver conteúdo
              </a>
            </div>
          </div>
          <div className="landing-proof" aria-label={`Resumo do ${course.label.toLowerCase()}`}>
            <div>
              <Clock size={24} weight="duotone" />
              <span>{course.hours}</span>
            </div>
            <div>
              <Wrench size={24} weight="duotone" />
              <span>{course.format}</span>
            </div>
            <div>
              <Gauge size={24} weight="duotone" />
              <span>{course.level}</span>
            </div>
            <div>
              <Handshake size={24} weight="duotone" />
              <span>{course.partner}</span>
            </div>
          </div>
        </section>

        <section className="landing-intro">
          <div className="section-head">
            <h2>
              {course.problemTitle[0]}
              <span>{course.problemTitle[1]}</span>
            </h2>
          </div>
          <div className="landing-copy">
            {course.problemText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="landing-dark-band">
          <div className="section-head dark">
            <h2>
              {course.solutionTitle[0]}
              <span>{course.solutionTitle[1]}</span>
            </h2>
          </div>
          <div className="landing-highlight-grid">
            {course.highlights.map((highlight) => (
              <div key={highlight}>
                <CheckCircle size={22} weight="fill" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="landing-audience">
          <div className="section-head centered">
            <h2>
              {course.audienceTitle[0]}
              <span>{course.audienceTitle[1]}</span>
            </h2>
          </div>
          <div className="landing-list-grid">
            {course.audience.map((item) => (
              <article key={item}>
                <CheckCircle size={22} weight="fill" />
                <p>{item}</p>
              </article>
            ))}
          </div>
          <p className="landing-note">{course.note}</p>
        </section>

        <section className="landing-modules" id="conteudo">
          <div className="section-head">
            <p className="section-kicker">O que você vai aprender</p>
            <h2>
              Conteúdo técnico
              <span>com aplicação de oficina.</span>
            </h2>
          </div>
          <div className="module-list">
            {course.modules.map((module, index) => (
              <article key={module.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{module.title}</h3>
                  <p>{module.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="landing-practice">
          <img
            {...heroSrcSet(course.practiceImage)}
            alt="Aula prática da Rota do Mecânico em oficina"
            loading="lazy"
          />
          <div>
            <h2>
              {course.practiceTitle[0]}
              <span>{course.practiceTitle[1]}</span>
            </h2>
            <p>{course.practiceText}</p>
            <dl className="landing-info">
              <div>
                <dt>Carga horária</dt>
                <dd>{course.hours}</dd>
              </div>
              <div>
                <dt>Formato</dt>
                <dd>{course.format}</dd>
              </div>
              <div>
                <dt>Local</dt>
                <dd>{course.location}</dd>
              </div>
              <div>
                <dt>Investimento</dt>
                <dd>{course.investment}</dd>
              </div>
            </dl>
          </div>
        </section>

        {teacher && (
          <section className="landing-teacher">
            <div>
              <h2>
                {teacher.name}
                <span>{course.teacherTagline}</span>
              </h2>
              <p>{teacher.formation}</p>
              <p>{teacher.experience}</p>
              <p>{teacher.contribution}</p>
              <div className="tag-list">
                {teacher.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <img className={`teacher-photo ${teacher.crop}`} src={teacher.image} alt={teacher.alt} loading="lazy" />
          </section>
        )}

        <section className="landing-faq-section">
          <div className="section-head">
            <p className="section-kicker">Perguntas frequentes</p>
            <h2>
              Antes de entrar
              <span>para a próxima turma.</span>
            </h2>
          </div>
          <LandingFaq items={course.faq} />
        </section>

        <section className="landing-final">
          <div>
            <h2>
              {course.finalTitle[0]}
              <span>{course.finalTitle[1]}</span>
            </h2>
            <p>{course.finalText}</p>
          </div>
          <a className="button primary" href={getWhatsappHref(whatsappContext)} target="_blank" rel="noreferrer">
            <WhatsappLogo size={20} weight="bold" />
            {course.finalButton}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FinalCta({ compact = false, whatsappContext }) {
  const [sent, setSent] = useState(false);
  const coursesHref = compact ? '/#cursos' : '#cursos';

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className={compact ? 'final-cta compact' : 'final-cta'} id="contato">
      <div>
        <h2>
          Escolha sua rota e faça parte
          <span>da comunidade dos reparadores.</span>
        </h2>
        <p>Fale com a equipe, tire suas dúvidas e descubra o próximo passo da sua jornada.</p>
        <div className="cta-actions">
          <a className="button primary" href={getWhatsappHref(whatsappContext)} target="_blank" rel="noreferrer">
            <WhatsappLogo size={20} weight="bold" />
            Falar com a equipe
          </a>
          <a className="button secondary" href={coursesHref}>
            Ver cursos
          </a>
        </div>
      </div>
      <form className="lead-form" id="lead-form" onSubmit={handleSubmit}>
        <h3>Entrar na lista de interesse</h3>
        <label>
          Nome
          <input name="nome" placeholder="Seu nome" required />
        </label>
        <label>
          E-mail
          <input name="email" type="email" placeholder="voce@email.com" required />
        </label>
        <label>
          WhatsApp
          <input name="whatsapp" type="tel" placeholder="(00) 00000-0000" inputMode="tel" />
        </label>
        <label>
          Interesse
          <select name="interesse" defaultValue="Cursos presenciais">
            <option>Cursos presenciais</option>
            <option>Workshops técnicos</option>
            <option>Comunidade</option>
            <option>Oficinas parceiras</option>
          </select>
          <CaretDown size={18} weight="bold" aria-hidden="true" />
        </label>
        <label>
          Conte um pouco sobre seu objetivo
          <textarea name="objetivo" placeholder="Quero começar do zero, me atualizar, levar treinamento para oficina..." />
        </label>
        <button className="button primary" type="submit">
          Enviar interesse
        </button>
        {sent && (
          <p className="form-success" role="status" aria-live="polite">
            <ShieldCheck size={18} weight="fill" />
            Interesse registrado. A próxima etapa é o contato da equipe.
          </p>
        )}
      </form>
    </section>
  );
}

function TeachersPage({ whatsappContext }) {
  return (
    <>
      <Header isSubPage isTeachersPage whatsappContext={whatsappContext} />
      <main id="main-content">
        <section className="teachers-hero">
          <div>
            <h1>
              Professores
              <span>e especializações</span>
            </h1>
            <p>
              A Rota do Mecânico reúne instrutores com vivência real em oficina, montadoras,
              concessionárias e centros de diagnóstico para transformar experiência técnica
              em formação prática.
            </p>
            <div className="teacher-hero-actions">
              <a className="button primary" href="#perfis">
                Ver perfis
              </a>
              <a className="button secondary" href="/#cursos">
                Ver cursos
              </a>
            </div>
          </div>
          <div className="teacher-hero-grid" aria-label="Fotos dos professores">
            {teachers.map((teacher) => (
              <img className={`teacher-photo ${teacher.crop}`} key={teacher.name} src={teacher.image} alt={teacher.alt} />
            ))}
          </div>
        </section>

        <section className="teacher-model">
          <div className="section-head centered">
            <h2>
              Experiência de mercado
              <span>organizada para a prática.</span>
            </h2>
            <p>
              Cada professor entra na jornada com uma frente técnica clara, criando uma trilha
              de aprendizagem que conecta base, diagnóstico, sistemas e rotina de oficina.
            </p>
          </div>
          <div className="model-grid">
            <article>
              <BookOpenText size={34} weight="duotone" />
              <h3>Base técnica</h3>
              <p>Fundamentos ensinados com linguagem acessível para quem está começando.</p>
            </article>
            <article>
              <Gauge size={34} weight="duotone" />
              <h3>Diagnóstico aplicado</h3>
              <p>Método para testar, interpretar falhas e tomar decisões com segurança.</p>
            </article>
            <article>
              <Wrench size={34} weight="duotone" />
              <h3>Vivência de oficina</h3>
              <p>Casos reais, processos de reparação e repertório técnico de quem atua no mercado.</p>
            </article>
          </div>
        </section>

        <section className="teachers-directory" id="perfis">
          <div className="section-head">
            <h2>
              Especialistas
              <span>da Rota do Mecânico.</span>
            </h2>
          </div>
          <div className="teacher-profile-list">
            {teachers.map((teacher) => (
              <article className="teacher-profile" key={teacher.name}>
                <img className={`teacher-photo ${teacher.crop}`} src={teacher.image} alt={teacher.alt} loading="lazy" />
                <div className="teacher-profile-body">
                  <h3 className="teacher-specialty">
                    <span className="teacher-name-mark">Professor {teacher.name}</span>
                    <span className="teacher-teaches">{teacher.specialty.toLowerCase()}.</span>
                  </h3>
                  <p>{teacher.formation}</p>
                  <p>{teacher.experience}</p>
                  <p>{teacher.contribution}</p>
                  <div className="tag-list">
                    {teacher.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <FinalCta compact whatsappContext={whatsappContext} />
      </main>
      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Brand />
      <div>
        <strong>Cursos presenciais</strong>
        <span>Aprendizado prático de verdade.</span>
      </div>
      <div>
        <strong>Comunidade</strong>
        <span>Você não caminha sozinho.</span>
      </div>
      <div>
        <strong>Conexão com o mercado</strong>
        <span>Mais preparo. Mais oportunidades.</span>
      </div>
    </footer>
  );
}

function CoursesIndexPage({ whatsappContext }) {
  useEffect(() => {
    document.title = 'Cursos e Workshops | Rota do Mecânico';
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      'content',
      'Todos os cursos, workshops e experiências da Rota do Mecânico: diagnóstico avançado, Rede CAN, injeção eletrônica, multímetro, câmbio automático e Auto Divas Experience.',
    );
  }, []);

  return (
    <>
      <Header isSubPage whatsappContext={whatsappContext} />
      <main id="main-content">
        <section className="landing-hero catalog-hero">
          <div className="landing-hero-media" aria-hidden="true">
            <img {...heroSrcSet('/assets/course-diagnostics.png')} alt="" fetchPriority="high" />
          </div>
          <div className="landing-hero-content">
            <a className="back-link" href="/">
              Início
            </a>
            <h1>
              Escolha sua
              <span>próxima rota.</span>
            </h1>
            <p>
              Cursos, workshops e experiências práticas da Rota do Mecânico. Escolha um tema
              e veja todos os detalhes na página da oferta.
            </p>
          </div>
        </section>
        <CoursesSection />
        <FinalCta whatsappContext={whatsappContext} />
      </main>
      <Footer />
    </>
  );
}

export function App() {
  const pathname = window.location.pathname.replace(/\/$/, '');
  const isTeachersPage = pathname === '/professores';
  const isCoursesIndex = pathname === '/cursos';
  const coursePage = getCoursePageBySlug(pathname);
  const whatsappContext = getPageWhatsappContext(pathname);

  if (isCoursesIndex) {
    return (
      <>
        <a className="skip-link" href="#main-content">
          Ir para o conteúdo
        </a>
        <CoursesIndexPage whatsappContext={whatsappContext} />
      </>
    );
  }

  if (coursePage) {
    return (
      <>
        <a className="skip-link" href="#main-content">
          Ir para o conteúdo
        </a>
        <CoursePage course={coursePage} whatsappContext={whatsappContext} />
      </>
    );
  }

  if (isTeachersPage) {
    return (
      <>
        <a className="skip-link" href="#main-content">
          Ir para o conteúdo
        </a>
        <TeachersPage whatsappContext={whatsappContext} />
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo
      </a>
      <Header whatsappContext={whatsappContext} />
      <main id="main-content">
        <Hero />
        <CommunityIntro />
        <RoutesSection />
        <CoursesSection />
        <WorkshopsSection />
        <TeachersHomeSection />
        <CommunitySection />
        <PartnersSection />
        <ManifestoSection />
        <FaqSection />
        <FinalCta whatsappContext={whatsappContext} />
      </main>
      <Footer />
    </>
  );
}
