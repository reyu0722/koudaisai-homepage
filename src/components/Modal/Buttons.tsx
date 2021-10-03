/* eslint-disable tailwindcss/no-custom-classname */
import Blog from '/@/components/Button/Blog'
import PlayNowDark from '/@/components/Button/PlayNowDark'

type Props = {
  blogUrl: string
  gameUrl: string
}

const Buttons: FC<Props> = ({ blogUrl, gameUrl }) => {
  return (
    <div className="flex justify-between w-full h-full">
      <Blog url={blogUrl} />

      <PlayNowDark url={gameUrl} />
    </div>
  )
}

export default Buttons
