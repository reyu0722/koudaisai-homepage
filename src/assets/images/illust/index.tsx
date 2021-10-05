import avif from './img.avif'
import webp from './img.webp'
import jpg from './img.jpg'
type Props = {
  className?: string
}

const Illust: FC<Props> = ({ className }) => {
  return (
    <picture>
      <source type="image/avif" srcSet={avif} />
      <source type="image/webp" srcSet={webp} />
      <img src={jpg} width="1920" height="2718" className={className} loading="lazy" />
    </picture>
  )
}

export default Illust
