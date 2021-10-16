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

  useEffect(() => {
    const cur = ref.current

    const listener = () => {
      setOffset((ref.current?.scrollTop ?? 0) / (cur?.clientWidth ?? 1))
      if (
        !status.illustChanged &&
        (ref.current?.scrollTop ?? 0) / (cur?.clientWidth ?? 1) >= CHANGE_OFFSET
      ) {
        setStatus({
          illustChanged: true,
          headerVisible: false
        })
      }
      if (
        !status.headerVisible &&
        (ref.current?.scrollTop ?? 0) / (cur?.clientWidth ?? 1) >= HEADER_OFFSET
      ) {
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

    cur?.addEventListener('scroll', listener)
    return () => cur?.removeEventListener('scroll', listener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, status])

  useEffect(() => {
    const el = ref.current
    let d = 1
    let count = 0
    if (!el || status.illustChanged) return

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

  useEffect(() => {
    const cur = ref.current
    setContentHeights(
      scrollRefs.current?.map(ref => {
        const el = ref.current
        if (!el) return 0
        return el.offsetTop / (cur?.scrollHeight ?? 1)
      }) ?? []
    )
  }, [scrollRefs, ref, status])

  return (
    <div className="fixed inset-y-0 right-10 my-auto w-3 h-[70vh] z-100">
      <div className="absolute inset-0 mx-auto h-full bg-[#efefef] w-[3px]" />
      {contentHeights.map((offset, i) => {
        return (
          <div
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
