import './BenefitsSection.css'
import SiteWatermark from '../SiteWatermark'

type Benefit = {
  title: string
  description: string
  icon: 'lightning' | 'pin' | 'star'
}

const benefits: Benefit[] = [
  {
    title: 'Entregas mais rápidas',
    description: 'Uma nova possibilidade de trajeto.',
    icon: 'lightning',
  },
  {
    title: 'Acesso ampliado',
    description: 'Alcançar lugares com barreiras terrestres.',
    icon: 'pin',
  },
  {
    title: 'Mais possibilidades',
    description: 'Conectar mais restaurantes aos consumidores.',
    icon: 'star',
  },
]

function BenefitIcon({ kind }: { kind: Benefit['icon'] }) {
  if (kind === 'lightning') {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M18.5 3.5 8 17h7l-1.5 11.5L24 14h-7z" /></svg>
  }

  if (kind === 'pin') {
    return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M25 13.2c0 6.5-9 15.3-9 15.3S7 19.7 7 13.2a9 9 0 1 1 18 0Z" /><circle cx="16" cy="13" r="3" /></svg>
  }

  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m16 3.5 3.9 8 8.8 1.3-6.4 6.2 1.5 8.8-7.8-4.1-7.8 4.1 1.5-8.8-6.4-6.2 8.8-1.3z" /></svg>
}

function BenefitsSection() {
  return (
    <section className="benefits-section" id="solucao" aria-labelledby="benefits-title">
      <div className="benefits-section__content">
        <div className="benefits-section__intro">
          <h2 id="benefits-title">
            Uma nova rota<br />
            <span>para</span> suas entregas.
          </h2>
          <p>
            O iFood Drone conecta restaurantes e consumidores por uma rota aérea direta, superando barreiras e encurtando distâncias.
          </p>
        </div>

        <ul className="benefits-list">
          {benefits.map((benefit, index) => (
            <li className="benefits-list__item" key={benefit.title}>
              <span className="benefits-list__icon"><BenefitIcon kind={benefit.icon} /></span>
              <div className="benefits-list__copy">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
              {index < benefits.length - 1 && <span className="benefits-list__divider" aria-hidden="true" />}
            </li>
          ))}
        </ul>
      </div>
      <SiteWatermark tone="light" />
    </section>
  )
}

export default BenefitsSection
