/* eslint-disable tailwindcss/no-custom-classname */
import { useSetModalState } from '/@/store/Modal'

import close from './close.svg'
import meshBottom from './mesh-bottom.svg'
import meshTop from './mesh-top.svg'
import titlebg from './titlebg.svg'

const Decorations: FC = () => {
  const setModalState = useSetModalState()
  const closeModal = () =>
    setModalState(s => {
      return {
        ...s,
        isOpen: false
      }
    })
  return (
    <>
      <img src={meshTop} className="absolute top-0 left-[55%] min-w-[45%]" />
      <img
        src={meshBottom}
        className="absolute bottom-0 right-[55%] min-w-[45%]"
      />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <img
        src={titlebg}
        className="absolute top-16 left-12 sm:w-52 w-42 <sm:top-[2.4rem] <sm:left-[2.1rem] lg:left-18"
      />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="absolute top-11 <sm:top-5 text-sm <sm:left-[2.8rem] text-mycyan font-rubik left-22">
        HOW TO PLAY
      </div>
      <img
        src={close}
        className="absolute top-10 right-5 sm:right-10 z-50 w-10 sm:w-12"
        onClick={closeModal}
      />
    </>
  )
}

export default Decorations
