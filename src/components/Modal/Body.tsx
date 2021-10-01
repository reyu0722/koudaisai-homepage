/* eslint-disable tailwindcss/no-custom-classname */
import Buttons from './Buttons'
import Carousel from './Carousel'
import Decorations from './Decorations'

const Body: FC = () => {
  return (
    <div className="fixed inset-0 z-30 m-auto text-black rounded-6xl bg-[#E9FAFF] max-w-[80vw] max-h-[80vh]">
      <div className="overflow-hidden relative w-full h-full">
        <Decorations />
        <div className="relative z-40 p-20 w-full h-full">
          <div className="text-4xl font-bold">あそびかた</div>
          <div className="grid grid-cols-2 grid-rows-4 gap-12 justify-between mt-12 h-[calc(100%-5rem)]">
            <div className="row-span-4">
              ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </div>
            <div className="row-span-3">
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
