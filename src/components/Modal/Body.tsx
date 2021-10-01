/* eslint-disable tailwindcss/no-custom-classname */
import Buttons from './Buttons'
import Carousel from './Carousel'
import Decorations from './Decorations'

const Body: FC = () => {
  return (
    <div className="fixed inset-0 z-30 m-auto text-black rounded-6xl bg-[#E9FAFF] max-w-[80vw] max-h-[80vh]">
      <div className="overflow-hidden relative w-full h-full">
        <Decorations />
        <div className="relative z-40 p-20">
          <div className="text-4xl font-bold">あそびかた</div>
          <div className="flex gap-12 justify-between mt-12">
            <div className="w-1/2">
              ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </div>
            <div className="w-1/2">
              <Carousel />
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
