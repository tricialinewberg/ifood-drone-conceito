import './ClosingSection.css'

const ifoodUrl = 'https://www.ifood.com.br/'

function ClosingSection() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <div className="closing-section__inner">
        <h2 id="closing-title">Uma nova rota.<br /><span>Novas possibilidades.</span></h2>
        <div className="closing-section__action">
          <p>O iFood Drone amplia as possibilidades de conectar restaurantes e consumidores pela cidade.</p>
          <a href={ifoodUrl}>Voltar ao iFood <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}

export default ClosingSection
