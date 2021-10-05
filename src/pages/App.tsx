import Background from '/@/components/Background'
import Footer from '/@/components/Footer'
import Game from '/@/components/Game'
import Modal from '/@/components/Modal'
import Provider from '/@/store'
import { useRef} from 'preact/hooks'
import games from '/@/assets/data/games'
import AnimationHeader from '/@/components/Background/AnimationHeader'
import OffsetManager from '/@/components/OffsetManager'

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <Provider>
        <div className="fixed w-full h-full">
          <AnimationHeader />
          <div
            className="overflow-x-hidden overflow-y-scroll relative w-full h-full"
            ref={ref}>
            <OffsetManager refObj={ref} />
            <Modal />
            <Background />
            {/* テスト用 */}
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <div className="py-[70vw]"> </div>

            <div className="text-lg md:text-2xl">
              <div className="mx-12 mt-24 md:mr-48 md:ml-24">
                {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
                <div className="mt-12 text-6xl mb-18 text-mypurple">
                  World of Games
                </div>
                <div>
                  ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。
                </div>
              </div>
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="my-128" />
              {games.map(game => (
                <Game {...game} key={game.title} />
              ))}
              {/* テスト用 */}
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="py-200"> </div>
            </div>

            <Footer />
          </div>
        </div>
      </Provider>
    </>
  )
}

export default App
