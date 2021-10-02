/* eslint-disable tailwindcss/no-custom-classname */
import Buttons from './Buttons'
import Carousel from './Carousel'
import Decorations from './Decorations'

const Body: FC = () => {
  return (
    <div className="overflow-hidden fixed inset-0 z-30 m-auto text-black rounded-6xl bg-[#E9FAFF] max-w-[80vw] max-h-[80vh]">
      <div className="relative w-full h-full">
        <Decorations />
        <div className="relative z-40 py-20 px-8 md:px-20 space-y-6 md:space-y-12 w-full h-full">
          <div className="<md:pl-12 text-4xl font-medium">あそびかた</div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-4 gap-6 md:gap-12 justify-between h-[calc(100%-5rem)]">
            <div className="row-span-3 md:row-span-4">
              ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </div>
            <div className="row-span-2 md:row-span-3 row-start-1">
              <Carousel />
            </div>
            <div className="row-span-1">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
