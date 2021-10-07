import { RefObject } from 'preact'
import { useState, useEffect } from 'preact/hooks'

type Props = {
  refs: RefObject<RefObject<HTMLDivElement>[]>
  refObj: RefObject<HTMLDivElement>
}

const ScrollManager: FC<Props> = ({ refs, refObj }) => {
  const [scrollTop, setScrollTop] = useState(0)
  const [touchY, setTouchY] = useState(0)
  const [touchUpside, setTouchUpside] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const scroll = () => {
      if (!scrolling) return

      const start = refObj.current?.scrollTop ?? 0
      const end = scrollY
      const delta = Math.ceil((end - start) / 20 + Math.sign(end - start) * 5)
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
          setTimeout(scroll, 20)
        }
      }
    }

    setTimeout(scroll, 20)
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
        if (up && curTop > viewTop && curTop < viewBottom && i != 0) {
          console.log(curTop, curTop + cur.offsetHeight, viewTop)
          index = i
        }

        // 下にスクロールした場合
        if (
          !up &&
          curTop + cur.offsetHeight > viewTop &&
          curTop + cur.offsetHeight < viewBottom &&
          i != (refs?.current ?? []).length - 1
        ) {
          console.log(curTop, curTop + cur.offsetHeight, viewBottom)
          index = i
        }

        if (index != -1) console.log('i:', i)
      })

      if (index == -1) return

      if (up) index--
      else index++

      if (index < 0 || index >= (refs.current ?? []).length) return

      console.log(index)

      const nextRef = (refs.current ?? [null])[index]

      setScrolling(true)
      setScrollY(
        nextRef?.current?.offsetTop ?? 0 /* +
          (nextRef?.current?.offsetHeight ?? 0) -
          (refObj.current?.offsetHeight ?? 0) */
      )
    }

    const listener = () => {
      const newVal = cur?.scrollTop ?? 0
      setScrollTop(newVal)
      handleScroll(scrollTop > newVal)
    }

    /*

    const touchStartListener = (e: TouchEvent) => {
      console.log('touch start')
      setTouchY(e.touches[0].clientY)
    }

    const touchMoveListener = (e: TouchEvent) => {
      console.log('touch move')
      const newVal = e.touches[0].clientY
      if (touchY > newVal) setTouchUpside(false)
      else setTouchUpside(true)
      setTouchY(newVal)
    }

    const touchEndListener = () => {
      console.log('touch end')
      handleScroll(touchUpside)
    }
		*/

    if (!scrolling) {
      cur?.addEventListener('scroll', listener)
      // cur?.addEventListener('touchstart', touchStartListener)
      // cur?.addEventListener('touchmove', touchMoveListener)
      // cur?.addEventListener('touchend', touchEndListener)
    }

    return () => {
      cur?.removeEventListener('scroll', listener)
      // cur?.removeEventListener('touchstart', touchStartListener)
      // cur?.removeEventListener('touchmove', touchMoveListener)
      // cur?.removeEventListener('touchend', touchEndListener)
    }
  }, [scrollTop, scrolling, touchUpside, touchY, refObj, refs])

  return null
}

export default ScrollManager
