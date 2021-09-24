import trapLogoSrc from '/@/assets/logo/trap.svg'
import koudaisai_avif from '/@/assets/logo/koudaisai.avif'
import koudaisai_webp from '/@/assets/logo/koudaisai.webp'
import koudaisai_png from '/@/assets/logo/koudaisai.png'

export const TrapLogo = <img src={trapLogoSrc} />

export const KoudaisaiLogo = (
  <picture>
    <source type="image/avif" srcSet={koudaisai_avif} />
    <source type="image/webp" srcSet={koudaisai_webp} />
    <img src={koudaisai_png} />
  </picture>
)
