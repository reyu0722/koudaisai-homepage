import { RefObject } from 'preact'
import { useState, useEffect } from 'preact/hooks'

type Props = {
  refs: RefObject<RefObject<HTMLDivElement>[]>
  refObj: RefObject<HTMLDivElement>
}

const ScrollManager: FC<Props> = ({ refs, refObj }) => {
  const [scrollTop, setScrollTop] = useState(0)
  const [upside, setUpside] = useState(false)
  const [ok, setOk] = useState(true)

  useEffect(() => {
    const top = scrollTop
    const bottom = top + (refObj.current?.offsetHeight ?? 0)

    const firstRef = (refs.current ?? [null])[0]

    let height =
      (firstRef?.current?.offsetTop ?? 0) - (refObj.current?.offsetTop ?? 0)

    let index = -1

    refs.current?.forEach((ref, i) => {
      const cur = ref.current
      if (!cur || cur.offsetHeight == 0 || index != -1) return

      // 上にはみ出た場合
      if (
        !upside &&
        height < top &&
        height + cur.offsetHeight > top &&
        i != (refs?.current ?? []).length - 1
      ) {
        index = i
      }

      // 下にはみ出た場合
      if (
        upside &&
        height < bottom &&
        height + cur.offsetHeight > top &&
        i != 0
      ) {
        index = i
      }
      height += cur.offsetHeight
    })

    if (index == -1) return

    if (upside) index--
    else index++

    if (index < 0 || index >= (refs.current ?? []).length) return

    const nextRef = (refs.current ?? [null])[index]

    nextRef?.current?.scrollIntoView(false)

    setOk(false)
    setTimeout(() => {
      setOk(true)
    }, 1000)
  }, [scrollTop, refObj, refs, upside])

  useEffect(() => {
    const cur = refObj.current
    const listener = () => {
      if (ok) {
        setScrollTop(now => {
          const newVal = cur?.scrollTop ?? 0
          if (now > newVal) setUpside(true)
          else setUpside(false)
          return newVal
        })
      }
    }
    if (ok) cur?.addEventListener('scroll', listener)
    return () => cur?.removeEventListener('scroll', listener)
  }, [refObj, ok])
  return null
}

export default ScrollManager
