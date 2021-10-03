import HeaderLogo from '/@/assets/images/header-logo'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex sticky top-0 z-10 justify-between items-center pr-12 pl-6 w-full h-20 bg-background ${className}`}>
      <HeaderLogo className="h-3 md:h-6" />
    </div>
  )
}

export default Header
