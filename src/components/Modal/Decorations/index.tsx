/* eslint-disable tailwindcss/no-custom-classname */
import meshBottom from './mesh-bottom.svg'
import meshTop from './mesh-top.svg'
import titlebg from './titlebg.svg'

const Decorations: FC = () => {
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
        className="absolute top-16 left-12 w-52 <sm:w-44 <sm:top-[2.3rem] <sm:left-[1.8rem] lg:left-18"
      />
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <div className="absolute top-11 <sm:top-5 <sm:left-12 text-sm text-mycyan font-rubik left-22">
        HOW TO PLAY
      </div>
    </>
  )
}

export default Decorations
