import webp from './img.webp'

type Props = {
  className?: string
}

const Illust: FC<Props> = ({ className }) => {
  return (
    <>
      <img src={webp} className={className} />
    </>
  )
}

export const PreloadIllust: FC = () => {
  return <link rel="preload" href={webp} as="image" type="image/webp" />
}

export default Illust
