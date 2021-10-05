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
      <img src={jpg} width="1920" height="2718" className={className} />
    </picture>
  )
}

export const PrefetchIllust: FC = () => {
  return (
    <>
      <link rel="prefetch" href={avif} as="image" type="image/avif" />
      <link rel="prefetch" href={webp} as="image" type="image/webp" />
      <link rel="prefetch" href={jpg} as="image" type="image/jpg" />
    </>
  )
}

export default Illust
