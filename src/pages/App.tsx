import Background from '/@/components/Background'
import Footer from '/@/components/Footer'
import Game from '/@/components/Game'
import Modal from '/@/components/Modal'
import { ModalStateProvider } from '/@/store/Modal'
import { ChangedStateProvider } from '/@/store/Changed'
import games from '/@/assets/data/games'
import AnimationHeader from '/@/components/Background/AnimationHeader'

const App: FC = () => {
  return (
    <>
      <ModalStateProvider>
        <ChangedStateProvider>
          <AnimationHeader />
          <div className="overflow-x-hidden relative w-full h-full">
            <Modal />
            <Background />
            {/* テスト用 */}
            {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
            <div className="py-[70vw]"> </div>

            <div className="overflow-hidden text-lg md:text-2xl">
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
        </ChangedStateProvider>
      </ModalStateProvider>
    </>
  )
}

export default App
