/* eslint-disable tailwindcss/no-custom-classname */
import arrow from '/@/assets/buttons/arrow.svg'
import { useState } from 'preact/hooks'

type Props = {
  url: string
}

const Button: FC<Props> = ({ url }) => {
  const [hover, setHover] = useState(false)

  const hoverOn = () => setHover(true)
  const hoverOff = () => setHover(false)

  return (
    <div className="h-16 w-58">
      <div
        className={`flex justify-between items-center px-6 w-full h-full rounded-[36px] ${
          hover ? 'bg-[#dcf9ff]' : 'bg-mycyan'
        }`}
        onMouseOver={hoverOn}
        onMouseOut={hoverOff}>
        <p className="font-medium leading-none text-left align-top text-[24px] font-rubik text-[#131229]">
          PLAY NOW
        </p>
        <img src={arrow} className="w-8 h-8" />
      </div>
    </div>
  )
}

export default Button
