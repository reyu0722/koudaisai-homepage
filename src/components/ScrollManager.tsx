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
      const delta = Math.ceil((end - start) / 20 + Math.sign(end - start))
      if (refObj.current) {
        if (
          (start < end && start + delta >= end) ||
          (start > end && start + delta <= end)
        ) {
          refObj.current.scrollTop = end
          console.log('finish')
          setScrolling(false)
          setScrollTop(refObj.current.scrollTop)
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
      console.log(up)
      const top = cur?.scrollTop ?? 0
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
          !up &&
          height < top &&
          height + cur.offsetHeight > top &&
          i != (refs?.current ?? []).length - 1
        ) {
          index = i
        }

        // 下にはみ出た場合
        if (
          up &&
          height < bottom &&
          height + cur.offsetHeight > top &&
          i != 0
        ) {
          index = i
        }
        if (index != -1) console.log('i:', i)
        height += cur.offsetHeight
      })

      if (index == -1) return

      if (up) index--
      else index++

      if (index < 0 || index >= (refs.current ?? []).length) return

      console.log(index)

      const nextRef = (refs.current ?? [null])[index]

      setScrolling(true)
      setScrollY(nextRef?.current?.offsetTop ?? 0)
    }

    const listener = () => {
      const newVal = cur?.scrollTop ?? 0
      console.log(scrollTop, newVal)
      console.log('upside:', scrollTop > newVal)
      setScrollTop(newVal)
      handleScroll(scrollTop > newVal)
    }

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

    if (!scrolling) {
      cur?.addEventListener('scroll', listener)
      cur?.addEventListener('touchstart', touchStartListener)
      cur?.addEventListener('touchmove', touchMoveListener)
      cur?.addEventListener('touchend', touchEndListener)
    }

    return () => {
      cur?.removeEventListener('scroll', listener)
      cur?.removeEventListener('touchstart', touchStartListener)
      cur?.removeEventListener('touchmove', touchMoveListener)
      cur?.removeEventListener('touchend', touchEndListener)
    }
  }, [scrollTop, scrolling, touchUpside, touchY, refObj, refs])

  return null
}

export default ScrollManager
