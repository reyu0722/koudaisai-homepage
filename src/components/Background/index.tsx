import { useEffect, useState } from 'preact/hooks'
import Illust, { PrefetchIllust } from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import AnimationHeader from './AnimationHeader'
import Cube from './Cube'
import Logo from './Logo'

// 背景画像が切り替わるタイミング
const CHANGE_OFFSET = 0.64

const BackgroundIllust: FC = () => {
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

  if (changed)
    return (
      <>
        <AnimationHeader />
        <Illust className="absolute top-0 w-full gradation" />
        <div className="absolute top-0 z-20 w-full h-full bg-white opacity-0 pointer-events-none white-out" />
      </>
    )
  else
    return (
      <>
        <IllustNoCube className="absolute top-0 w-full gradation fade-in-illust" />
        <Cube offset={offset} />
      </>
    )
}

const Background: FC = () => {
  return (
    <>
      <PrefetchIllust />
      <Logo />
      <BackgroundIllust />
    </>
  )
}

export default Background
