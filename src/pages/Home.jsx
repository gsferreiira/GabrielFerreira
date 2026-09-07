import { Link } from 'react-router-dom'
import fotoGabriel from '../assets/ferreira.jpg'
import '../App.css'

const projetos = [
  {
    nome: 'Agenvix',
    subtitulo: 'SaaS de Agendamento',
    descricao:
      'SaaS multi-tenant de agendamentos para barbearias, salões e clínicas, idealizado, desenvolvido e mantido sozinho. Em produção, com pagamentos via webhook (com tratamento de idempotência), autenticação JWT, isolamento de dados por tenant, testes automatizados e CI/CD.',
    tags: ['PHP', 'MySQL', 'JWT', 'React', 'Docker'],
    link: 'https://www.agenvix.com.br',
    linkLabel: 'Ver site',
    caseStudy: '/projetos/agenvix',
  },
  {
    nome: 'Sistema de Gestão de Patrimônio',
    subtitulo: 'Instituto Paranaense de Desenvolvimento Educacional (FUNDEPAR)',
    descricao:
      'Sistema interno de controle de patrimônio, desenvolvido sozinho a partir de uma necessidade simples de cadastro nas movimentações que era feita via planilha do Excel. Hoje cobre cadastro, movimentação entre setores e notificações, em uso todos os setores da instituição. Migração de Supabase para PostgreSQL autogerenciado.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Docker'],
    link: null,
    linkLabel: 'Projeto interno',
    caseStudy: '/projetos/patrimonio',
  },
]

const projetosExtra = [
  {
    nome: 'Bebedouro Inteligente',
    descricao: 'Projeto acadêmico de dispensação de água por peso e aproximação, com ESP32, sensor ultrassônico, um display oled e célula de carga.',
    tags: ['ESP32', 'C++', 'React'],
    link: 'https://bebedouro-inteligente.vercel.app',
    linkLabel: 'Ver site',
    caseStudy: '/projetos/bebedouro',
  },
  {
    nome: 'Ponte Elevatória Automatizada',
    descricao: 'Projeto acadêmico de automação com 4 motores de passo sincronizados, controlados por Arduino.',
    tags: ['Arduino', 'C++', 'Eletromagnetismo'],
    link: 'https://blog-facul.vercel.app',
    linkLabel: 'Ver site',
    caseStudy: '/projetos/ponte',
  },
]

const skills = [
  { categoria: 'Linguagens', itens: 'Java, JavaScript (ES6+), TypeScript, PHP' },
  { categoria: 'Backend', itens: 'Node.js, Express, PHP, APIs REST, JWT' },
  { categoria: 'Frontend', itens: 'React, HTML5, CSS3' },
  { categoria: 'Banco de Dados', itens: 'MySQL, PostgreSQL' },
  { categoria: 'Ferramentas', itens: 'Git, GitHub, Docker, Postman'},
]

function Home() {
  return (
    <>
      <header className="nav">
        <span className="nav__brand">Gabriel Ferreira</span>
        <nav className="nav__links">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#skills">Skills</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src={fotoGabriel} alt="Gabriel Ferreira" className="hero__avatar" />
          <h1>Gabriel Ferreira dos Santos</h1>
          <p className="hero__tagline">Desenvolvedor Backend</p>
          <p className="hero__pitch">
            Construo sistemas de backend do zero. API, banco de dados, autenticação e infraestrutura
            com foco em entender o problema real antes de escrever a primeira linha de código.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projetos">Ver projetos</a>
            <a className="btn btn--ghost" href="#contato">Contato</a>
          </div>
        </section>

        <section id="sobre" className="section">
          <h2 className="section__title">Sobre</h2>
          <p className="section__text">
            Comecei na área de tecnologia atuando de instrutor de cursos como: HTML5, CSS, Javascript, Python, PHP, Excel, PowerBI, entre outros. Depois atuei como suporte técnico completo na manutenção de equipamentos,
            redes, cabeamento e atendimento ao usuário. A partir de uma necessidade simples de controlar a movimentação de bens da instituição onde o trabalho que era feito via planilha Excel,
            acabei assumindo sozinho o desenvolvimento de um sistema completo que envolvia movimentações desses bens entre setores, cadastro de equipamentos, salas e usuários, e hoje meu foco é construir sistemas estruturados com prósito. Estou cursando Engenharia
            de Software na UNICURITIBA no período noturno.
          </p>
        </section>

        <section id="projetos" className="section">
          <h2 className="section__title">Projetos</h2>
          <div className="cards">
            {projetos.map((p) => (
              <article className="card" key={p.nome}>
                <h3 className="card__title">{p.nome}</h3>
                <p className="card__subtitle">{p.subtitulo}</p>
                <p className="card__text">{p.descricao}</p>
                <div className="card__tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="card__links">
                  {p.caseStudy && (
                    <Link className="card__link" to={p.caseStudy}>Ver detalhes</Link>
                  )}
                  {p.link ? (
                    <a className="card__link" href={p.link} target="_blank" rel="noreferrer">
                      {p.linkLabel}
                    </a>
                  ) : (
                    <span className="card__link card__link--muted">{p.linkLabel}</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <h3 className="section__subtitle">Outros projetos</h3>
          <div className="cards cards--compact">
            {projetosExtra.map((p) => (
              <article className="card card--compact" key={p.nome}>
                <h3 className="card__title">{p.nome}</h3>
                <p className="card__text">{p.descricao}</p>
                <div className="card__tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <div className="card__links">
                  {p.caseStudy && (
                    <Link className="card__link" to={p.caseStudy}>Ver detalhes</Link>
                  )}
                  <a className="card__link" href={p.link} target="_blank" rel="noreferrer">
                    {p.linkLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section__title">Skills</h2>
          <div className="skills">
            {skills.map((s) => (
              <div className="skills__row" key={s.categoria}>
                <span className="skills__categoria">{s.categoria}</span>
                <span className="skills__itens">{s.itens}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="section section--contato">
          <h2 className="section__title">Contato</h2>
          <p className="section__text">Vamos conversar sobre uma oportunidade? Me chama por qualquer um dos canais abaixo.</p>
          <div className="contato__links">
            <a className="btn btn--primary" href="mailto:gsferreiira@gmail.com">E-mail</a>
            <a className="btn btn--ghost" href="https://www.linkedin.com/in/gsferreiiraa" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn--ghost" href="https://github.com/gsferreiira" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

    </>
  )
}

export default Home
