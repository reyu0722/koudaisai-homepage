import { useState } from 'preact/hooks'
import noImage from '/@/assets/images/noimage.jpg'
import illust from '/@/assets/images/illust/img.webp'
import right from '/@/assets/buttons/right.svg'
import left from '/@/assets/buttons/left.svg'

const Carousel: FC = () => {
  const [index, setIndex] = useState(0)

  // TODO: propsで受け取る
  const srcs = [illust, noImage, illust]

  const increment = () => setIndex((index + 1) % srcs.length)
  const decrement = () => setIndex((index - 1 + srcs.length) % srcs.length)

  return (
    <div className="overflow-x-hidden h-1/3 w-full relative">
      {index != 0 && (
        <img
          src={left}
          className="absolute left-0 top-0 bottom-0 my-auto z-50"
          onClick={decrement}
        />
      )}
      {index != srcs.length - 1 && (
        <img
          src={right}
          className="absolute right-0 top-0 bottom-0 my-auto z-50"
          onClick={increment}
        />
      )}
      <div
        className="flex relative h-full carousel"
        style={`left: calc(-100% * ${index})`}>
        {srcs.map(src => (
          <div className="flex-none w-full" key={src}>
            <img src={src} className="h-full mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
