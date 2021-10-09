import { useEffect, useState, useRef } from 'preact/hooks'

import Download from '/@/components/Button/Download'
import More from '/@/components/Button/More'
import PlayNow from '/@/components/Button/PlayNow'

import Animation from './Animation'
import Image from './Image'
import Title from './Title'

type Props = Game

export type Game = {
  title: string
  description: string
  howToPlay: string
  image: string
  carouselImages: string[]
  blogUrl?: string
  gameUrl: string
  launcher?: boolean
}

const options = {
  rootMargin: `-30% 0px -30% 0px`
}

const Game: FC<Props> = ({
  title,
  description,
  howToPlay,
  image,
  carouselImages,
  blogUrl,
  gameUrl,
  launcher
}) => {
  const [visible, setVisible] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
      }
    }, options)
    if (cur) observer.observe(cur)
    return () => {
      if (cur) observer.unobserve(cur)
    }
  }, [])

  const modalContent = {
    isOpen: true,
    howToPlay,
    carouselImages,
    blogUrl,
    gameUrl
  }

  const reverse = false

  return (
    <div className="py-32 my-64">
      <div className="z-10" ref={ref} />
      <Animation visible={visible} />
      {true && (
        <>
          <div className="mx-6 sm:mx-12 md:mx-24 space-y-16">
            <Title text={title} reverse={reverse} />
            <div
              className={`flex flex-col ${
                reverse ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:gap-24 lg:justify-between items-center lg:items-start <lg:space-y-12`}>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="relative w-full h-auto lg:w-180">
                <Image image={image} />
              </div>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="space-y-12 <lg:w-full lg:w-150">
                <div className="whitespace-pre-wrap">{description}</div>
                <div className="flex gap-3 w-full h-12">
                  {launcher ? (
                    <Download url={gameUrl} />
                  ) : (
                    <>
                      <PlayNow url={gameUrl} />
                      <More {...modalContent} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Game
