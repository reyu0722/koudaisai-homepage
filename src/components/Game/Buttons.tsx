import { useSetModalState } from '/@/store/Modal'
import playButton from '/@/assets/buttons/playnow.svg'
import moreButton from '/@/assets/buttons/more.svg'

const Buttons: FC = () => {
  const setModalState = useSetModalState()
  const openModal = () => setModalState(true)

  return (
    <div className="flex justify-between">
      <img src={playButton} />
      <img src={moreButton} onClick={openModal} />
    </div>
  )
}

export default Buttons
