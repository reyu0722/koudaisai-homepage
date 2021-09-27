import Header from '/@/components/Header'
import Footer from '/@/components/Footer'
import Game from '/@/components/Game'
import Modal from '/@/components/Modal'
import ScrollToTop from '/@/components/ScrollToTop'

const Games: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Modal />
      <Header />
      <div className="overflow-hidden">
        <div className="ml-24 mr-48 mt-24">
          <div className="ml-12 text-xl">About</div>
          <div className="mt-12 mb-18 text-6xl text-mypurple">
            World of Games
          </div>
          <div className="text-lg">
            ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ。
          </div>
          <div className="my-128" />
        </div>

        <Game />
        <Game />
        {/* テスト用 */}
        <div className="py-400"> </div>
        <Footer />
      </div>
    </>
  )
}

export default Games
