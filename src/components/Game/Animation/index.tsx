import bg from './bg.svg'
import circle from './circle.svg'

type Props = {
  visible: boolean
}

const Animation: FC<Props> = ({ visible }) => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="relative left-3/5 h-60 max-w-1/4">
      <div className="absolute top-0 w-auto">
        <img src={bg} className="top-0" />
        <img
          src={circle}
          className="absolute w-2/5 light"
          style={visible ? `top:70%;right:70%; ` : `top:-8%;right:-8%`}
        />
      </div>
    </div>
  )
}

export default Animation
