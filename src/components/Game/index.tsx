import { useEffect, useState, useRef } from 'preact/hooks'
import ShootingStar from './ShootingStar'

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
    <div className="py-32">
      <div className="z-3" ref={ref} />
      {visible ? (
        <>
          <div className="text-6xl text-mypurple">traPDispel </div>
          <div className="my-8 flex gap-32">
            <div className="w-96">
              <div className="text-lg mb-12">
                ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。
              </div>
              <div className="h-12 outline-blue-400" />
            </div>
            <div className="outline-white flex-1"></div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default Game
