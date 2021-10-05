import webp from './img.webp'

type Props = {
  className?: string
}

const IllustNoCube: FC<Props> = ({ className }) => {
  return <img width="1920" height="2718" src={webp} className={className} />
}

export default IllustNoCube
