/* eslint-disable tailwindcss/no-custom-classname */
import { useModalState } from '/@/store/Modal'

import Buttons from './Buttons'
import Carousel from './Carousel'
import Decorations from './Decorations'

const Body: FC = () => {
  const { howToPlay, imgUrls, blogUrl, gameUrl } = useModalState()

  return (
    <div className="overflow-hidden fixed inset-0 z-30 m-auto text-black rounded-6xl bg-[#E9FAFF] max-w-[80vw] max-h-[80vh]">
      <Decorations />
      <div className="relative z-40 md:py-20 px-8 lg:px-20 pt-20 pb-4 space-y-6 lg:space-y-12 w-full h-full">
        <div className="<lg:pl-6 text-4xl font-medium">あそびかた</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-6 lg:gap-12 justify-between grid-rows-7 h-[calc(100%-5rem)]">
          <div className="row-span-2 lg:row-span-4">{howToPlay}</div>
          <div className="lg:col-start-2 row-span-3 row-start-1">
            <Carousel images={imgUrls} />
          </div>
          <div className="row-span-2">
            <Buttons blogUrl={blogUrl} gameUrl={gameUrl} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
