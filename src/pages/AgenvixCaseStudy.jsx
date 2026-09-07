import { Link } from 'react-router-dom'
import Figure from '../components/Figure.jsx'
import './CaseStudy.css'

import landingHero from '../assets/case-agenvix/landing-hero.png'
import landingSegmentos from '../assets/case-agenvix/landing-segmentos.png'
import casoReal from '../assets/case-agenvix/caso-real.png'
import onboardingNome from '../assets/case-agenvix/onboarding-nome.png'
import onboardingCores from '../assets/case-agenvix/onboarding-cores.png'
import onboardingPronto from '../assets/case-agenvix/onboarding-pronto.png'
import painelTour from '../assets/case-agenvix/painel-tour.png'
import paginaClienteServicos from '../assets/case-agenvix/pagina-cliente-servicos.png'
import paginaClienteContato from '../assets/case-agenvix/pagina-cliente-contato.png'

function AgenvixCaseStudy() {
  return (
    <>
      <header className="nav">
        <Link to="/" className="nav__brand">Gabriel Ferreira</Link>
        <nav className="nav__links">
          <Link to="/">← Início</Link>
          <a href="https://www.agenvix.com.br" target="_blank" rel="noreferrer">Site ao vivo ↗</a>
        </nav>
      </header>

      <main className="cs">
        <section className="cs-hero">
          <p className="cs-hero__eyebrow">Case de projeto · Desenvolvimento solo</p>
          <h1>Agenvix</h1>
          <p className="cs-hero__pitch">
            SaaS multi-tenant de agendamentos para barbearias, salões e clínicas. Idealizado,
            desenvolvido e mantido sozinho, do zero até produção.
          </p>
          <div className="cs-hero__tags">
            <span className="tag">PHP</span>
            <span className="tag">MySQL</span>
            <span className="tag">JWT</span>
            <span className="tag">React</span>
            <span className="tag">Docker</span>
            <span className="tag">GitHub Actions</span>
          </div>
          <div className="cs-hero__stats">
            <div className="cs-stat">
              <strong>~10</strong>
              <span>usuários ativos/mês</span>
            </div>
            <div className="cs-stat">
              <strong>100%</strong>
              <span>em produção</span>
            </div>
          </div>
          <a className="btn btn--primary" href="https://www.agenvix.com.br" target="_blank" rel="noreferrer">
            Ver site ao vivo ↗
          </a>
        </section>

        <section className="cs-section">
          <h2>O problema</h2>
          <p>
            Donos de barbearia, salão e clínica que atendem com hora marcada perdem tempo (e clientes)
            gerenciando agenda por WhatsApp e caderno. Não existia, pro público que eu queria atender,
            uma forma simples de colocar uma agenda profissional no ar sem depender de um desenvolvedor
            ou pagar por um sistema genérico caro demais pra um negócio pequeno.
          </p>
          <p>
            A proposta do Agenvix: qualquer dono de negócio monta a própria agenda online, com a cara do
            seu negócio, em menos de 10 minutos, sem precisar entender muito sobre tecnologia.
          </p>
        </section>

        <section className="cs-section">
          <h2>Como funciona</h2>
          <p>
            O fluxo é dividido em três partes: o site de marketing (onde o dono conhece o produto), o
            onboarding guiado (onde ele monta a própria agenda) e a página pública final (o que o
            cliente dele vê na hora de agendar).
          </p>

          <Figure
            src={landingHero}
            alt="Página inicial do Agenvix, com o título 'Sua agenda online, pronta pra sua clínica' e uma prévia ao vivo da agenda de um salão de exemplo"
            caption="Landing page: a proposta de valor e uma prévia ao vivo do produto final."
          />

          <Figure
            src={landingSegmentos}
            alt="Seção da landing page mostrando os segmentos atendidos (barbearias, salões, clínicas, estética, tatuadores, personal) e o início do passo a passo de como funciona"
            caption="Segmentado pra diferentes tipos de negócio que atendem com hora marcada."
          />

          <Figure
            src={casoReal}
            alt="Seção 'Caso real' da landing page mostrando o depoimento de um cliente de verdade (barbearia Legacy Style) e a equipe dele usando o Agenvix"
            caption="Prova social: negócio real usando o Agenvix no dia a dia."
          />

          <h3 className="cs-subtitle">Onboarding em 13 passos</h3>
          <p>
            Em vez de um formulário gigante, o cadastro é quebrado em passos curtos e opcionais sempre
            que possível: nome, link, logo, cores, contato, horários, equipe e serviços. A prévia ao
            vivo à direita muda em tempo real conforme o dono preenche.
          </p>

          <div className="cs-gallery">
            <Figure src={onboardingNome} alt="Passo 1 de 13 do onboarding: nome do negócio" caption="Passo 1: nome do negócio." />
            <Figure src={onboardingCores} alt="Passo 5 de 13 do onboarding: escolha de cor do sistema entre várias opções" caption="Passo 5: identidade visual, com prévia instantânea." />
            <Figure src={onboardingPronto} alt="Passo 13 de 13: tela de conclusão dizendo que a agenda já está no ar" caption="Passo 13: agenda já no ar, sem sair da tela." />
          </div>

          <h3 className="cs-subtitle">Painel do dono</h3>
          <p>
            Depois do onboarding, o dono cai num painel com um tour guiado (feito na mão, sem lib de
            terceiros) explicando faturamento, agenda, equipe e configurações.
          </p>
          <Figure
            src={painelTour}
            alt="Painel administrativo do dono do negócio, com métricas de faturamento e agendamentos zeradas, e um tour guiado explicando o painel"
            caption="Painel do dono: métricas do dia/mês e tour guiado na primeira visita."
          />

          <h3 className="cs-subtitle">Página pública (o que o cliente vê)</h3>
          <p>
            Cada negócio tem sua própria página em <code>agenvix.com.br/seu-negocio</code>, com serviços,
            equipe e contato, pronta pra divulgar na bio do Instagram.
          </p>
          <div className="cs-gallery">
            <Figure src={paginaClienteServicos} alt="Página pública do negócio mostrando a seção de serviços e equipe" caption="Serviços e equipe, visíveis pro cliente final." />
            <Figure src={paginaClienteContato} alt="Página pública do negócio mostrando a seção de contato, com endereço, WhatsApp e Instagram" caption="Contato direto: endereço, WhatsApp e Instagram." />
          </div>
        </section>

        <section className="cs-section">
          <h2>Decisões de arquitetura</h2>
          <ul className="cs-list">
            <li>
              <strong>PHP sem framework.</strong> Escolhi PHP porque a hospedagem que eu já tinha
              (Hostinger) dá suporte nativo a ele, sem custo extra de infraestrutura pra rodar algo
              como Node. Optei por não usar Laravel/Symfony e escrever roteamento, autenticação e
              camada de dados na mão. Mais trabalho no início, mas zero dependência de framework pra
              manter e entendimento total de cada requisição.
            </li>
            <li>
              <strong>Multi-tenancy por slug</strong> (<code>agenvix.com.br/negocio</code>) desde o
              primeiro dia, com isolamento de dados por tenant na camada de autenticação. Não dava pra
              deixar isso pra depois sem reescrever o sistema inteiro.
            </li>
            <li>
              <strong>JWT com refresh token.</strong> Token de acesso de vida curta, sessão prolongada
              via refresh token rotacionado, revogável no logout.
            </li>
            <li>
              <strong>React + Vite no front</strong>, consumindo a API própria via REST.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>Desafios técnicos</h2>
          <ul className="cs-list">
            <li>
              <strong>Idempotência no webhook de pagamento.</strong> O gateway pode reenviar a mesma
              notificação mais de uma vez. Sem tratar isso, um cliente pagaria e o sistema registraria
              a cobrança em duplicidade. Resolvido guardando o identificador do evento e ignorando
              reenvios já processados.
            </li>
            <li>
              <strong>Rate limiting e cache próprios</strong>, sem depender de infraestrutura externa
              (Redis, etc.), implementados em arquivo, suficiente pra escala atual do projeto.
            </li>
            <li>
              <strong>CI/CD com GitHub Actions</strong> rodando testes automatizados (PHPUnit) a cada
              push, e ambiente de desenvolvimento local com Docker Compose pra reproduzir produção.
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2>Próximos passos</h2>
          <p>
            O Agenvix nasceu pensado pra barbearia, mas o produto serve qualquer negócio que atende com
            hora marcada. Estou generalizando o vocabulário no código e no banco (de "barbearia" e
            "barbeiro" para "negócio" e "profissional"), pra refletir isso também na estrutura interna,
            não só na proposta.
          </p>
          <p>
            Em paralelo, estou levando as páginas do negócio e do cliente final pro padrão de app: uma
            barra de navegação inferior no mobile, com o botão de agendar em destaque no centro.
          </p>
        </section>

        <section className="cs-section cs-section--end">
          <Link to="/" className="btn btn--ghost">← Voltar pro início</Link>
          <a className="btn btn--primary" href="https://www.agenvix.com.br" target="_blank" rel="noreferrer">
            Ver site ao vivo ↗
          </a>
        </section>
      </main>
    </>
  )
}

export default AgenvixCaseStudy
