import WoG from '/@/assets/images/logo'
import WoGBefore from '/@/assets/images/logo-before'

const Logo: FC = () => {
  return (
    <>
      <WoG className="absolute top-52 left-28 w-180 fade-in-wog" />
      <WoGBefore className="absolute top-52 left-28 w-180" />
    </>
  )
}

export default Logo
