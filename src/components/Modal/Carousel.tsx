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
    <div className="overflow-x-hidden relative w-full h-full">
      {index != 0 && (
        <img
          src={left}
          className="absolute top-0 bottom-0 left-0 z-50 my-auto"
          onClick={decrement}
        />
      )}
      {index != srcs.length - 1 && (
        <img
          src={right}
          className="absolute top-0 right-0 bottom-0 z-50 my-auto"
          onClick={increment}
        />
      )}
      <div
        className="flex relative h-full carousel"
        style={`left: calc(-100% * ${index})`}>
        {srcs.map((src, i) => (
          <div className="flex flex-none w-full" key={i}>
            <img src={src} className="items-center m-auto max-h-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
