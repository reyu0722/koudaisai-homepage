import { useEffect, useState, useRef } from 'preact/hooks'
import Buttons from './Buttons'
// import Ray from './Ray'
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
    <div className="py-64 my-128">
      <div className="z-3" ref={ref} />
      {visible ? (
        <>
          {/*<Ray />*/}
          <div className="mx-24 z-1">
            <Title text={title} />
            <div className="my-16 flex flex-col lg:flex-row-reverse items-center lg:items-start lg:justify-between lg:gap-24">
              <div className="flex-auto w-full lg:max-w-160">
                <img src={imageUrl} className="flex-initial w-full h-full" />
              </div>
              <div className="flex-auto mb-12 lg:w-120 lg:max-w-120 <lg:mt-12">
                <div className="text-lg mb-12">{description}</div>
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
