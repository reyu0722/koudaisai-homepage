import Header from '/@/components/Header'
import { useStatusState } from '/@/store/Status'

const AnimationHeader: FC = () => {
  const { headerVisible: visible } = useStatusState()

  if (visible) return <Header className="header-animation" />
  else return null
}

export default AnimationHeader
