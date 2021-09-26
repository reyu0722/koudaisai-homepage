import { useEffect, useState, useRef } from 'preact/hooks'
import Lay from './Lay'
import Title from './Title'

const Game: FC = () => {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      {
        rootMargin: `-${Math.floor(window.innerHeight) / 3}px`
      }
    )
    if (cur) observer.observe(cur)
    return () => {
      if (cur) observer.unobserve(cur)
    }
  }, [ref])

  return (
    <div className="py-64 my-128">
      <div className="z-3" ref={ref} />
      {visible ? (
        <>
          <Lay />
          <div className="mx-24">
            <Title text="traPDispel" />
            <div className="my-16 flex gap-32">
              <div className="w-96">
                <div className="text-lg mb-12">
                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。
                </div>
                <div className="h-12 outline-blue-400" />
              </div>
              <div className="outline-white flex-1"></div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Game
