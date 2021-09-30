import meshTop from './mesh-top.svg'
import meshBottom from './mesh-bottom.svg'
import titlebg from './titlebg.svg'

const Decorations: FC = () => {
  return (
    <>
      <img src={meshTop} className="absolute top-0 right-0" />
			<img src={meshBottom} className="absolute bottom-0 left-0" />
			<img src={titlebg} className="absolute top-16 left-18 w-52" />
    </>
  )
}

export default Decorations
