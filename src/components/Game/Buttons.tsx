import { useSetModalState } from '/@/store/Modal'
import PlayNow from '/@/components/Button/PlayNow'
import More from '/@/components/Button/More'

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
    <div className="flex gap-3 w-full h-12">
      <PlayNow url={gameUrl} />
      <More />
    </div>
  )
}

export default Buttons
