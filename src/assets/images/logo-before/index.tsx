import svg from './img.svg'

type Props = {
  className?: string
  style?: string
}

const LogoBefore: FC<Props> = ({ className, style }) => {
  return <img src={svg} className={className} style={style} />
}

export default LogoBefore
