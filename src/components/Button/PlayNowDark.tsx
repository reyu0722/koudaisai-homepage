/* eslint-disable tailwindcss/no-custom-classname */
import ArrowLeft from '/@/assets/buttons/ArrowLeft'

type Props = {
  url: string
}

const Button: FC<Props> = ({ url }) => {
  const openUrl = () => window.open(url, '_blank')

  return (
    <div className="w-60 <md:h-12 h-16">
      <div
        className="flex justify-between items-center px-6 w-full h-full rounded-[36px] bg-[#1e2f3f]"
        onClick={openUrl}>
        <p className="font-medium leading-none text-left align-top whitespace-nowrap text-[24px] font-rubik text-[#eff1f5]">
          PLAY NOW
        </p>
        <ArrowLeft color="#EFF1F5" />
      </div>
    </div>
  )
}

export default Button
