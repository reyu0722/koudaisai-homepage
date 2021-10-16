import { createRef, RefObject } from 'preact'
import { useRef } from 'preact/hooks'

import { games, description } from '/@/assets/data'
import Background from '/@/components/Background'
import AnimationHeader from '/@/components/Background/AnimationHeader'
import Footer from '/@/components/Footer'
import Game from '/@/components/Game'
import Modal from '/@/components/Modal'
import OffsetManager from '/@/components/OffsetManager'
import Provider from '/@/store'

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  const gameRefs = useRef<RefObject<HTMLDivElement>[]>([])

  games.forEach((_, index) => {
    gameRefs.current[index] = createRef<HTMLDivElement>()
  })

  return (
    <>
      <Provider>
        <div className="fixed w-full h-full">
          <AnimationHeader />
          <div
            className="overflow-x-hidden overflow-y-auto relative w-full h-full"
            style="overflow-y: overlay"
            ref={ref}>
            <OffsetManager refObj={ref} scrollRefs={gameRefs} />
            <Modal />
            <Background />
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <div className="py-[70vw]"> </div>

            <div className="text-lg md:text-2xl">
              <div className="pt-32 mx-6 sm:mx-12 md:mr-48 md:ml-24 mb-160">
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <div className="mt-12 text-6xl mb-18 text-mypurple">
                  World of Games
                </div>
                <div>{description}</div>
              </div>
              <div className="my-60" />
              {games.map((game, i) => (
                <div ref={gameRefs.current[i]} key={game.title}>
                  <Game game={game} reverse={false} />
                </div>
              ))}
              <div className="py-20"> </div>
            </div>

            <Footer />
          </div>
        </div>
      </Provider>
    </>
  )
}

export default App
