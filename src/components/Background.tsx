import { useEffect, useState } from 'preact/hooks'
import Illust, { PreloadIllust } from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import Cube from '/@/assets/images/cube'
import WoG from '/@/assets/images/wog'
import WoGBefore from '/@/assets/images/wog-before'

// cubeの挙動を決める関数たち
const getCubeX = (offset: number): number =>
  36 + offset * offset * -25 + offset * 40

const getCubeY = (offset: number): number => 20 + offset * 100

const getCubeWidth = (offset: number): number => 20 + offset * 40

const getCubeDeg = (offset: number): number => 25 + offset * -40

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

  const [changed, setChanged] = useState(false)
  useEffect(() => {
    // 背景画像が切り替わるタイミング
    if (offset > 0.62) {
      setChanged(true)
    }
  }, [offset])

  return (
    <>
      <PreloadIllust />
      {!changed ? (
        <>
          <IllustNoCube className="absolute top-0 z-0 w-full gradation fade-in-illust" />
          <Cube
            className="absolute overflow-x-hidden fade-in-illust"
            style={`
              width: ${getCubeWidth(offset)}rem;
              left: ${getCubeX(offset)}rem;
              top: ${getCubeY(offset)}rem;
              transform: scale(1) rotate(${getCubeDeg(offset)}deg);
            `}
          />
        </>
      ) : (
        <Illust className="absolute top-0 z-0 w-full gradation" />
      )}

      <WoG className="absolute top-52 left-28 w-180 fade-in-wog" />
      <WoGBefore className="absolute top-52 left-28 w-180" />
    </>
  )
}

export default Background
