type SiteWatermarkProps = {
  tone: 'light' | 'brand' | 'image'
}

function SiteWatermark({ tone }: SiteWatermarkProps) {
  return (
    <span className={`site-watermark site-watermark--${tone}`} aria-hidden="true">
      Design by Trícia Linewberg · Independent Concept
    </span>
  )
}

export default SiteWatermark
