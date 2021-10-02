import Header from '/@/components/Header'
import Footer from '/@/components/Footer'
import Game from '/@/components/Game'
import Modal from '/@/components/Modal'
import ScrollToTop from '/@/components/ScrollToTop'
import { ModalStateProvider } from '/@/store/Modal'
import noImage from '/@/assets/images/noimage.jpg'
import games from '/@/assets/data/games'

const Games: FC = () => {
  const testDescription =
    'ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。'
  return (
    <ModalStateProvider>
      <ScrollToTop />
      <Modal />
      <Header />
      <div className="overflow-hidden">
        <div className="mx-12 mt-24 md:mr-48 md:ml-24">
          <div className="ml-12 text-xl">About</div>
          {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
          <div className="mt-12 text-6xl mb-18 text-mypurple">
            World of Games
          </div>
          <div className="text-lg">
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
        <Footer />
      </div>
    </ModalStateProvider>
  )
}

export default Games
