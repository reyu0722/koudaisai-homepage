import { useSetModalState } from '/@/store/Modal'
import playButton from '/@/assets/buttons/playnow.svg'
import playButtonHover from '/@/assets/buttons/playnow-hover.svg'
import moreButton from '/@/assets/buttons/more.svg'
import moreButtonHover from '/@/assets/buttons/more-hover.svg'

type Props = {
  howToPlay: string
  imgUrls: string[]
  blogUrl: string
  gameUrl: string
}

const Buttons: FC<Props> = ({ howToPlay, imgUrls, blogUrl, gameUrl }) => {
  const setModalState = useSetModalState()

  const openModal = () =>
    setModalState(() => {
      return {
        isOpen: true,
        howToPlay,
        imgUrls,
        blogUrl,
        gameUrl
      }
    })

  return (
    <div className="flex justify-between h-12">
      <img
        src={playButton}
        onMouseOver={e => (e.currentTarget.src = playButtonHover)}
        onMouseOut={e => (e.currentTarget.src = playButton)}
      />
      <img
        src={moreButton}
        onMouseOver={e => (e.currentTarget.src = moreButtonHover)}
        onMouseOut={e => (e.currentTarget.src = moreButton)}
        onClick={openModal}
      />
    </div>
  )
}

export default Buttons
