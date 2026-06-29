import { useMemo, useState } from 'react';
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
  ['Cursos', '#cursos'],
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
    type: 'Curso',
    title: 'Diagnóstico Avançado Completo',
    hours: '27 horas',
    level: 'Intermediário / Avançado',
    format: 'Presencial e prático',
    category: 'avancado',
    image: '/assets/course-diagnostics.png',
    text: 'Método e segurança para interpretar falhas com mais precisão.',
  },
  {
    type: 'Curso',
    title: 'Multímetro',
    hours: '10 horas',
    level: 'Iniciante',
    format: 'Base técnica',
    category: 'base',
    image: '/assets/hero-workshop.png',
    text: 'Base essencial para medições, testes e diagnóstico elétrico.',
  },
  {
    type: 'Curso',
    title: 'Injeção Eletrônica',
    hours: '120 horas',
    level: 'Intermediário',
    format: 'Presencial e prático',
    category: 'base',
    image: '/assets/community-workshop.png',
    text: 'Fundamentos e prática para entender sistemas modernos de alimentação e controle.',
  },
  {
    type: 'Workshop',
    title: 'Rede CAN na Prática',
    hours: '20 horas',
    level: 'Intermediário',
    format: 'Workshop prático',
    category: 'workshop',
    image: '/assets/course-diagnostics.png',
    text: 'Diagnóstico de comunicação automotiva para veículos modernos.',
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

const partners = ['Tecno Car', 'MWH Performance', 'Garage 92', 'CCV'];

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

const teachers = [
  {
    name: 'Jonas Santos',
    specialty: 'Especialista em diagnóstico automotivo avançado',
    shortSpecialty: 'Diagnóstico avançado',
    image: '/assets/professores/jonas-portrait.jpeg',
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
    image: '/assets/professores/marlon-portrait.jpeg',
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
    image: '/assets/professores/andre-portrait.jpeg',
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
    image: '/assets/professores/silas-portrait.jpeg',
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
    image: '/assets/professores/sylvio-portrait.jpeg',
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

function Header({ isTeachersPage = false }) {
  const [open, setOpen] = useState(false);
  const contactHref = isTeachersPage ? '/#contato' : '#contato';
  const menuLabel = open ? 'Fechar menu' : 'Abrir menu';

  return (
    <header className="site-header">
      <Brand />
      <nav id="primary-navigation" className={open ? 'nav is-open' : 'nav'} aria-label="Navegação principal">
        {navItems.map(([item, href]) => (
          <a
            key={item}
            href={isTeachersPage && href.startsWith('#') ? `/${href}` : href}
            onClick={() => setOpen(false)}
            aria-current={href === '/professores' && isTeachersPage ? 'page' : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={contactHref}>
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
        <img src="/assets/hero-workshop.png" alt="" fetchPriority="high" />
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
            <img src={audience.image} alt="" loading="lazy" />
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
        <p className="section-kicker">A rota que te leva mais longe</p>
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
        <p className="section-kicker">Cursos e workshops</p>
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
            <img src={course.image} alt="" loading="lazy" />
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
              <a href="#contato" aria-label={`Quero saber mais sobre ${course.title}`}>
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
        <p className="section-kicker">Workshops da Rota</p>
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
        <p className="section-kicker">Professores da Rota</p>
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
      <img src="/assets/community-workshop.png" alt="Grupo da Rota do Mecânico em oficina técnica" loading="lazy" />
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="partners-section" id="parceiros">
      <div>
        <p className="section-kicker">Parceiros e prova de realidade</p>
        <h2>Fazem parte da Rota</h2>
        <p>
          Oficinas e empresas que acreditam na formação de profissionais cada vez mais
          preparados, com conexão entre sala, bancada e mercado.
        </p>
      </div>
      <div className="partners-content">
        <div className="partner-list">
          {partners.map((partner) => (
            <span key={partner}>{partner}</span>
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
        <p>A mecânica vai muito além das ferramentas.</p>
        <h2>
          Ela transforma vidas,
          <span>abre oportunidades e constrói futuro.</span>
        </h2>
      </div>
      <p>
        A Rota organiza esse caminho em uma comunidade que une cursos, workshops,
        encontros, grupos de estudo e conexões com oficinas parceiras.
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

function FinalCta({ compact = false }) {
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
          <a className="button primary" href="#lead-form">
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

function TeachersPage() {
  return (
    <>
      <Header isTeachersPage />
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
            <p className="section-kicker">Modelo de formação</p>
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
            <p className="section-kicker">Corpo docente</p>
            <h2>
              Especialistas
              <span>da Rota do Mecânico.</span>
            </h2>
          </div>
          <div className="teacher-profile-list">
            {teachers.map((teacher) => (
              <article className="teacher-profile" key={teacher.name}>
                <img className={`teacher-photo ${teacher.crop}`} src={teacher.image} alt={teacher.alt} />
                <div className="teacher-profile-body">
                  <p className="teacher-specialty">
                    <span className="teacher-name-mark">Professor {teacher.name}</span>
                    <span className="teacher-teaches">{teacher.specialty.toLowerCase()}.</span>
                  </p>
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
        <FinalCta compact />
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

export function App() {
  const isTeachersPage = window.location.pathname.replace(/\/$/, '') === '/professores';

  if (isTeachersPage) {
    return (
      <>
        <a className="skip-link" href="#main-content">
          Ir para o conteúdo
        </a>
        <TeachersPage />
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Ir para o conteúdo
      </a>
      <Header />
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
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
