import { RefObject } from 'preact'

type Props = {
  refs: RefObject<RefObject<HTMLDivElement>[]>
  refObj: RefObject<HTMLDivElement>
}

const ScrollManager: FC<Props> = ({ refs, refObj }) => {
  // refsは順に並んでいることを想定

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
      if (elementTop < now) dest = i
    })

    if (dest === -1) scrollElement.scrollTop = 0
    else scrollElement.scrollTop = refs.current[dest].current?.offsetTop ?? 0
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
      if (elementTop > now) dest = i
    })
    if (dest === -1) scrollElement.scrollTop = scrollElement.scrollHeight
    else scrollElement.scrollTop = refs.current[dest].current?.offsetTop ?? 0
  }

  return (
    <div className="fixed right-0 bottom-0 z-50">
      <div className="flex flex-col w-12 h-24 text-black">
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
