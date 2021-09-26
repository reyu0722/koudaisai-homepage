import svg from './ray.svg'
import './animation.css'

const Ray: FC = () => {
  return (
    <div className="relative">
      <img className="absolute top-[-60rem] w-full h-auto" src={svg} />
    </div>
  )
}

export default Ray
