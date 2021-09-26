import LogoImg from '/@/assets/images/logo'
import LogoBeforeImg from '/@/assets/images/logo-before'

const Logo: FC = () => {
  return (
    <>
      <LogoImg className="absolute top-[13vw] left-[7vw] w-[45vw] fade-in-logo z-1" />
      <LogoBeforeImg className="absolute top-[13vw] left-[7vw] w-[45vw] z-1" />
    </>
  )
}

export default Logo
