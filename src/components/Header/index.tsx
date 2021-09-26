import HeaderLogo from '/@/assets/images/header-logo'
import { Link } from 'wouter-preact'

type Props = {
  className?: string
}

const Header: FC<Props> = ({ className }) => {
  return (
    <div
      className={`flex items-center top-0 sticky h-20 bg-background z-100 ${className}`}>
      <HeaderLogo className="ml-6 h-6" />
      <div className="ml-auto mr-24">
        これは仮置き →
        <Link href="/" className="text-white text-xl mx-8">
          Home
        </Link>
        <Link href="/games" className="text-white text-xl mx-8">
          Games
        </Link>
      </div>
    </div>
  )
}

export default Header
