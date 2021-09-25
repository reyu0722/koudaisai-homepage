import { useEffect, useState } from 'preact/hooks'
import Illust, { PrefetchIllust } from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import Header from '/@/components/Header'
import Cube from './Cube'
import Logo from './Logo'

const Background: FC = () => {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const listener = () => {
      let offset = window.pageYOffset / window.innerWidth
      if (offset > 0.63) offset = 0.63
      return setOffset(offset)
    }
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  const [changed, setChanged] = useState(false)
  useEffect(() => {
    // 背景画像が切り替わるタイミング
    if (offset > 0.62) {
      // アニメーションの時間に合わせて調整
      setTimeout(() => setChanged(true), 120)
    }
  }, [offset])

  return (
    <>
      <PrefetchIllust />
      {!changed ? (
        <>
          <IllustNoCube className="absolute top-0 z-0 w-full gradation fade-in-illust" />
          <Cube offset={offset} />
        </>
      ) : (
        <>
          <div className="absolute w-full h-full bg-white z-20 white-out opacity-0" />
          <Header />
          <Illust className="absolute top-0 z-0 w-full gradation" />
        </>
      )}
      <Logo />
    </>
  )
}

export default Background
