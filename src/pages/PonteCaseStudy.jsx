import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel.jsx'
import ThemeToggle from '../components/ThemeToggle.jsx'
import '../App.css'
import './CaseStudy.css'

import prontoo from '../assets/case-ponte/prontoo.jpg'
import base from '../assets/case-ponte/base.jpg'
import torreApoio from '../assets/case-ponte/torre_apoio.jpg'
import ponte from '../assets/case-ponte/ponte.jpg'
import detalheDobradica from '../assets/case-ponte/detalhe_dobradica.jpeg'

const fotosDoPrototipo = [
  { src: prontoo, alt: 'Visão geral do protótipo da ponte elevatória finalizado', caption: 'Protótipo finalizado: ponte, torres de apoio e fiação de controle.' },
  { src: base, alt: 'Base da ponte em madeira', caption: 'Base principal em madeira, 105cm × 35cm.' },
  { src: torreApoio, alt: 'Torre de suporte da ponte', caption: 'Torre de apoio, 21cm de altura.' },
  { src: ponte, alt: 'A estrutura da ponte articulada', caption: 'Ponte articulada, 82cm × 15cm, com dobradiças metálicas.' },
  { src: detalheDobradica, alt: 'Detalhe em close das dobradiças e estrutura de elevação', caption: 'Detalhe das dobradiças e do mecanismo de elevação.' },
]

const componentes = [
  ['Arduino Uno', 'Controlador principal do sistema'],
  ['4x Motor de passo 28BYJ-48 (5V)', 'Responsáveis pelo movimento de elevação'],
  ['4x Módulo ULN2003', 'Driver para controle dos motores'],
  ['Fonte externa 5V', 'Alimentação dos motores'],
  ['2x Botões tácteis', 'Controle manual de subida e descida'],
]

const estados = [
  ['Repouso', 'Posição intermediária, sem movimento em andamento.'],
  ['Fechada', 'Ponte totalmente baixada, posição de tempo acumulado igual a 0.'],
  ['Aberta', 'Ponte totalmente elevada, posição de tempo acumulado no máximo (13 segundos).'],
]

