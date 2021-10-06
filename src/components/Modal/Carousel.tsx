import { useState, useRef, useEffect } from 'preact/hooks'

import left from '/@/assets/buttons/left.svg'
import right from '/@/assets/buttons/right.svg'

type Props = {
  images: string[]
}

const Carousel: FC<Props> = ({ images }) => {
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0)

  const increment = () => setIndex((index + 1) % images.length)
  const decrement = () => setIndex((index - 1 + images.length) % images.length)

  const ref = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const res =
      ((containerRef.current?.offsetWidth ?? 1) -
        (ref.current?.offsetWidth ?? 1)) /
      2
    setOffset(res)
  }, [index])

  return (
    <div
      className="overflow-x-hidden relative mx-auto w-full h-full"
      ref={containerRef}>
      {index != 0 && (
        <img
          src={left}
          className="absolute inset-y-0 z-50 my-auto"
          style={`left: ${offset}px`}
          onClick={decrement}
        />
      )}
      {index != images.length - 1 && (
        <img
          src={right}
          className="absolute inset-y-0 right-0 z-50 my-auto"
          style={`right: ${offset}px`}
          onClick={increment}
        />
      )}
      <div
        className="flex relative w-full h-full carousel"
        style={`left: calc(-100% * ${index})`}>
        {images.map((src, i) => (
          <div className="flex flex-none w-full" key={i}>
            <img
              src={src}
              className="object-contain items-center mx-auto"
              ref={i == index ? ref : undefined}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
