import HeaderLogo from '/@/assets/images/header-logo'
import { Link } from 'wouter-preact'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-between top-0 sticky h-20 bg-background z-10 w-full ${className}`}>
      <HeaderLogo className="ml-6 h-3 md:h-6" />
      <div className="flex flex-row gap-12 justify-between items-center mr-6 h-full">
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
