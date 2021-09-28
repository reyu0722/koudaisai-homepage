import { useSetModalState } from '/@/store/Modal'
import playButton from '/@/assets/buttons/playnow.svg'
import moreButton from '/@/assets/buttons/more.svg'

const Buttons: FC = () => {
  const setModalState = useSetModalState()
  const openModal = () =>
    setModalState(s => {
      return {
        isOpen: true,
        explanation: s.explanation,
        imgUrls: s.imgUrls,
        blogUrl: s.blogUrl,
        gameUrl: s.gameUrl
      }
    })

  return (
    <div className="flex justify-between">
      <img src={playButton} />
      <img src={moreButton} onClick={openModal} />
    </div>
  )
}

export default Buttons
