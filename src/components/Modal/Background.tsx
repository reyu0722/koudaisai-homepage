import { useSetModalState } from '/@/store/Modal'

const Background: FC = () => {
  const setModalState = useSetModalState()
  const closeModal = () =>
    setModalState(() => {
      return {
        isOpen: false,
        explanation: '',
        imgUrls: [],
        blogUrl: '',
        gameUrl: ''
      }
    })
  return (
    <div
      className="fixed w-full h-full bg-black z-20 opacity-50"
      onClick={closeModal}
    />
  )
}

export default Background
