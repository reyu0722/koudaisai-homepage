/* eslint-disable tailwindcss/no-custom-classname */
import meshTop from './mesh-top.svg'
import meshBottom from './mesh-bottom.svg'
import titlebg from './titlebg.svg'

const Decorations: FC = () => {
  return (
    <>
      <img src={meshTop} className="absolute top-0 left-[55%] min-w-[45%]" />
      <img src={meshBottom} className="absolute bottom-0 right-[55%] min-w-[45%]" />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <img src={titlebg} className="absolute top-16 w-52 left-18" />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="absolute top-11 text-sm text-[#96DCEB] font-rubik left-22">
        HOW TO PLAY
      </div>
    </>
  )
}

export default Decorations
