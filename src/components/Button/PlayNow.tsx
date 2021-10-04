/* eslint-disable tailwindcss/no-custom-classname */
import ArrowLeft from '/@/assets/buttons/ArrowLeft'
import { useState } from 'preact/hooks'

type Props = {
  url: string
}

const Button: FC<Props> = ({ url }) => {
  const [hover, setHover] = useState(false)

  const hoverOn = () => setHover(true)
  const hoverOff = () => setHover(false)

  const openUrl = () => window.open(url, '_blank')

  return (
    <div className="h-16 w-58">
      <div
        className={`flex justify-between items-center px-6 w-full h-full rounded-[36px] ${
          hover ? 'bg-[#dcf9ff]' : 'bg-mycyan'
        }`}
        onMouseOver={hoverOn}
        onMouseOut={hoverOff}
        onClick={openUrl}>
        <p className="font-medium leading-none text-left align-top text-[24px] font-rubik text-[#131229]">
          PLAY NOW
        </p>
        <ArrowLeft />
      </div>
    </div>
  )
}

export default Button
