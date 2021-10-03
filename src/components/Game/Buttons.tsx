import PlayNow from '/@/components/Button/PlayNow'
import More from '/@/components/Button/More'

type Props = {
  howToPlay: string
  imgUrls: string[]
  blogUrl: string
  gameUrl: string
}

const Buttons: FC<Props> = ({ howToPlay, imgUrls, blogUrl, gameUrl }) => {
  const newModalState = {
    isOpen: true,
    howToPlay,
    imgUrls,
    blogUrl,
    gameUrl
  }

  return (
    <div className="flex gap-3 w-full h-12">
      <PlayNow url={gameUrl} />
      <More {...newModalState} />
    </div>
  )
}

export default Buttons
