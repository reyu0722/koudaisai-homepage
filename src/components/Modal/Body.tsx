/* eslint-disable tailwindcss/no-custom-classname */
import Buttons from './Buttons'
import Carousel from './Carousel'
import Decorations from './Decorations'
import { useModalState } from '/@/store/Modal'

const Body: FC = () => {
  const { howToPlay, imgUrls, blogUrl, gameUrl } = useModalState()

  return (
    <div className="overflow-hidden fixed inset-0 z-30 m-auto text-black rounded-6xl bg-[#E9FAFF] max-w-[80vw] max-h-[80vh]">
      <Decorations />
      <div className="relative z-40 py-20 px-8 lg:px-20 space-y-6 lg:space-y-12 w-full h-full">
        <div className="<lg:pl-12 text-4xl font-medium">あそびかた</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-6 lg:grid-rows-4 gap-6 lg:gap-12 justify-between h-[calc(100%-5rem)]">
          <div className="row-span-3 lg:row-span-4">{howToPlay}</div>
          <div className="row-span-2 lg:row-span-3 row-start-1">
            <Carousel images={imgUrls} />
          </div>
          <div className="row-span-1">
            <Buttons blogUrl={blogUrl} gameUrl={gameUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
