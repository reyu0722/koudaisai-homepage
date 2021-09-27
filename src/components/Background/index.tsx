import { useEffect, useState } from 'preact/hooks'
import Illust, { PrefetchIllust } from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import AnimationHeader from './AnimationHeader'
import Cube from './Cube'
import Logo from './Logo'

// 背景画像が切り替わるタイミング
const CHANGE_OFFSET = 0.64

const Background: FC = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const listener = () =>
      setOffset(Math.min(window.pageYOffset / window.innerWidth, CHANGE_OFFSET))

    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [])

  const [changed, setChanged] = useState(false)

  useEffect(() => {
    if (offset >= CHANGE_OFFSET) {
      // アニメーションの時間に合わせて調整
      setTimeout(() => setChanged(true), 210)
    }
  }, [offset])

  return (
    <>
      <PrefetchIllust />
      <Logo />
      {!changed ? (
        <>
          <IllustNoCube className="absolute top-0 w-full gradation fade-in-illust" />
          <Cube offset={offset} />
        </>
      ) : (
        <>
          <div className="absolute w-full h-full bg-white z-20 white-out opacity-0 pointer-events-none" />
          <AnimationHeader />
          <Illust className="absolute top-0 w-full gradation" />
        </>
      )}
    </>
  )
}

export default Background
