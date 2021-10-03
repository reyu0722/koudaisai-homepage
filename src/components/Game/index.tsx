import { useEffect, useState, useRef } from 'preact/hooks'
import Buttons from './Buttons'
import Animation from './Animation'
import Title from './Title'

type Props = Game

export type Game = {
  title: string
  description: string
  imgUrl: string
  imgUrls: string[]
  blogUrl: string
  gameUrl: string
}

const options = {
  rootMargin: `-${Math.floor(window.innerHeight) / 3}px`
}

const Game: FC<Props> = ({
  title,
  description,
  imgUrl,
  imgUrls,
  blogUrl,
  gameUrl
}) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, options)
    if (cur) observer.observe(cur)
    return () => {
      if (cur) observer.unobserve(cur)
    }
  }, [])

  const modalContent = {
    // TODO: ここどうにかする
    howToPlay:
      'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
    imgUrls,
    blogUrl,
    gameUrl
  }

  const reverse = false

  return (
    <div className="py-64 my-32">
      <div className="z-10" ref={ref} />
      <Animation visible={visible} />
      {visible && (
        <>
          <div className="mx-12 md:mx-24 space-y-16">
            <Title text={title} reverse={reverse} />
            <div
              className={`flex flex-col ${
                reverse ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:gap-24 lg:justify-between items-center lg:items-start <lg:space-y-12`}>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="lg:max-w-180">
                <img src={imgUrl} className="w-full h-auto" />
              </div>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="space-y-12 lg:w-150">
                <div className="whitespace-pre-wrap">{description}</div>
                <Buttons {...modalContent} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Game
