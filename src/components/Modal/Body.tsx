import Buttons from './Buttons'
import Carousel from './Carousel'
import Decorations from './Decorations'

const Body: FC = () => {
  return (
    <div className="fixed m-auto inset-0 bg-[#E9FAFF] z-30 max-w-[80vw] max-h-[80vh] text-black">
      <Decorations />
      <div className="p-20 relative z-31">
        <div className="text-4xl font-bold">あそびかた</div>
        <div className="flex mt-12 justify-between gap-12">
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
  )
}

export default Body
