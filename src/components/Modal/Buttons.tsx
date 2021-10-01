import blog from '/@/assets/buttons/blog.svg'
import playDark from '/@/assets/buttons/play-dark.svg'

const Buttons: FC = () => {
  return (
    <div className="flex justify-between w-auto">
      <div className="flex-1 w-auto">
        <img src={blog} />
      </div>
      <div className="flex-1 w-auto">
        <img src={playDark} className="flex-1 w-auto" />
      </div>
    </div>
  )
}

export default Buttons
