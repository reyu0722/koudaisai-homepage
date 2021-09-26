import { useEffect } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

const ScrollToTop: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { pathname } = useLocation() as any

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
