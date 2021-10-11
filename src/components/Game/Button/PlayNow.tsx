/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'preact/hooks'

import ArrowLeft from '/@/assets/buttons/ArrowLeft'

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
        className={`flex justify-evenly items-center <sm:py-4 w-full sm:h-full rounded-[36px] ${
          hover ? 'bg-[#dcf9ff]' : 'bg-mycyan'
        }`}
        onMouseOver={hoverOn}
        onMouseOut={hoverOff}
        onClick={openUrl}>
        <p className="font-medium leading-none text-left align-top whitespace-nowrap text-[24px] <sm:text-[18px] font-rubik text-[#131229]">
          PLAY NOW
        </p>
        <ArrowLeft />
      </div>
    </div>
  )
}

export default Button
