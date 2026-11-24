import './App.css'
import './AppFooter.css'
import ProblemSection from './sections/ProblemSection'
import BenefitsSection from './sections/BenefitsSection'
import HowItWorksSection from './sections/HowItWorksSection'
import EditorialBenefitsSection from './sections/EditorialBenefitsSection'
import ClosingSection from './sections/ClosingSection'
import SiteWatermark from './SiteWatermark'

function HeroArtwork() {
  return (
    <svg
      className="hero__artwork"
      viewBox="0 0 1536 431"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="brand-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9081d" />
          <stop offset="1" stopColor="#ed0928" />
        </linearGradient>
      </defs>
      <path
        className="hero__mobile-panel"
        d="M0 0H1536V236C1250 264 1030 246 800 259C520 274 280 254 0 270Z"
      />
      <path
        className="hero__red-panel"
        d="M0 0H824C795 34 763 75 738 104C710 136 681 148 651 157C606 171 600 194 625 216C654 241 702 262 730 272C709 307 696 341 666 369C624 407 556 425 476 431H0Z"
      />
      <path className="hero__underline" d="M423 263C464 254 515 248 568 250" />
    </svg>
  )
}

function App() {
  return (
    <>
      <main>
        <section className="hero" id="hero" aria-labelledby="hero-title">
        <img
          className="hero__photograph"
          src="/images/hero-city-drone.png?v=6"
          alt="Drone iFood levando uma bolsa vermelha sobre a cidade ao pôr do sol"
        />
        <HeroArtwork />
        <SiteWatermark tone="image" />

        <p className="hero__concept-label">CONCEITO · NÃO É REAL</p>

        <header className="site-header">
          <a className="site-header__brand" href="#hero" aria-label="iFood Drone — início">
            <img src="/images/ifood-logo-white.png" alt="" />
            <span className="site-header__brand-word">Drone</span>
          </a>
          <nav className="site-nav" aria-label="Navegação principal">
            <a href="#hero" aria-current="page">Início</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#beneficios">Benefícios</a>
          </nav>
          <a className="site-header__back" href="https://www.ifood.com.br/">
            Voltar ao iFood <span aria-hidden="true">→</span>
          </a>
        </header>

        <div className="hero__copy">
          <h1 id="hero-title">
            Tem lugares<br />
            que parecem perto.<br />
            Agora, eles podem<br />
            estar <span>ainda mais perto.</span>
          </h1>
          <p>
            Conheça o <strong>iFood Drone</strong>, uma nova modalidade<br className="desktop-break" />
            de entrega que conecta restaurantes e pessoas,<br className="desktop-break" />
            superando barreiras da cidade.
          </p>
          <div className="hero__actions">
            <a className="hero__primary" href="#como-funciona">
              Conheça como funciona <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        </section>
        <ProblemSection />
        <BenefitsSection />
        <HowItWorksSection />
        <EditorialBenefitsSection />
        <ClosingSection />
      </main>
      <footer className="page-footer">
        <div className="page-footer__inner">
          <a className="page-footer__brand" href="#hero" aria-label="iFood Drone — início">
            <img src="/images/ifood-logo-white.png" alt="" />
            <span>Drone</span>
          </a>
          <nav className="page-footer__nav" aria-label="Navegação do rodapé">
            <a href="#hero">Início</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#beneficios">Benefícios</a>
          </nav>
          <a className="page-footer__back" href="https://www.ifood.com.br/">
            Voltar ao iFood <span aria-hidden="true">→</span>
          </a>
        </div>
        <SiteWatermark tone="brand" />
        <p className="page-footer__disclaimer">
          Este projeto apresenta uma proposta fictícia de experiência de entrega por drones, desenvolvida de forma independente para fins de estudo e portfólio em UX/UI e Product Design. Não é um produto ou serviço real do iFood e não possui vínculo, parceria, autorização, patrocínio ou endosso da empresa. A marca e os elementos de identidade visual pertencem aos seus respectivos titulares.
        </p>
        <p className="page-footer__copyright">© iFood Drone</p>
      </footer>
    </>
  )
}

export default App

