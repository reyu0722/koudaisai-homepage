import { createRef, RefObject } from 'preact'
import { useRef } from 'preact/hooks'

import games from '/@/assets/data/games'
import Background from '/@/components/Background'
import AnimationHeader from '/@/components/Background/AnimationHeader'
import Footer from '/@/components/Footer'
import Game from '/@/components/Game'
import Modal from '/@/components/Modal'
import OffsetManager from '/@/components/OffsetManager'
import ScrollManager from '/@/components/ScrollManager'
import Provider from '/@/store'

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  const gameRefs = useRef<RefObject<HTMLDivElement>[]>([])

  games.forEach((_, index) => {
    gameRefs.current[index] = createRef<HTMLDivElement>()
  })

  gameRefs.current[games.length] = createRef<HTMLDivElement>()

  return (
    <>
      <Provider>
        <div className="fixed w-full h-full">
          <AnimationHeader />
          <div
            className="overflow-x-hidden overflow-y-auto relative w-full h-full"
            style="overflow-y: overlay"
            ref={ref}>
            <OffsetManager refObj={ref} />
            <ScrollManager refs={gameRefs} refObj={ref} />
            <Modal />
            <Background />
            {/* テスト用 */}
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <div className="py-[70vw]"> </div>

            <div className="text-lg md:text-2xl">
              <div
                className="pt-60 mx-12 md:mr-48 md:ml-24 pb-120"
                ref={gameRefs.current[0]}>
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <div className="mt-12 text-6xl mb-18 text-mypurple">
                  World of Games
                </div>
                <div>
                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。
                </div>
              </div>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="my-60" />
              {games.map((game, i) => (
                <div ref={gameRefs.current[i + 1]} key={game.title}>
                  <Game {...game} />
                </div>
              ))}
              {/* テスト用 */}
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
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
