import './HowItWorksSection.css'

type JourneyStep = {
  number: string
  title: string
  description: string
  icon: 'order' | 'restaurant' | 'drone' | 'flight' | 'notice' | 'pickup'
}

const journeySteps: JourneyStep[] = [
  { number: '01', title: 'Faça seu pedido', description: 'Escolha seus pratos normalmente pelo aplicativo iFood.', icon: 'order' },
  { number: '02', title: 'O restaurante prepara', description: 'O restaurante prepara e embala seu pedido para a coleta.', icon: 'restaurant' },
  { number: '03', title: 'O drone coleta', description: 'O drone coleta o pedido no restaurante.', icon: 'drone' },
  { number: '04', title: 'O voo começa', description: 'O drone segue por uma rota aérea autorizada, acompanhado por profissionais treinados.', icon: 'flight' },
  { number: '05', title: 'O drone chega', description: 'Quando o drone pousa no destino, você recebe uma notificação pelo aplicativo.', icon: 'notice' },
  { number: '06', title: 'Retire seu pedido', description: "Toque em 'Pegar meu pedido' no aplicativo para autorizar a abertura do compartimento e retirar sua refeição.", icon: 'pickup' },
]

function JourneyIcon({ kind }: { kind: JourneyStep['icon'] }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  switch (kind) {
    case 'order':
      return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M9 5h14v22H9zM12 10h8M12 14h8M12 18h5" /><path d="m6 8 3-2m17 2-3-2" /></svg>
    case 'restaurant':
      return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M7 14h18v13H7zM5 14l2-6h18l2 6M11 8v6m5-6v6m5-6v6M16 19v8" /></svg>
    case 'drone':
      return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="m10 11 6 4 6-4M16 15v8m-5-2 5-6 5 6M6 8h6m8 0h6" /><circle cx="6" cy="8" r="2" /><circle cx="26" cy="8" r="2" /><path d="M13 23h6v4h-6z" /></svg>
    case 'flight':
      return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M4 22c3-5 6 5 9 0s6 5 9 0 5 1 6 0" /><path d="m10 13 12-7-4 13-3-4-5-2Z" /></svg>
    case 'notice':
      return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M8 22h16l-2-3v-6a6 6 0 0 0-12 0v6zM13 25a3 3 0 0 0 6 0" /><path d="M16 3v2" /></svg>
    case 'pickup':
      return <svg viewBox="0 0 32 32" aria-hidden="true" {...common}><path d="M7 14h18v13H7zM5 14l2-6h18l2 6M16 14v13" /><path d="m12 18 4-4 4 4" /></svg>
  }
}

function HowItWorksSection() {
  return (
    <section className="how-it-works" id="como-funciona" aria-labelledby="journey-title">
      <div className="how-it-works__inner">
        <header className="how-it-works__header">
          <h2 id="journey-title">Do restaurante até você, <span>por uma nova rota.</span></h2>
        </header>
        <ol className="journey-steps">
          {journeySteps.map((step) => (
            <li className="journey-steps__item" key={step.number}>
              <span className="journey-steps__number">{step.number}</span>
              <span className="journey-steps__icon"><JourneyIcon kind={step.icon} /></span>
              <div className="journey-steps__copy">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorksSection
