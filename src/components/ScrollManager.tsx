import { RefObject } from 'preact'
import { useState, useEffect } from 'preact/hooks'

type Props = {
  refs: RefObject<RefObject<HTMLDivElement>[]>
  refObj: RefObject<HTMLDivElement>
}

const ScrollManager: FC<Props> = ({ refs, refObj }) => {
  const [scrollTop, setScrollTop] = useState(0)
  const [scrolling, setScrolling] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const scroll = () => {
      if (!scrolling) return

      const start = refObj.current?.scrollTop ?? 0
      const end = scrollY
      const delta = Math.ceil((end - start) / 50 + Math.sign(end - start) * 2)
      if (refObj.current) {
        if (
          (start < end && start + delta >= end) ||
          (start > end && start + delta <= end)
        ) {
          refObj.current.scrollTop = end
          console.log('finish')
          setScrollTop(refObj.current.scrollTop)
          setScrolling(false)
        } else {
          refObj.current.scrollTop += delta
          setTimeout(scroll, 0)
        }
      }
    }

    setTimeout(scroll, 0)
    return
  }, [scrollY, scrolling, refObj])

  useEffect(() => {
    const cur = refObj.current

    const handleScroll = (up: boolean) => {
      if (scrolling) return
      const viewTop = cur?.scrollTop ?? 0
      const viewBottom = viewTop + (cur?.offsetHeight ?? 0)
      console.log(viewTop, viewBottom)

      let index = -1

      refs.current?.forEach((ref, i) => {
        const cur = ref.current
        if (!cur || cur.offsetHeight == 0 || index != -1) return

        const curTop = cur.offsetTop ?? 0
        // 上にスクロールした場合
        if (up && curTop > viewTop && curTop < viewBottom && i != 0) index = i

        // 下にスクロールした場合
        if (
          !up &&
          curTop + cur.offsetHeight > viewTop &&
          curTop + cur.offsetHeight < viewBottom &&
          i != (refs?.current ?? []).length - 1
        )
          index = i

        if (index != -1) console.log('i:', i)
      })

      if (index == -1) return

      if (up) index--
      else index++

      if (index < 0 || index >= (refs.current ?? []).length) return

      const nextRef = (refs.current ?? [null])[index]

      setScrolling(true)
      setScrollY(nextRef?.current?.offsetTop ?? 0)
    }

    const listener = () => {
      const newVal = cur?.scrollTop ?? 0
      setScrollTop(newVal)

      handleScroll(scrollTop > newVal)
    }

    const stopScroll = (e: Event) => e.preventDefault()

    if (!scrolling) {
      cur?.addEventListener('scroll', listener)
    } else {
      cur?.addEventListener('scroll', stopScroll)
    }

    return () => {
      cur?.removeEventListener('scroll', listener)
      cur?.removeEventListener('scroll', stopScroll)
    }
  }, [scrollTop, scrolling, refObj, refs])

  return null
}

export default ScrollManager
