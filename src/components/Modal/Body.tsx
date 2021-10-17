/* eslint-disable tailwindcss/no-custom-classname */
import { useModalState } from '/@/store/Modal'

import Buttons from './Buttons'
import Carousel from './Carousel'
import Decorations from './Decorations'

const Body: FC = () => {
  const { howToPlay, carouselImages, blogUrl, gameUrl } = useModalState()

  return (
    <div className="overflow-hidden fixed inset-0 z-50 m-auto h-auto text-myblack rounded-4xl md:rounded-6xl bg-[#E9FAFF] w-240 lg:h-160 max-w-[90vw] max-h-[120vw]">
      <Decorations />
      <div className="relative z-40 px-8 <sm:px-8 lg:px-20 pt-20 <sm:pt-12 pb-0 md:pb-10 lg:space-y-8 w-full h-full">
        <div className="relative top-1 left-3 lg:-left-1 text-4xl <sm:text-3xl font-medium">
          プレイ画面
        </div>
        <div className="grid grid-cols-1 grid-rows-6 gap-4 md:gap-8 justify-between h-[calc(100%-5rem)]">
          <div className="row-span-5">
            <Carousel images={carouselImages} />
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
