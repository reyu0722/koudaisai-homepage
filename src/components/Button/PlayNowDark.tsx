/* eslint-disable tailwindcss/no-custom-classname */
import arrow from '/@/assets/buttons/arrow-white.svg'

type Props = {
  url: string
}

const Button: FC<Props> = ({ url }) => {
  const openUrl = () => window.open(url, '_blank')

  return (
    <div className="w-60 h-16">
      <div
        className="flex justify-between items-center px-6 w-full h-full rounded-[36px] bg-[#1e2f3f]"
        onClick={openUrl}>
        <p className="font-medium leading-none text-left align-top text-[24px] font-rubik text-[#eff1f5]">
          PLAY NOW
        </p>
        <img src={arrow} className="w-8 h-8" />
      </div>
    </div>
  )
}

export default Button
