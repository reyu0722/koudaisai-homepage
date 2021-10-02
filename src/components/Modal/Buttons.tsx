/* eslint-disable tailwindcss/no-custom-classname */
import blog from '/@/assets/buttons/blog.svg'
import playDark from '/@/assets/buttons/play-dark.svg'

type Props = {
  blogUrl: string
  gameUrl: string
}

const Buttons: FC<Props> = ({ blogUrl, gameUrl }) => {
  const openBlog = () => window.open(blogUrl, '_blank')
  const openGame = () => window.open(gameUrl, '_blank')

  return (
    <div className="flex justify-between w-full h-full">
      <img
        src={blog}
        className="flex-1 w-0 max-h-full max-w-60"
        onClick={openBlog}
      />
      <img
        src={playDark}
        className="flex-1 w-0 max-h-full max-w-60"
        onClick={openGame}
      />
    </div>
  )
}

export default Buttons
