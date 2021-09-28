import Background from './Background'
import Body from './Body'
import { useModalState } from '/@/store/Modal'

const Modal: FC = () => {
  const { isOpen } = useModalState()

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
