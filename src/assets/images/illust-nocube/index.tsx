import webp from './img.webp'

type Props = {
  className?: string
}

const IllustNoCube: FC<Props> = ({ className }) => {
  return <img src={webp} className={className} />
}

export default IllustNoCube
