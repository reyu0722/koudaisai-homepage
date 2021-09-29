import blog from '/@/assets/buttons/blog.svg'
import playDark from '/@/assets/buttons/play-dark.svg'

const Buttons: FC = () => {
  return (
    <div className="mt-8 h-12 flex">
      <img src={blog} />
      <img src={playDark} />
    </div>
  )
}

export default Buttons
