import { useState, useEffect } from 'preact/hooks'
import Header from '/@/components/Header'

type Props = {
  offset: number
}

const AnimationHeader: FC<Props> = ({ offset }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // イラストが切り替わるところより下までスクロールしたらHeaderが出てくる
    // ここの値は適当
    if (!visible && offset > 0.9) setVisible(true)
  }, [offset, visible])

  if (visible) return <Header className="header-animation" />
  else return null
}

export default AnimationHeader
