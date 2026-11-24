import './EditorialBenefitsSection.css'
import SiteWatermark from '../SiteWatermark'

const benefitAreas = [
  { number: '01', audience: 'Para quem pede', title: 'Mais opções para receber seu pedido' },
  { number: '02', audience: 'Para restaurantes', title: 'Novas possibilidades de alcance' },
  { number: '03', audience: 'Para a cidade', title: 'Conexões que superam barreiras físicas' },
]

function EditorialBenefitsSection() {
  return (
    <section className="editorial-benefits" id="beneficios" aria-labelledby="editorial-benefits-title">
      <div className="editorial-benefits__copy">
        <h2 id="editorial-benefits-title">
          Mais possibilidades<br />
          para <span>conectar</span><br />
          pessoas e restaurantes.
        </h2>

        <ol className="editorial-benefits__list">
          {benefitAreas.map((benefit) => (
            <li className="editorial-benefits__item" key={benefit.number}>
              <div className="editorial-benefits__item-heading">
                <span className="editorial-benefits__number">{benefit.number}</span>
                <p>{benefit.audience}</p>
              </div>
              <h3>{benefit.title}</h3>
            </li>
          ))}
        </ol>
      </div>

      <img
        className="editorial-benefits__image"
        src="/images/benefits-worker-phone.png?v=2"
        alt="Profissional em um ambiente de trabalho mostrando no celular que um pedido iFood chegou"
      />
      <SiteWatermark tone="image" />
    </section>
  )
}

export default EditorialBenefitsSection
