import svg from './img.svg'

type Props = {
  className?: string
  style?: string
}

const WoGBefore: FC<Props> = ({ className, style }) => {
  return <img src={svg} className={className} style={style} />
}

export default WoGBefore
