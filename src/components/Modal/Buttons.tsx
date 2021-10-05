/* eslint-disable tailwindcss/no-custom-classname */
import Blog from '/@/components/Button/Blog'
import PlayNowDark from '/@/components/Button/PlayNowDark'

type Props = {
  blogUrl: string
  gameUrl: string
}

const Buttons: FC<Props> = ({ blogUrl, gameUrl }) => {
  return (
    <div className="flex <md:flex-col <md:gap-4 md:justify-between <md:items-center w-full h-full">
      <Blog url={blogUrl} />
      <PlayNowDark url={gameUrl} />
    </div>
  )
}

export default Buttons
