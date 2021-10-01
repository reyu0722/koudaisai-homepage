import { useEffect, useState, useRef } from 'preact/hooks'
import Buttons from './Buttons'
import Animation from './Animation'
import Title from './Title'

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

  return (
    <div className="py-64 my-32">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="z-3" ref={ref} />
      <Animation visible={visible} />
      {visible ? (
        <>
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <div className="mx-24 z-1">
            <Title text={title} />
            <div className="flex flex-col lg:flex-row-reverse lg:gap-24 lg:justify-between items-center lg:items-start my-16">
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="flex-auto w-full lg:max-w-160">
                <img src={imageUrl} className="flex-initial w-full h-full" />
              </div>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="flex-auto <lg:mt-12 mb-12 lg:w-120 lg:max-w-120">
                <div className="mb-12 text-lg">{description}</div>
                <Buttons />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Game
