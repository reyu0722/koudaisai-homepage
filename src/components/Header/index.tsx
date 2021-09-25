import HeaderLogo from '/@/assets/images/header-logo'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex items-center top-0 sticky h-20 bg-background z-10 ${className}`}>
      <HeaderLogo className="ml-6 h-6" />
    </div>
  )
}

export default Header
