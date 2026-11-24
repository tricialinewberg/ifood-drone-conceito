import './ProblemSection.css'
import SiteWatermark from '../SiteWatermark'

const illustrativeTimes = {
  ground: '25 min',
  drone: '5 min',
}

function DeliveryIcon({ kind }: { kind: 'ground' | 'drone' }) {
  if (kind === 'ground') {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M5 27.5 8.4 16a4 4 0 0 1 3.8-2.8h23.6a4 4 0 0 1 3.8 2.8L43 27.5v8H5v-8Z" />
        <path d="M7 27.5h34M11 36v3m26-3v3" />
        <circle cx="13" cy="32" r="3" />
        <circle cx="35" cy="32" r="3" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m15 17 9 5 9-5M24 22v11m-8-16-7-4m23 4 7-4M17 18H8m32 0h-9M24 22l-6 8m6-8 6 8" />
      <path d="M4 12h8m24 0h8M14 16h6m8 0h6" />
      <circle cx="8" cy="12" r="3" />
      <circle cx="40" cy="12" r="3" />
      <path d="M21 21h6v4h-6zM15 31h4v5h-4zm14 0h4v5h-4z" />
    </svg>
  )
}

function DeliveryComparison() {
  return (
    <aside className="delivery-comparison" aria-label="Comparação ilustrativa entre modalidades de entrega">
      <div className="delivery-comparison__row">
        <span className="delivery-comparison__icon delivery-comparison__icon--ground">
          <DeliveryIcon kind="ground" />
        </span>
        <span className="delivery-comparison__details">
          <strong>Entrega terrestre</strong>
          <span>Trajeto longo</span>
        </span>
        <span className="delivery-comparison__time">{illustrativeTimes.ground}</span>
      </div>
      <div className="delivery-comparison__divider" />
      <div className="delivery-comparison__row">
        <span className="delivery-comparison__icon delivery-comparison__icon--drone">
          <DeliveryIcon kind="drone" />
        </span>
        <span className="delivery-comparison__details">
          <strong>Entrega por drone</strong>
          <span>Trajeto aéreo</span>
        </span>
        <span className="delivery-comparison__time delivery-comparison__time--drone">
          {illustrativeTimes.drone}
        </span>
      </div>
      <p className="delivery-comparison__note">Valores ilustrativos</p>
    </aside>
  )
}

function ProblemSection() {
  return (
    <section className="problem-section" id="distancia" aria-labelledby="problem-title">
      <img
        className="problem-section__map"
        src="/images/problem-map.png"
        alt="Vista aérea de uma cidade cortada por um rio e uma rodovia. Marcadores indicam um restaurante e um complexo empresarial, ligados por uma rota aérea pontilhada para drone."
      />
      <div className="problem-section__copy">
        <h2 id="problem-title">
          Perto no mapa.<br />
          <span>Longe</span> na realidade.
        </h2>
        <p>
          Nem sempre a distância entre um restaurante e quem deseja pedir dele é tão pequena quanto parece. Barreiras físicas e trajetos terrestres podem tornar uma entrega simples muito mais demorada.
        </p>
      </div>

      <DeliveryComparison />
      <SiteWatermark tone="light" />
    </section>
  )
}

export default ProblemSection
