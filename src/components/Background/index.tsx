import { useEffect, useState } from 'preact/hooks'
import Illust, { PreloadIllust } from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import Header from '/@/components/Header'
import Cube from './Cube'
import Logo from './Logo'

const Background: FC = () => {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const listener = () => setOffset(window.pageYOffset / window.innerWidth)
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
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
        <>
          <Header />
          <Illust className="absolute top-0 z-0 w-full gradation" />
        </>
      )}
      <Logo />
    </>
  )
}

export default Background
