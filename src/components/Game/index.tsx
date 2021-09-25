import { useInView } from 'react-intersection-observer'
import ShootingStar from './ShootingStar'

const Game: FC = () => {
  const [ref, inView] = useInView({
    rootMargin: `-${Math.floor(window.innerHeight / 3)}px`,
    triggerOnce: true
  })
  return (
    <div className="py-32">
      <div className="z-3" ref={ref} />
      {inView ? (
        <>
          <ShootingStar />
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
