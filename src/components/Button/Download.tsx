/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'preact/hooks'
import ArrowDown from '/@/assets/buttons/ArrowDown'

type Props = {
  url: string
}

const Button: FC<Props> = ({ url }) => {
  const [hover, setHover] = useState(false)

  const hoverOn = () => setHover(true)
  const hoverOff = () => setHover(false)

  const handleClick = () => window.open(url, '_blank')

  return (
    <div className="h-16 w-58">
      <div
        className={`flex justify-center items-center px-6 w-full h-full rounded-[36px] border-solid border-[#f2518b] border-3 ${
          hover ? 'bg-[#f2518b] text-[#131229]' : 'text-[#f2518b]'
        }`}
        onMouseOver={hoverOn}
        onMouseOut={hoverOff}
        onClick={handleClick}>
        <p className="font-medium leading-none align-top bg-opa text-[24px] font-rubik">
          DOWNLOAD
        </p>{' '}
        <ArrowDown color={hover ? undefined : '#F2518B'} />
      </div>
    </div>
  )
}

export default Button
