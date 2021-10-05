import Illust from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import Cube from './Cube'
import Logo from './Logo'
import { useStatusState } from '/@/store/Status'

const BackgroundIllust: FC = () => {
  const { illustChanged: changed } = useStatusState()

  // const [clicked, setClicked] = useState(false)
  // const autoScroll = () => setClicked(true)

  /*
  useEffect(() => {
    if (clicked) {
      const timer = setInterval(() => {
        if (window.pageYOffset / window.innerWidth <= CHANGE_OFFSET) {
          // 環境に依存しないようにする
          const o = window.pageYOffset / window.innerWidth
          console.log(o)
          window.scrollBy(0, o * (CHANGE_OFFSET - o) * 5 + 5)
        } else {
          clearInterval(timer)
        }
      }, 0)
      return () => clearInterval(timer)
    }
  }, [clicked])
  */

  if (changed)
    return (
      <>
        <Illust className="absolute top-0 w-full gradation" />
        <div className="fixed top-0 z-20 w-full h-full bg-white opacity-0 pointer-events-none white-out" />
      </>
    )
  else
    return (
      <>
        <IllustNoCube className="absolute top-0 w-full gradation fade-in-illust" />
        <Cube />
        <Illust className="hidden" />
        {/*
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="flex absolute inset-x-0 justify-center items-center mx-auto w-60 h-40 text-black bg-white top-[80vh]"
          onClick={autoScroll}>
          押してね
        </div>
        */}
      </>
    )
}

const Background: FC = () => {
  return (
    <>
      <Logo />
      <BackgroundIllust />
    </>
  )
}

export default Background
