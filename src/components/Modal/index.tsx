import Background from './Background'
import Body from './Body'
import { useModalState } from '/@/store/Modal'
import { useEffect } from 'preact/hooks'

const Modal: FC = () => {
  const { isOpen } = useModalState()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (isOpen)
    return (
      <>
        <Background />
        <Body />
      </>
    )
  return null
}

export default Modal
