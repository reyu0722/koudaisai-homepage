import { useState, useEffect } from 'preact/hooks'
import HeaderLogo from '/@/assets/images/header-logo'

const Header: FC = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const listener = () => {
      // イラストが切り替わるところより下までスクロールしたらHeaderが出てくる
      // ここの値は適当
      if (window.pageYOffset / window.innerWidth > 0.9) setVisible(true)
    }
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])
  if (visible)
    return (
      <div className="flex items-center top-0 sticky h-20 bg-background z-10 header-animation">
        <HeaderLogo className="ml-6 h-6" />
      </div>
    )
  else return <></>
}

export default Header
