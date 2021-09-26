import svg from './lay.svg'
import './animation.css'

const Lay: FC = () => {
  return (
    <div className="relative">
      <img src={svg} className="absolute top-[-60rem] w-full h-auto lay" />
    </div>
  )
}

export default Lay
