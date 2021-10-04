import { RefObject } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import Header from '/@/components/Header'

type Props = {
  refObj: RefObject<HTMLDivElement>
}

const AnimationHeader: FC<Props> = ({ refObj }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const cur = refObj.current
    const listener = () => {
      // イラストが切り替わるところより下までスクロールしたらHeaderが出てくる
      // ここの値は適当
      if ((cur?.scrollTop ?? 0) / (cur?.clientWidth ?? 1) > 0.9)
        setVisible(true)
    }
    cur?.addEventListener('scroll', listener)
    return () => cur?.removeEventListener('scroll', listener)
  }, [refObj])

  if (visible) return <Header className="header-animation" />
  else return null
}

export default AnimationHeader
