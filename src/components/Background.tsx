import { useEffect, useState } from 'preact/hooks'
import Illust from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import Cube from '/@/assets/images/cube'

const getCubeX = (offset: number): number => {
  return 36 + offset * offset * -25 + offset * 40
}

const getCubeY = (offset: number): number => {
  return 20 + offset * 100
}

const getCubeWidth = (offset: number): number => {
  return 20 + offset * 30
}

const getCubeDeg = (offset: number): number => {
  return 25 + offset * -30
}

const Background: FC = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset / window.innerWidth)
    }
    window.onresize = () => {
      setOffset(window.pageYOffset / window.innerWidth)
    }
  }, [])

  return (
    <>
      <IllustNoCube className="absolute top-0 z-0 w-full bgimage" />
      <Cube
        className="absolute overflow-x-hidden"
        style={`
          width: ${getCubeWidth(offset)}vw;
          left: ${getCubeX(offset)}vw;
          top: ${getCubeY(offset)}vw;
          transform: scale(1) rotate(${getCubeDeg(offset)}deg);
        `}
      />
    </>
  )
}

export default Background
