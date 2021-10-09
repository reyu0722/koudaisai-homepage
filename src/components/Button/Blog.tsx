/* eslint-disable tailwindcss/no-custom-classname */
import blog from '/@/assets/buttons/blog.svg'

type Props = {
  url: string
}

const Button: FC<Props> = ({ url }) => {
  const openUrl = () => window.open(url, '_blank')

  return (
    <div className="w-60 <md:h-12 h-16">
      <div
        className="flex justify-between items-center px-6 w-full h-full border-solid rounded-[36px] border-3 border-[#1e3040]"
        onClick={openUrl}>
        <p className="font-bold leading-none text-left align-top whitespace-nowrap text-[23px] font-noto text-[#e3040]">
          公式ブログ
        </p>
        <img src={blog} className="h-1/2 w-2/15" />
      </div>
    </div>
  )
}

export default Button
