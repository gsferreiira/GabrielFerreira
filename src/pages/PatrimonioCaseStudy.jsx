import { Link } from 'react-router-dom'
import Figure from '../components/Figure.jsx'
import './CaseStudy.css'

import login from '../assets/case-patrimonio/login.png'
import inicio from '../assets/case-patrimonio/inicio.png'
import dashboard from '../assets/case-patrimonio/dashboard.png'
import equipamentos from '../assets/case-patrimonio/equipamentos.png'
import movimentacoes from '../assets/case-patrimonio/movimentacoes.png'
import mapaSalas from '../assets/case-patrimonio/mapa-salas.png'
import workflow from '../assets/case-patrimonio/workflow-kanban.png'
import scannerCamera from '../assets/case-patrimonio/scanner-camera.png'
import movimentacaoLote from '../assets/case-patrimonio/movimentacao-lote.png'

function PatrimonioCaseStudy() {
  return (
    <>
      <header className="nav">
        <Link to="/" className="nav__brand">Gabriel Ferreira</Link>
        <nav className="nav__links">
          <Link to="/">← Início</Link>
        </nav>
      </header>

      <main className="cs">
        <section className="cs-hero">
          <p className="cs-hero__eyebrow">Case de projeto · Sistema institucional</p>
          <h1>Sistema de Gestão de Patrimônio</h1>
          <p className="cs-hero__pitch">
            Sistema interno de controle de patrimônio da FUNDEPAR (Instituto Paranaense de
            Desenvolvimento Educacional), desenvolvido sozinho a partir de uma necessidade simples
            de cadastro que antes era feita em planilha do Excel.
          </p>
          <div className="cs-hero__tags">
            <span className="tag">Node.js</span>
            <span className="tag">Express</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">React</span>
            <span className="tag">Docker</span>
          </div>
          <div className="cs-hero__stats">
            <div className="cs-stat">
              <strong>10+</strong>
              <span>setores em uso</span>
            </div>
            <div className="cs-stat">
              <strong>100%</strong>
              <span>em produção</span>
            </div>
          </div>
          <p className="cs-hero__note">
            É um sistema interno da instituição, sem link público. As capturas de tela abaixo foram
            feitas num ambiente local de desenvolvimento com dados fictícios, criados só pra esta
            demonstração. Nenhuma tela aqui mostra dado real de patrimônio, servidor ou setor da
            instituição.
          </p>
        </section>

        <section className="cs-section">
          <h2>O problema</h2>
          <p>
            A movimentação de equipamentos entre setores era controlada por planilha do Excel:
            processo manual, sem histórico confiável e sem visibilidade de onde cada item estava de
            fato. Comecei atuando como suporte técnico completo (equipamentos, redes, cabeamento) e,
            a partir da dor real de localizar patrimônio, propus um cadastro simples que foi crescendo
            até virar um sistema completo, do qual sou hoje o único desenvolvedor.
          </p>
        </section>

        <section className="cs-section">
          <h2>Como funciona</h2>
          <p>
            Acesso por login (com papéis diferentes: admin, técnico, coordenador, patrimônio,
            usuário), cada um vendo só o que precisa. A partir daí, o sistema cobre cadastro de
            equipamentos, movimentação entre setores, mapa de salas e um workflow de chamados
            técnicos.
          </p>

          <Figure
            src={login}
            alt="Tela de login do sistema FUNPAT, com campos de e-mail e senha"
            caption="Login com autenticação própria (JWT)."
          />
          <Figure
            src={inicio}
            alt="Tela inicial do sistema com atalhos para Dashboard, Workflow, Equipamentos, Movimentações, Registro, Mapa de Salas, Salas, Impressoras e Usuários"
            caption="Tela inicial: acesso rápido a cada módulo do sistema."
          />

          <h3 className="cs-subtitle">Dashboard</h3>
          <p>Indicadores de chamados, movimentações e uso recente do workflow.</p>
          <Figure
            src={dashboard}
            alt="Dashboard com métricas de chamados pendentes, resolvidos, número de salas, equipamentos patrimoniais e usuários, além de gráfico de histórico de tráfego"
            caption="Dashboard com métricas operacionais (dados fictícios nesta demo)."
          />

          <h3 className="cs-subtitle">Equipamentos e movimentações</h3>
          <p>
            Cadastro de equipamentos com categoria e status, e histórico completo de movimentação
            entre setores, com responsável e data de cada troca.
          </p>
          <div className="cs-gallery">
            <Figure src={equipamentos} alt="Lista de equipamentos cadastrados, com nome, classificação e categoria" caption="Cadastro de equipamentos por categoria." />
            <Figure src={movimentacoes} alt="Histórico de movimentações de patrimônio, com equipamento, origem, destino, responsável e data" caption="Histórico de movimentações entre setores." />
          </div>

          <h3 className="cs-subtitle">Mapa de salas</h3>
          <p>Visão de todos os setores e o que está alocado em cada um, de forma agrupada.</p>
          <Figure
            src={mapaSalas}
            alt="Mapa de salas mostrando cada setor com a quantidade de equipamentos alocados"
            caption="Distribuição de patrimônio por setor, num único painel."
          />

          <h3 className="cs-subtitle">Workflow de chamados</h3>
          <p>
            Além do controle de patrimônio, um quadro Kanban simples para chamados técnicos (aberto,
            em atendimento, finalizado).
          </p>
          <Figure
            src={workflow}
            alt="Quadro Kanban de chamados técnicos, com um chamado de exemplo na coluna Base"
            caption="Workflow de atendimento técnico em formato Kanban."
          />
        </section>

        <section className="cs-section">
          <h2>O diferencial: scanner de patrimônio</h2>
          <p>
            A parte do sistema que mais economiza trabalho no dia a dia é o scanner: aponta a câmera
            do celular pro código do patrimônio e o sistema já localiza o equipamento (em qual sala
            está, com quem) ou, no modo lote, acumula vários itens escaneados em sequência pra
            movimentar todos de uma vez, num único envio.
          </p>
          <Figure
            src={scannerCamera}
            alt="Interface do scanner de patrimônio, com a câmera aberta, retângulo de mira, controle de zoom e instrução para apontar para o código"
            caption="Scanner em modo lote: a câmera continua ativa após cada leitura, pronta pra próxima."
          />
          <p>
            Não é só um leitor de código de barras: o reconhecimento tenta primeiro a API nativa
            do navegador (<code>BarcodeDetector</code>), cai pra uma biblioteca própria
            (<code>zxing</code>) em navegadores que não suportam essa API, e ainda roda OCR em paralelo
            (<code>tesseract.js</code>) como último recurso, caso o código físico esteja
            arranhado ou mal impresso e só o número continue legível. Também tem zoom óptico/digital,
            lanterna e feedback tátil (vibração) diferenciando leitura nova de item duplicado.
          </p>
          <p>
            No modo lote, cada patrimônio escaneado entra numa lista revisável antes de confirmar:
          </p>
          <Figure
            src={movimentacaoLote}
            alt="Modal de movimentação em lote, com destino, recebedor, status e uma lista de patrimônios escaneados prontos para registrar a movimentação"
            caption="Movimentação em lote: destino único aplicado a todos os itens escaneados de uma vez."
          />
          <p>
            No backend, a movimentação em lote roda numa única transação atômica: valida se cada
            patrimônio existe e está registrado, recusa item sem localização atual ou já no destino,
            aplica regra de domínio (equipamento de TI só pode ser movido por quem tem acesso ao
            setor de TI) e só então grava todas as movimentações e atualiza a localização de cada
            item. Se algo falhar no meio, nada é salvo, evitando lote pela metade.
          </p>
        </section>

        <section className="cs-section">
          <h2>Decisões de arquitetura</h2>
          <ul className="cs-list">
            <li>
              <strong>Migração de Supabase para PostgreSQL autogerenciado.</strong> O sistema nasceu
              usando Supabase como atalho inicial e hoje roda em PostgreSQL próprio numa VM.
            </li>
            <li>
              <strong>Controle de acesso por papel.</strong> Cada tela do sistema é liberada por
              papel do usuário (admin, técnico, coordenador, patrimônio, usuário comum), configurado
              de forma centralizada.
            </li>
            <li>
              <strong>Docker Compose para o ambiente local</strong>, reproduzindo banco, backend e
              frontend igual à infraestrutura real, o que facilita testar mudanças sem risco.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>Desafios técnicos</h2>
          <ul className="cs-list">
            <li>
              <strong>Migrar sem parar o sistema pros usuários.</strong> A troca de Supabase pra
              Postgres próprio foi feita gradualmente, mantendo os dois bancos sincronizados durante a
              transição.
            </li>
            <li>
              <strong>Adoção gradual.</strong> Como qualquer sistema institucional novo, a adoção
              não é instantânea. Priorizei o rollout pelos técnicos de TI e setor de patrimônio antes
              de expandir pra mais usuários, pra validar o fluxo com quem mais precisa dele no dia a
              dia.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>O que eu faria diferente</h2>
          <p>
            Se fosse começar hoje, desenharia o modelo de dados multi-setor desde o primeiro dia em
            vez de evoluir aos poucos a partir de um cadastro simples. Funcionou, mas algumas
            migrações de schema poderiam ter sido evitadas com um planejamento inicial mais amplo.
          </p>
        </section>

        <section className="cs-section cs-section--end">
          <Link to="/" className="btn btn--ghost">← Voltar pro início</Link>
        </section>
      </main>
    </>
  )
}

export default PatrimonioCaseStudy
