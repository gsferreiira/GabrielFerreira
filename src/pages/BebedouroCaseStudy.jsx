import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel.jsx'
import Figure from '../components/Figure.jsx'
import ThemeToggle from '../components/ThemeToggle.jsx'
import '../App.css'
import './CaseStudy.css'

import estruturaFrontal from '../assets/case-bebedouro/estrutura-frontal.jpg'
import estruturaMontagem from '../assets/case-bebedouro/estrutura-montagem.jpg'
import sensorHcsr04 from '../assets/case-bebedouro/sensor-hcsr04.jpg'
import hx711 from '../assets/case-bebedouro/hx711-celula.jpg'
import esp32 from '../assets/case-bebedouro/esp32-devkit.jpg'
import displayOled from '../assets/case-bebedouro/display-oled.jpg'

const componentes = [
  ['ESP32 Dev Kit', 'Controlador principal, roda a máquina de estados'],
  ['2x Sensor ultrassônico HC-SR04', 'Detecção e classificação do recipiente (copo/garrafa)'],
  ['Célula de carga + HX711', 'Leitura de peso para o corte da bomba'],
  ['Mini bomba RS385', 'Bombeamento da água do reservatório'],
  ['Módulo relé', 'Aciona a bomba de 12V a partir do sinal do ESP32'],
  ['Regulador de tensão (buck)', 'Converte 12V (bomba) para 5V (lógica/sensores)'],
  ['Display OLED I2C', 'Feedback visual do estado do sistema'],
]

const fotosDoPrototipo = [
  {
    src: estruturaFrontal,
    alt: 'Protótipo montado do bebedouro inteligente, mostrando os sensores ultrassônicos, display OLED e a bandeja com a célula de carga',
    caption: 'Protótipo montado: sensores, display OLED e bandeja sobre a célula de carga.',
  },
  {
    src: estruturaMontagem,
    alt: 'Estrutura em MDF durante a montagem, com o pote de água, a bomba e a fiação visível',
    caption: 'Montagem inicial: bomba, reservatório e fiação de teste.',
  },
  {
    src: displayOled,
    alt: 'Display OLED fixado na coluna de MDF do bebedouro',
    caption: 'Display OLED: feedback visual do estado atual do sistema.',
  },
]

const estados = [
  ['Aguardando', 'Sensores ultrassônicos monitoram a bandeja. Sensor inferior acionado identifica copo; os dois sensores acionados identificam garrafa.'],
  ['Tipo bloqueado', 'Assim que um recipiente é identificado, o tipo é travado: trocar o recipiente no meio do ciclo não altera mais o alvo de peso.'],
  ['Tara automática', 'O peso inicial do recipiente é capturado; o alvo passa a ser peso inicial mais delta (20g para copo, 45g para garrafa).'],
  ['Enchendo', 'Bomba ligada via relé. A cada leitura do HX711 (média móvel de 4 amostras), o peso atual é comparado ao alvo.'],
  ['Corte por peso', 'Bomba desliga assim que o peso atinge o alvo. Se o peso cair 5g abaixo do inicial (recipiente retirado), a bomba para na hora.'],
  ['Concluído', 'O sistema retorna sozinho ao estado Aguardando, sem precisar de reset manual.'],
]

