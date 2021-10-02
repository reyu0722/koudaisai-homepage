/* eslint-disable tailwindcss/no-custom-classname */
import blog from '/@/assets/buttons/blog.svg'
import playDark from '/@/assets/buttons/play-dark.svg'

const Buttons: FC = () => {
  return (
    <div className="flex justify-between w-full h-full">
      <img src={blog} className="flex-1 w-0 max-h-full max-w-60" />
      <img src={playDark} className="flex-1 w-0 max-h-full max-w-60" />
    </div>
  )
}

export default Buttons
