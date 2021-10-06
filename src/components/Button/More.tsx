/* eslint-disable tailwindcss/no-custom-classname */
import { useState } from 'preact/hooks'

import { useSetModalState, ModalState } from '/@/store/Modal'

type Props = ModalState

const Button: FC<Props> = newState => {
  const [hover, setHover] = useState(false)

  const hoverOn = () => setHover(true)
  const hoverOff = () => setHover(false)

  const setModalState = useSetModalState()

  const handleClick = () => setModalState(newState)

  return (
    <div className="h-16 w-39">
      <div
        className={`flex justify-center items-center px-6 w-full h-full rounded-[36px] border-solid border-mycyan border-3 ${
          hover ? 'bg-mycyan text-[#131229]' : 'text-mycyan'
        }`}
        onMouseOver={hoverOn}
        onMouseOut={hoverOff}
        onClick={handleClick}>
        <p className="font-medium leading-none align-top bg-opa text-[24px] font-rubik">
          MORE
        </p>
      </div>
    </div>
  )
}

export default Button
