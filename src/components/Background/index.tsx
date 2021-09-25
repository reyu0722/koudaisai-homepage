import { useEffect, useState } from 'preact/hooks'
import Illust, { PrefetchIllust } from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import Header from '/@/components/Header'
import Cube from './Cube'
import Logo from './Logo'

// 背景画像が切り替わるタイミング
const CHANGE_OFFSET = 0.64

const Background: FC = () => {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const listener = () => {
      let offset = window.pageYOffset / window.innerWidth
      if (offset > CHANGE_OFFSET) offset = CHANGE_OFFSET
      return setOffset(offset)
    }
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
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
