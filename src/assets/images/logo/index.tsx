import webp from './img.webp'

type Props = {
  className?: string
  style?: string
}

const Logo: FC<Props> = ({ className, style }) => {
  return <img src={webp} className={className} style={style} />
}

export default Logo
