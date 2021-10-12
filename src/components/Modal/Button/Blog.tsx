/* eslint-disable tailwindcss/no-custom-classname */
import blog from '/@/assets/buttons/blog.svg'

type Props = {
  url: string
}

const Button: FC<Props> = ({ url }) => {
  const openUrl = () => window.open(url, '_blank')

  return (
    <div className="w-48 sm:w-60 <md:h-12 h-16">
      <button
        className="flex justify-evenly items-center py-2 w-full h-full border-solid rounded-[36px] border-3 border-[#1e3040]"
        onClick={openUrl}>
        <p className="font-bold leading-none text-left align-top whitespace-nowrap text-[18px] sm:text-[24px] font-noto text-[#e3040]">
          公式ブログ
        </p>
        <img src={blog} className="h-2/3 lg:h-1/2" />
      </button>
    </div>
  )
}

export default Button
