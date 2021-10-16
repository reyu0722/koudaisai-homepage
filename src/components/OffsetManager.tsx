import { RefObject } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import { useOffsetState, useSetOffsetState } from '/@/store/Offset'
import { useStatusState, useSetStatusState } from '/@/store/Status'

type Props = {
  refObj: RefObject<HTMLDivElement>
  scrollRefs: RefObject<RefObject<HTMLDivElement>[]>
}

const CHANGE_OFFSET = 0.64
const HEADER_OFFSET = 0.9

const OffsetManager: FC<Props> = ({ refObj: ref, scrollRefs }) => {
  const offset = useOffsetState()
  const setOffset = useSetOffsetState()

  const status = useStatusState()
  const setStatus = useSetStatusState()

  const [contentHeights, setContentHeights] = useState<number[]>([])

  // イラストとヘッダーのタイミング
  useEffect(() => {
    const cur = ref.current
    if (!cur) return

    const listener = () => {
      const nowOffset = cur.scrollTop / cur.clientWidth
      setOffset(nowOffset)
      if (!status.illustChanged && nowOffset >= CHANGE_OFFSET) {
        setStatus({
          illustChanged: true,
          headerVisible: false
        })
      }
      if (!status.headerVisible && nowOffset >= HEADER_OFFSET) {
        setTimeout(
          () =>
            setStatus({
              illustChanged: true,
              headerVisible: true
            }),
          210
        )
      }
    }

    cur.addEventListener('scroll', listener)
    return () => cur.removeEventListener('scroll', listener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, status])

  // 最初の自動スクロール
  useEffect(() => {
    const el = ref.current

    if (!el || status.illustChanged) return

    let d = 1
    let count = 0

    const preventListener = (e: Event) => e.preventDefault()

    el.addEventListener('wheel', preventListener)
    el.addEventListener('touchmove', preventListener)

    const timer = setInterval(() => {
      if (count < 100) {
        count++
        return
      }
      el.scrollTop += d
      d += 0.3
    }, 10)
    return () => {
      clearInterval(timer)
      el.removeEventListener('wheel', preventListener)
      el.removeEventListener('touchmove', preventListener)
    }
  }, [ref, status])

  // 横のスクロールするやつ
  useEffect(() => {
    const cur = ref.current
    if (!cur) return

    setContentHeights(
      scrollRefs.current?.map(ref => {
        const el = ref.current
        if (!el) return 0
        return el.offsetTop / cur.scrollHeight
      }) ?? []
    )
  }, [scrollRefs, ref, status])

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="fixed inset-y-0 right-10 my-auto w-3 h-[70vh] z-100">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="absolute inset-0 mx-auto h-full bg-[#efefef] w-[3px]" />
      {contentHeights.map((offset, i) => {
        return (
          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="absolute inset-0 z-10 m-auto w-3 h-3 bg-[#efefef]"
            style={{
              top: `${offset * 100}%`
            }}
            key={i}
            onClick={() =>
              ref.current?.scrollTo({
                top: offset * (ref.current.scrollHeight ?? 1),
                behavior: 'smooth'
              })
            }
          />
        )
      })}
    </div>
  )
}

/* Ellipse 13 */
/*
position: absolute;
width: 12.22px;
height: 12.22px;
left: 1364.39px;
top: 487.96px;

background: #EFEFEF;
border-radius: 52.5px;
*/

export default OffsetManager
