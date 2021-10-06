import { useEffect } from 'preact/hooks'

import { useModalState } from '/@/store/Modal'

import Background from './Background'
import Body from './Body'

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
