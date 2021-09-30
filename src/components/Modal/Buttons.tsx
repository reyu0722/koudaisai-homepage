import blog from '/@/assets/buttons/blog.svg'
import playDark from '/@/assets/buttons/play-dark.svg'

const Buttons: FC = () => {
  return (
    <div className="mt-8 h-15 flex justify-between">
      <img src={blog} />
      <img src={playDark} />
    </div>
  )
}

export default Buttons
