import { useEffect, useRef, useState } from 'preact/hooks'

import Frame from './Frame'

const options = {
  rootMargin: `-20% 0px -20% 0px`
}

type Props = {
  image: string
  launcher?: boolean
}

const Image: FC<Props> = ({ image, launcher }) => {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true)
      else setActive(false)
    }, options)
    if (cur) observer.observe(cur)
    return () => {
      if (cur) observer.unobserve(cur)
    }
  }, [])

  const getClass = () =>
    'relative z-3 right-[1.6%] h-auto transition-all duration-500 ease-in-out' +
    (active ? ' -top-2 md:-top-3 ' : ' -top-1 md:-top-2')
  return (
    <>
      <div ref={ref} />
      <Frame
        className="absolute md:top-2 h-auto top-[6px] w-[97%]"
        color={launcher ? '#f2518b' : undefined}
      />
      <Frame
        className="absolute top-3 md:top-5 h-auto w-[97%]"
        color={launcher ? '#f2518b' : undefined}
      />
      <img src={image} className={getClass()} />
    </>
  )
}

export default Image
