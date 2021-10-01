import blog from '/@/assets/buttons/blog.svg'
import playDark from '/@/assets/buttons/play-dark.svg'

const Buttons: FC = () => {
  return (
    <div className="flex justify-between w-full h-full">
      <img src={blog} className="max-h-full" />
      <img src={playDark} className="max-h-full" />
    </div>
  )
}

export default Buttons
