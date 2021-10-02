import { useEffect, useState, useRef } from 'preact/hooks'
import Buttons from './Buttons'
import Animation from './Animation'
import Title from './Title'
import noImage from '/@/assets/images/noimage.jpg'
import illust from '/@/assets/images/illust/img.webp'

type Props = {
  title: string
  description: string
  imageUrl: string
}

const options = {
  rootMargin: `-${Math.floor(window.innerHeight) / 3}px`
}

const Game: FC<Props> = ({ title, description, imageUrl }) => {
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

  // TODO: propsで受け取る
  const modalContent = {
    howToPlay:
      'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
    imgUrls: [noImage, illust, noImage],
    blogUrl: 'https://trap.jp/post/1085/',
    gameUrl: 'https://trapdispel.trap.games/'
  }

  return (
    <div className="py-64 my-32">
      <div className="z-10" ref={ref} />
      <Animation visible={visible} />
      {visible && (
        <>
          <div className="mx-24 space-y-16">
            <Title text={title} />
            <div className="flex flex-col lg:flex-row-reverse lg:gap-24 lg:justify-between items-center lg:items-start <lg:space-y-12">
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="lg:max-w-160">
                <img src={imageUrl} className="w-full h-auto" />
              </div>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="space-y-12 lg:w-120">
                <div className="text-lg">{description}</div>
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
