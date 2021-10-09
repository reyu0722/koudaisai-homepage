import HeaderLogo from '/@/assets/images/header-logo'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <div
      className={`absolute flex top-0 z-10 justify-between items-center pr-12 pl-6 w-full h-12 md:h-20 bg-background ${className}`}>
      <HeaderLogo className="h-4 md:h-8" />
    </div>
  )
}

export default Header
