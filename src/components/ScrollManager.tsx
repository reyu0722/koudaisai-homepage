import { RefObject } from 'preact'
import smoothscroll from 'smoothscroll-polyfill'

type Props = {
  refs: RefObject<RefObject<HTMLDivElement>[]>
  refObj: RefObject<HTMLDivElement>
}

const ScrollManager: FC<Props> = ({ refs, refObj }) => {
  // refsは順に並んでいることを想定

  smoothscroll.polyfill()

  const scrollUp = () => {
    if (!refObj.current) return
    if (!refs.current) return

    const scrollElement = refObj.current
    const now = scrollElement.scrollTop
    let dest = -1
    refs.current.forEach((ref, i) => {
      const cur = ref.current
      if (!cur) return

      const elementTop = cur.offsetTop
      if (elementTop < Math.floor(now)) dest = i
    })

    if (dest === -1) scrollElement.scroll({ top: 0, behavior: 'smooth' })
    else
      scrollElement.scroll({
        top: refs.current[dest].current?.offsetTop ?? 0,
        behavior: 'smooth'
      })
  }

  const scrollDown = () => {
    if (!refObj.current) return
    if (!refs.current) return

    const scrollElement = refObj.current
    const now = scrollElement.scrollTop
    let dest = -1

    refs.current.forEach((ref, i) => {
      if (dest !== -1) return

      const cur = ref.current
      if (!cur) return

      const elementTop = cur.offsetTop
      if (elementTop > Math.ceil(now)) dest = i
    })
    if (dest === -1)
      scrollElement.scroll({
        top: scrollElement.scrollHeight - scrollElement.clientHeight,
        behavior: 'smooth'
      })
    else
      scrollElement.scroll({
        top: refs.current[dest].current?.offsetTop ?? 0,
        behavior: 'smooth'
      })
  }

  return (
    <div className="fixed right-0 bottom-0 z-20">
      {/*eslint-disable-next-line tailwindcss/no-custom-classname*/}
      <div className="flex flex-col w-12 h-24 text-myblack">
        <div className="w-full h-full bg-white" onClick={scrollUp}>
          ↑
        </div>
        <div className="w-full h-full bg-white" onClick={scrollDown}>
          ↓
        </div>
      </div>
    </div>
  )
}

export default ScrollManager
