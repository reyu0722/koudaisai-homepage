import { useState, useEffect } from 'preact/hooks'
import Header from '/@/components/Header'

const AnimationHeader: FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const listener = () => {
      // イラストが切り替わるところより下までスクロールしたらHeaderが出てくる
      // ここの値は適当
      if (window.pageYOffset / window.innerWidth > 0.9) setVisible(true)
    }
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [])

  if (visible) return <Header className="header-animation" />
  else return null
}

export default AnimationHeader
