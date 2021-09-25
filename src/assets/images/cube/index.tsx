import webp from './img.webp'

type Props = {
  className?: string
}

const Cube: FC<Props> = ({ className }) => {
  return <img src={webp} className={className} />
}

export default Cube
