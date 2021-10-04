import Background from '/@/components/Background'
import Footer from '/@/components/Footer'
import Game from '/@/components/Game'
import Modal from '/@/components/Modal'
import { ModalStateProvider } from '/@/store/Modal'
import { ChangedStateProvider } from '/@/store/Changed'
import { useEffect, useRef, useState } from 'preact/hooks'
import games from '/@/assets/data/games'
import AnimationHeader from '/@/components/Background/AnimationHeader'


const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const cur = ref.current
    const listener = () =>
      setOffset((ref.current?.scrollTop ?? 0) / (cur?.clientWidth ?? 1))

    cur?.addEventListener('scroll', listener)
    return () => cur?.removeEventListener('scroll', listener)
  }, [])

  return (
    <>
      <ModalStateProvider>
        <ChangedStateProvider>
          <div className="fixed w-full h-full">
            <AnimationHeader offset={offset} />
            <div
              className="overflow-x-hidden overflow-y-scroll relative w-full h-full"
              ref={ref}>
              <Modal />
              <Background offset={offset} />
              {/* テスト用 */}
              {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
              <div className="py-[70vw]"> </div>

              <div className="overflow-x-hidden overflow-y-scroll text-lg md:text-2xl">
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
        </ChangedStateProvider>
      </ModalStateProvider>
    </>
  )
}

export default App
