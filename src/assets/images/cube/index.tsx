import avif from './img.avif'
import png from './img.png'
import webp from './img.webp'

type Props = {
  className?: string
  style?: string
}

const Cube: FC<Props> = ({ className, style }) => {
  return (
    <picture>
      <source type="image/avif" srcSet={avif} />
      <source type="image/webp" srcSet={webp} />
      <img
        src={png}
        width="720"
        height="509"
        className={className}
        style={style}
      />
    </picture>
  )
}

export default Cube
