import { useEffect, useState } from 'preact/hooks'
import Illust, { PreloadIllust } from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import Cube from './Cube'
import Logo from './Logo'

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
          <Cube offset={offset} />
        </>
      ) : (
        <Illust className="absolute top-0 z-0 w-full gradation" />
      )}
      <Logo />
    </>
  )
}

export default Background
