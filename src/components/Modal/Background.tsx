import { useSetModalState } from '/@/store/Modal'

const Background: FC = () => {
  const setModalState = useSetModalState()
  const closeModal = () =>
    setModalState(() => {
      return {
        isOpen: false,
        howToPlay: '',
        imgUrls: [],
        blogUrl: '',
        gameUrl: ''
      }
    })
  return (
    <div
      className="fixed z-20 w-full h-full bg-black opacity-50"
      onClick={closeModal}
    />
  )
}

export default Background
