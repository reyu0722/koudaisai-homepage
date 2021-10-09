import Illust from '/@/assets/images/illust'
import IllustNoCube from '/@/assets/images/illust-nocube'
import { useStatusState } from '/@/store/Status'

import Cube from './Cube'
import Logo from './Logo'

const BackgroundIllust: FC = () => {
  const { illustChanged: changed } = useStatusState()

  if (changed)
    return (
      <>
        <Illust className="absolute top-0 w-full gradation" />
        <div className="fixed top-0 z-20 w-full h-full bg-white opacity-0 pointer-events-none white-out" />
      </>
    )
  else
    return (
      <>
        <IllustNoCube className="absolute top-0 w-full gradation fade-in-illust" />
        <Cube />
        <Illust className="hidden" />
      </>
    )
}

const Background: FC = () => {
  return (
    <>
      <Logo />
      <BackgroundIllust />
    </>
  )
}

export default Background
