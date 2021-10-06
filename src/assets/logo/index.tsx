import avif from '/@/assets/logo/koudaisai.avif'
import png from '/@/assets/logo/koudaisai.png'
import webp from '/@/assets/logo/koudaisai.webp'
import trapLogoSrc from '/@/assets/logo/trap.svg'

export const TrapLogo = <img src={trapLogoSrc} />

export const KoudaisaiLogo = (
  <picture>
    <source type="image/avif" srcSet={avif} />
    <source type="image/webp" srcSet={webp} />
    <img src={png} />
  </picture>
)
