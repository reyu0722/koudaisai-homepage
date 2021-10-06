import Frame from './Frame'
import dummy from '/@/assets/images/dummy.svg'
import { useEffect, useRef, useState } from 'preact/hooks'

const options = {
  rootMargin: `-20% 0px -20% 0px`
}

const Image: FC = () => {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      console.log('observed')
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
      <Frame className="absolute top-5 w-full h-auto" />
      <img src={dummy} className={getClass()} />
    </>
  )
}

export default Image
