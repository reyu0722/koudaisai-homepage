import { useEffect, useRef, useState } from 'preact/hooks'

import Frame from './Frame'

const options = {
  rootMargin: `-20% 0px -20% 0px`
}

type Props = {
  image: string
}

const Image: FC<Props> = ({ image }) => {
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
    'relative z-3 w-full h-auto transition-all duration-500 ease-in-out' +
    (active ? ' -top-3' : ' -top-1')
  return (
    <>
      <div ref={ref} />
      <Frame className="absolute top-2 w-full h-auto" />
      <Frame className="absolute top-6 w-full h-auto" />
      <img src={image} className={getClass()} />
    </>
  )
}

export default Image
