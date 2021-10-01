import Background from '/@/components/Background'
import Footer from '/@/components/Footer'
import ScrollToTop from '/@/components/ScrollToTop'

const App: FC = () => {
  return (
    <>
      <ScrollToTop />
      <Background />
      {/* テスト用 */}
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="py-400"> </div>
      <Footer />
    </>
  )
}

export default App
