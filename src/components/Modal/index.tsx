import Background from './Background'
import Body from './Body'
import { useModalState } from '/@/store/Modal'

const Modal: FC = () => {
  const modalState = useModalState()

  if (modalState)
    return (
      <>
        <Background />
        <Body />
      </>
    )
  return null
}

export default Modal
