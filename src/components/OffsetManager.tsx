import { RefObject } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { useStatusState, useSetStatusState } from '/@/store/Status'
import { useOffsetState, useSetOffsetState } from '/@/store/Offset'

type Props = {
  refObj: RefObject<HTMLDivElement>
}

const CHANGE_OFFSET = 0.64
const HEADER_OFFSET = 0.9

const OffsetManager: FC<Props> = ({ refObj: ref }) => {
  const offset = useOffsetState()
  const setOffset = useSetOffsetState()

  const status = useStatusState()
  const setStatus = useSetStatusState()

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

  return null
}

export default OffsetManager
