import bg from './bg.svg'
import circle from './circle.svg'

type Props = {
  visible: boolean
}

const Animation: FC<Props> = ({ visible }) => {
  return (
    <div className="relative h-60 ml-[60%]">
      <img src={bg} className="absolute top-0 right-60" />
      <img
        src={circle}
        className="absolute light"
        style={
          visible
            ? `top:7.5rem; right:22.5rem; `
            : `top:-0.75rem;right:14.25rem`
        }
      />
    </div>
  )
}

export default Animation
