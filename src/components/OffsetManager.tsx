import { RefObject } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import { games } from '/@/assets/data'
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
      [0]
        .concat(
          scrollRefs.current?.map(ref => {
            const el = ref.current
            if (!el) return 0
            return el.offsetTop / (cur.scrollHeight - cur.offsetHeight)
          }) ?? []
        )
        .concat(1)
    )
  }, [scrollRefs, ref, status])

  const getPercentage = () =>
    (offset * (ref.current?.clientWidth ?? 0) * 100) /
    ((ref.current?.scrollHeight ?? 1) - (ref.current?.offsetHeight ?? 0))

  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div
      className={
        'fixed inset-y-0 right-10 z-30 my-auto w-4 h-[70vh] transition duration-1000 ' +
        (status.headerVisible ? '' : 'opacity-0')
      }>
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="absolute inset-0 mx-auto h-full bg-[#efefef] w-[4px]" />
      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className="absolute inset-0 mx-auto h-full bg-[#A5E7F5] w-[4px]"
        style={{
          height: `${getPercentage()}%`,
          boxShadow: '0px 0px 5px #8DC3CE'
        }}
      />
      {contentHeights.map((offsetTop, i) => {
        return (
          <div key={i}>
            <a
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="absolute right-5 mr-1 text-sm leading-none text-right whitespace-nowrap select-none text-mypurple"
              style={{ top: `${offsetTop * 100}%` }}
              onClick={() =>
                ref.current?.scrollTo({
                  top:
                    offsetTop *
                    (ref.current.scrollHeight - ref.current.offsetHeight),
                  behavior: 'smooth'
                })
              }>
              {i === 0 ? 'TOP' : games[i - 1]?.title ?? ''}
            </a>
            <div
              className={
                'absolute inset-0 z-10 w-4 h-4 rounded-lg hover:bg-[#DCF9FF] ' +
                (getPercentage() + 1 >= offsetTop * 100
                  ? 'bg-[#A5E7F5]'
                  : 'bg-[#efefef]')
              }
              style={{
                top: `${offsetTop * 100}%`,
                boxShadow:
                  getPercentage() + 1 >= offsetTop * 100
                    ? '0px 0px 10px #8DC3CE'
                    : ''
              }}
              onClick={() =>
                ref.current?.scrollTo({
                  top:
                    offsetTop *
                    (ref.current.scrollHeight - ref.current.offsetHeight),
                  behavior: 'smooth'
                })
              }
            />
          </div>
        )
      })}
    </div>
  )
}

export default OffsetManager
