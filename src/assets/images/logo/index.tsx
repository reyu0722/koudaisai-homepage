import avif from './img.avif'
import webp from './img.webp'
import png from './img.png'

type Props = {
  className?: string
  style?: string
}

const Logo: FC<Props> = ({ className, style }) => {
  return (
    <picture>
      <source type="image/avif" srcSet={avif} />
      <source type="image/webp" srcSet={webp} />
      <img
        src={png}
        width="960"
        height="684"
        className={className}
        style={style}
      />
    </picture>
  )
}

export default Logo
