/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'preact/hooks'

const Button: FC = () => {
  const [hover, setHover] = useState(false)

  const hoverOn = () => setHover(true)
  const hoverOff = () => setHover(false)

  return (
    <div className="h-16 w-39">
      <div
        className={`flex justify-center items-center px-6 w-full h-full rounded-[36px] border-solid border-[#96dceb] border-3 ${
          hover ? 'bg-[#96dceb] text-[#131229]' : 'text-[#96dceb]'
        }`}
        onMouseOver={hoverOn}
        onMouseOut={hoverOff}>
        <p className="font-medium leading-none align-top bg-opa text-[24px] font-rubik">
          MORE
        </p>
      </div>
    </div>
  )
}

export default Button
