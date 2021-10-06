import { useState } from 'preact/hooks'

import left from '/@/assets/buttons/left.svg'
import right from '/@/assets/buttons/right.svg'

type Props = {
  images: string[]
}

const Carousel: FC<Props> = ({ images }) => {
  const [index, setIndex] = useState(0)

  const increment = () => setIndex((index + 1) % images.length)
  const decrement = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <div className="overflow-x-hidden relative w-full h-full">
      {index != 0 && (
        <img
          src={left}
          className="absolute inset-y-0 left-0 z-50 my-auto"
          onClick={decrement}
        />
      )}
      {index != images.length - 1 && (
        <img
          src={right}
          className="absolute inset-y-0 right-0 z-50 my-auto"
          onClick={increment}
        />
      )}
      <div
        className="flex relative h-full carousel"
        style={`left: calc(-100% * ${index})`}>
        {images.map((src, i) => (
          <div className="flex flex-none w-full" key={i}>
            <img src={src} className="items-center m-auto max-h-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
