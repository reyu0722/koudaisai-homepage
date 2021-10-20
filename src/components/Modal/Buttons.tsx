/* eslint-disable tailwindcss/no-custom-classname */
import Blog from './Button/Blog'
import PlayNowDark from './Button/PlayNowDark'

type Props = {
  blogUrl?: string
  gameUrl: string
}

const Buttons: FC<Props> = ({ blogUrl, gameUrl }) => {
  return (
    <div className="flex <md:flex-col gap-2 md:gap-12 justify-center items-center w-full h-full">
      {blogUrl && <Blog url={blogUrl} />}
      <PlayNowDark url={gameUrl} />
    </div>
  )
}

export default Buttons
