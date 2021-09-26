import WoG from '/@/assets/images/logo'
import WoGBefore from '/@/assets/images/logo-before'

const Logo: FC = () => {
  return (
    <>
      <WoG className="absolute top-[13vw] left-[7vw] w-[45vw] fade-in-wog z-2" />
      <WoGBefore className="absolute top-[13vw] left-[7vw] w-[45vw] z-2" />
    </>
  )
}

export default Logo
