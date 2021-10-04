import { useEffect, useState } from 'preact/hooks'
import Illust, { PrefetchIllust } from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import { useChangedState, useSetChangedState } from '/@/store/Changed'
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

  const changed = useChangedState()
  const setChanged = useSetChangedState()

  useEffect(() => {
    if (offset >= CHANGE_OFFSET) {
      // アニメーションの時間に合わせて調整
      setTimeout(() => setChanged(true), 210)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  // const [clicked, setClicked] = useState(false)
  // const autoScroll = () => setClicked(true)

  /*
  useEffect(() => {
    if (clicked) {
      const timer = setInterval(() => {
        if (window.pageYOffset / window.innerWidth <= CHANGE_OFFSET) {
          // 環境に依存しないようにする
          const o = window.pageYOffset / window.innerWidth
          console.log(o)
          window.scrollBy(0, o * (CHANGE_OFFSET - o) * 5 + 5)
        } else {
          clearInterval(timer)
        }
      }, 0)
      return () => clearInterval(timer)
    }
  }, [clicked])
  */

  if (changed)
    return (
      <>
        <Illust className="absolute top-0 w-full gradation" />
        <div className="absolute top-0 z-20 w-full h-full bg-white opacity-0 pointer-events-none white-out" />
      </>
    )
  else
    return (
      <>
        <IllustNoCube className="absolute top-0 w-full gradation fade-in-illust" />
        <Cube offset={offset} />
        {/*
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="flex absolute inset-x-0 justify-center items-center mx-auto w-60 h-40 text-black bg-white top-[80vh]"
          onClick={autoScroll}>
          押してね
        </div>
        */}
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