function BebedouroCaseStudy() {
  return (
    <>
      <header className="nav">
        <Link to="/" className="nav__brand">Gabriel Ferreira</Link>
        <nav className="nav__links">
          <Link to="/">Início</Link>
          <a href="https://bebedouro-inteligente.vercel.app" target="_blank" rel="noreferrer">Site do projeto</a>
          <a href="https://github.com/gsferreiira/bebedouro-inteligente" target="_blank" rel="noreferrer">GitHub</a>
          <ThemeToggle />
        </nav>
      </header>

      <main className="cs">
        <section className="cs-hero">
          <p className="cs-hero__eyebrow">Case de projeto · Sistemas embarcados</p>
          <h1>Bebedouro Inteligente</h1>
          <p className="cs-hero__pitch">
            Protótipo de dispensação automatizada de água por peso: em vez de contar segundos, o
            sistema pesa o copo em tempo real e corta a bomba no grama certo, sem estimativas e sem
            transbordar.
          </p>
          <div className="cs-hero__tags">
            <span className="tag">ESP32</span>
            <span className="tag">C++</span>
            <span className="tag">React</span>
            <span className="tag">Vite</span>
          </div>
          <p className="cs-hero__note">
            Projeto acadêmico em dupla (Engenharia de Software, UNICURITIBA), desenvolvido com
            Rodriggo Miranda, sob orientação do Prof. Rubem Matimoto Koide.
          </p>
          <Carousel slides={fotosDoPrototipo} />
        </section>

        <section className="cs-section">
          <h2>O problema</h2>
          <p>
            Bebedouros convencionais liberam água por um tempo fixo ou até serem interrompidos, o mesmo intervalo para um copo
            pequeno ou uma garrafa grande, o que gera desperdício ou transbordamento. Este projeto
            propõe o oposto: um sistema que identifica o recipiente, faz a tara automática do peso
            inicial e libera a água até atingir exatamente a quantidade-alvo, cortando a bomba pelo
            peso, nunca pelo tempo.
          </p>
          <p>
            Restrição real do projeto: o sistema precisa continuar respondendo a botões e sensores
            enquanto enche, por isso toda a lógica roda de forma não bloqueante (sem <code>delay()</code>).
          </p>
        </section>

        <section className="cs-section">
          <h2>Estrutura mecânica</h2>
          <p>
            Chassi em MDF, com uma coluna vertical que abriga a eletrônica e os sensores, e uma base
            horizontal que serve de bandeja para o recipiente, apoiada diretamente sobre a célula de
            carga.
          </p>
          <p className="cs-note-inline">Veja o protótipo montado na galeria de fotos, logo no início da página.</p>
        </section>

        <section className="cs-section">
          <h2>Eletrônica</h2>
          <p>
            Cada sensor tem um papel específico na cadeia de decisão: os ultrassônicos detectam
            presença e classificam o tipo de recipiente, a célula de carga mede o peso em tempo real,
            e o relé isola a bomba de 12V do sinal lógico de 3,3V do ESP32.
          </p>
          <ul className="cs-list">
            {componentes.map(([nome, funcao]) => (
              <li key={nome}><strong>{nome}.</strong> {funcao}</li>
            ))}
          </ul>
          <div className="cs-gallery">
            <Figure src={sensorHcsr04} alt="Sensor ultrassônico HC-SR04 com fios de eco e trigger" caption="Sensor ultrassônico HC-SR04." />
            <Figure src={hx711} alt="Módulo amplificador HX711 fixado na estrutura" caption="Amplificador HX711 da célula de carga." />
            <Figure src={esp32} alt="Placa ESP32 Dev Kit usada como controlador final" caption="ESP32 Dev Kit, o controlador do sistema." />
          </div>
          <p className="cs-note-inline">
            Nota de projeto: os pinos ECHO dos HC-SR04 operam em 5V e precisaram de um divisor
            resistivo (5V para 3,3V) antes de chegar às entradas do ESP32, que não tolera 5V direto
            nos GPIOs.
          </p>
        </section>

        <section className="cs-section">
          <h2>Lógica de funcionamento</h2>
          <p>
            Todo o ciclo, da detecção do recipiente até o corte da bomba, é controlado por uma máquina
            de estados baseada em <code>millis()</code>, nunca em <code>delay()</code>, para que o
            sistema continue lendo sensores e botões durante o enchimento.
          </p>
          <ol className="cs-list cs-list--numbered">
            {estados.map(([nome, desc]) => (
              <li key={nome}><strong>{nome}.</strong> {desc}</li>
            ))}
          </ol>
        </section>

        <section className="cs-section">
          <h2>Calibração e aprendizados</h2>
          <p>
            Boa parte da engenharia real aconteceu depois que o código "funcionava no papel", nos
            ajustes feitos ao ver o protótipo se comportar na bancada.
          </p>
          <ul className="cs-list">
            <li>Alvo de garrafa reduzido de 50g para 45g após observarmos transbordamento nos primeiros testes.</li>
            <li>Reset do contador de estado não pode viver dentro do laço do estado Aguardando: isso impedia a detecção de recipientes.</li>
            <li>Botão com dois comportamentos: clique curto pausa/retoma o ciclo; segurar por 3 segundos força um reset completo do sistema.</li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>Firmware</h2>
          <p>Trecho ilustrativo da lógica de corte por peso, em C++ para ESP32:</p>
          <pre className="cs-code">
{`void atualizarEnchimento() {
  if (millis() - ultimaLeitura >= INTERVALO_LEITURA) {
    ultimaLeitura = millis();
    pesoAtual = balanca.get_units(1);
    bufferMedia[indiceBuffer++ % 4] = pesoAtual;
    pesoAtual = mediaMovel(bufferMedia, 4);

    // Seguranca: recipiente removido durante o ciclo
    if (pesoAtual < pesoInicial - 5.0) {
      pararBomba();
      estadoAtual = AGUARDANDO;
      return;
    }

    // Corte por peso, sem timeout de tempo
    if (pesoAtual >= pesoInicial + pesoAlvo) {
      pararBomba();
      estadoAtual = CONCLUIDO;
    }
  }
}`}
          </pre>
          <p>
            O firmware completo (v10) está no repositório:{' '}
            <a href="https://github.com/gsferreiira/bebedouro-inteligente" target="_blank" rel="noreferrer">
              github.com/gsferreiira/bebedouro-inteligente
            </a>
          </p>
        </section>

        <section className="cs-section">
          <h2>Resultados</h2>
          <ul className="cs-list">
            <li>O sistema identifica corretamente o tipo de recipiente, faz a tara automática, enche até o alvo de peso e retorna ao repouso sem intervenção manual, validado em bancada com a v10 do firmware.</li>
            <li>Dispensação por peso elimina o desperdício típico de sistemas por tempo fixo, adaptando-se automaticamente ao recipiente.</li>
            <li>Loop não bloqueante manteve o sistema responsivo a botões e sensores durante todo o ciclo de enchimento.</li>
            <li>Corte de segurança por variação de peso evitou que a bomba continuasse ligada com o recipiente removido.</li>
          </ul>
        </section>

        <section className="cs-section cs-section--end">
          <Link to="/" className="btn btn--ghost">Voltar pro início</Link>
          <a className="btn btn--primary" href="https://bebedouro-inteligente.vercel.app" target="_blank" rel="noreferrer">
            Ver site do projeto
          </a>
        </section>
      </main>
    </>
  )
}

export default BebedouroCaseStudy
