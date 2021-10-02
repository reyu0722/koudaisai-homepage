import HeaderLogo from '/@/assets/images/header-logo'
import { Link } from 'wouter-preact'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex sticky top-0 z-10 justify-between items-center pr-12 pl-6 w-full h-20 bg-background ${className}`}>
      <HeaderLogo className="h-3 md:h-6" />
      <div className="flex flex-row gap-12 justify-between items-center">
        <Link href="/" className="text-xl text-white">
          Home
        </Link>
        <Link href="/games" className="text-xl text-white">
          Games
        </Link>
      </div>
    </div>
  )
}

export default Header