function PonteCaseStudy() {
  return (
    <>
      <header className="nav">
        <Link to="/" className="nav__brand">Gabriel Ferreira</Link>
        <nav className="nav__links">
          <Link to="/">Início</Link>
          <a href="https://blog-facul.vercel.app" target="_blank" rel="noreferrer">Site do projeto</a>
          <a href="https://github.com/gsferreiira/blog_facul" target="_blank" rel="noreferrer">GitHub</a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="cs">
        <section className="cs-hero">
          <p className="cs-hero__eyebrow">Case de projeto · Sistemas embarcados</p>
          <h1>Ponte Elevatória Automatizada</h1>
          <p className="cs-hero__pitch">
            Protótipo de ponte elevatória com 4 motores de passo sincronizados, controlado por
            Arduino, demonstrando na prática como corrente elétrica e campo magnético geram
            movimento mecânico.
          </p>
          <div className="cs-hero__tags">
            <span className="tag">Arduino</span>
            <span className="tag">C++</span>
            <span className="tag">Eletromagnetismo</span>
          </div>
          <p className="cs-hero__note">
            Projeto acadêmico em grupo, desenvolvido nas disciplinas de Modelagem e Simulação de
            Sistemas Elétricos e Magnéticos e de Fenômenos Elétricos, Magnéticos e Oscilatórios
            (Engenharia de Software, UNICURITIBA).
          </p>
          <Carousel slides={fotosDoPrototipo} />
        </section>

        <section className="cs-section">
          <h2>O problema</h2>
          <p>
            A proposta da disciplina era demonstrar, na prática, como campos magnéticos produzidos
            por corrente elétrica geram movimento mecânico. Em vez de um experimento de bancada
            simples, construí um protótipo funcional de ponte elevatória: estrutura em madeira, tubos
            de PVC e dobradiças metálicas, com o movimento feito por 4 motores de passo controlados
            por Arduino.
          </p>
        </section>

        <section className="cs-section">
          <h2>Estrutura mecânica</h2>
          <p>
            Base principal em madeira (105cm × 35cm), torre de apoio (21cm de altura) e ponte
            articulada (82cm × 15cm) com dobradiças metálicas. O maior desafio mecânico foi equilibrar
            rigidez e peso: uma estrutura rígida o bastante pra não flexionar durante o movimento, mas
            leve o bastante pra não exigir torque excessivo dos motores. A solução foi madeira de
            densidade média reforçada com cantoneiras metálicas nas junções.
          </p>
        </section>

        <section className="cs-section">
          <h2>Eletrônica</h2>
          <p>
            Quatro motores de passo (dois de cada lado da ponte) garantem torque suficiente e
            movimento sincronizado, todos acionados pelo mesmo Arduino.
          </p>
          <ul className="cs-list">
            {componentes.map(([nome, funcao]) => (
              <li key={nome}><strong>{nome}.</strong> {funcao}</li>
            ))}
          </ul>
          <p className="cs-note-inline">
            Nota de projeto: a primeira versão usava um ESP32, mas problemas de compatibilidade com
            as bibliotecas dos motores de passo levaram à migração pro Arduino Uno, que se mostrou
            mais estável pra esse controle.
          </p>
        </section>

        <section className="cs-section">
          <h2>Lógica de programação</h2>
          <p>
            O controle é feito por uma máquina de estados simples baseada em tempo acumulado (não em
            sensores de posição): o sistema sabe se a ponte está aberta, fechada ou em algum ponto
            intermediário só pelo tempo total de acionamento dos motores.
          </p>
          <ol className="cs-list cs-list--numbered">
            {estados.map(([nome, desc]) => (
              <li key={nome}><strong>{nome}.</strong> {desc}</li>
            ))}
          </ol>
          <p>
            Os quatro motores recebem o mesmo sinal de passo ao mesmo tempo (full-step, pra mais
            torque), e qualquer botão pressionado durante o movimento funciona como parada de
            emergência imediata:
          </p>
          <pre className="cs-code">
{`// Corte de emergencia: qualquer botao interrompe o movimento na hora
if (emMovimento && (apertouHorario || apertouAnti)) {
  emMovimento = false;
  direcaoAtual = 0;
  desligarBobinas();
}

// Move os motores passo a passo, os 4 sincronizados
if (emMovimento && (agora - ultimoPassoTime >= intervaloPassoMs)) {
  ultimoPassoTime = agora;
  currentStepIndex += direcaoAtual;
  if (currentStepIndex > 3) currentStepIndex = 0;
  if (currentStepIndex < 0) currentStepIndex = 3;
  aplicarPasso(currentStepIndex);
}`}
          </pre>
          <p>
            O código completo está no{' '}
            <a href="https://github.com/gsferreiira/blog_facul" target="_blank" rel="noreferrer">
              repositório do projeto
            </a>.
          </p>
        </section>

        <section className="cs-section">
          <h2>Resultados</h2>
          <ul className="cs-list">
            <li><strong>Torque insuficiente com 2 motores.</strong> Resolvido duplicando pra 4 motores, dois de cada lado.</li>
            <li><strong>Incompatibilidade do ESP32</strong> com as bibliotecas de motor de passo. Resolvido migrando pro Arduino Uno.</li>
            <li><strong>Falta de sincronismo entre motores.</strong> Resolvido enviando o mesmo passo pros 4 motores ao mesmo tempo, no mesmo laço de controle.</li>
          </ul>
          <p>
            No fim, a ponte abre e fecha de forma estável, com torque suficiente pro movimento suave e
            posição previsível pelo controle por tempo acumulado.
          </p>
        </section>

        <section className="cs-section">
          <h2>Melhorias futuras</h2>
          <ul className="cs-list">
            <li>Sensores de fim de curso, pra posicionamento mais preciso do que só o controle por tempo.</li>
            <li>Rampas de aceleração e desaceleração, pra um movimento mais suave.</li>
            <li>Controle remoto via Bluetooth ou Wi-Fi.</li>
          </ul>
        </section>

        <section className="cs-section cs-section--end">
          <Link to="/" className="btn btn--ghost">Voltar pro início</Link>
          <a className="btn btn--primary" href="https://blog-facul.vercel.app" target="_blank" rel="noreferrer">
            Ver site do projeto
          </a>
        </section>
      </main>
    </>
  )
}

export default PonteCaseStudy
