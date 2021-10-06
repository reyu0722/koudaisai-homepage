import { RefObject } from 'preact'
import { useState, useEffect } from 'preact/hooks'

type Props = {
  refs: RefObject<RefObject<HTMLDivElement>[]>
  refObj: RefObject<HTMLDivElement>
}

const ScrollManager: FC<Props> = ({ refs, refObj }) => {
  const [scrollTop, setScrollTop] = useState(0)
  const [upside, setUpside] = useState(false)
  const [touchY, setTouchY] = useState(0)
  const [touchUpside, setTouchUpside] = useState(false)
  const [ok, setOk] = useState(true)

  useEffect(() => {
    const cur = refObj.current

    const handleScroll = (up: boolean) => {
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
      // nextRef?.current?.scrollIntoView()

      nextRef?.current?.scrollIntoView(false)

      setOk(false)

      setTimeout(() => {
        setOk(true)
      }, 1000)
    }

    const listener = () => {
      setScrollTop(now => {
        const newVal = cur?.scrollTop ?? 0
        if (now > newVal) setUpside(true)
        else setUpside(false)
        return newVal
      })
      if (ok) {
        handleScroll(upside)
      }
    }
    cur?.addEventListener('scroll', listener)

    const touchStartListener = (e: TouchEvent) => {
      console.log('touch start')
      setTouchY(e.touches[0].clientY)
    }

    const touchMoveListener = (e: TouchEvent) => {
      console.log('touch move')
      setTouchY(now => {
        const newVal = e.touches[0].clientY
        if (now > newVal) setTouchUpside(false)
        else setTouchUpside(true)
        return newVal
      })
    }

    const touchEndListener = () => {
      console.log('touch end')
      handleScroll(touchUpside)
    }

    cur?.addEventListener('touchstart', touchStartListener, { capture: true })
    cur?.addEventListener('touchmove', touchMoveListener, { capture: true })
    cur?.addEventListener('touchend', touchEndListener, { capture: true })

    // cur?.addEventListener('touch', touchListener, { capture: true })
    return () => {
      cur?.removeEventListener('scroll', listener)
      cur?.removeEventListener('touchstart', touchStartListener, {
        capture: true
      })
      cur?.removeEventListener('touchmove', touchMoveListener, {
        capture: true
      })
      cur?.removeEventListener('touchend', touchEndListener, { capture: true })
      // cur?.removeEventListener('touch', touchListener, { capture: true })
    }
  }, [refObj, ok, upside])

  return null
}

export default ScrollManager
