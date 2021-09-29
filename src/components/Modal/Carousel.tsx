import { useRef, useState } from 'preact/hooks'
import noImage from '/@/assets/images/noimage.jpg'
import illust from '/@/assets/images/illust/img.webp'
import right from '/@/assets/buttons/right.svg'
import left from '/@/assets/buttons/left.svg'

const WIDTH = 480

const Carousel: FC = () => {
  const [index, setIndex] = useState(1)
  const ref = useRef<HTMLDivElement>(null)
  const srcs = [noImage, illust]

  const increment = () => setIndex((index + 1) % srcs.length)
  const decrement = () => setIndex((index - 1 + srcs.length) % srcs.length)

  return (
    <div
      className="h-90 w-120 outline-red-400 overflow-x-hidden relative"
      ref={ref}>
      <img
        src={left}
        className="absolute left-0 top-0 bottom-0 my-auto z-50"
        onClick={decrement}
      />
      <img
        src={right}
        className="absolute right-0 top-0 bottom-0 my-auto z-50"
        onClick={increment}
      />
      <div
        className="flex h-90 w-120 relative"
        style={`left: ${-WIDTH * index}px`}>
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
