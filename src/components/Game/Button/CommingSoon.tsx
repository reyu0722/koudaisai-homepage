/* eslint-disable tailwindcss/no-custom-classname */

const Button: FC = () => {
  return (
    <div className="w-64 h-16">
      <button
        className={`flex justify-evenly items-center w-full h-full rounded-[36px] border-solid border-[#888888] text-[#888888] border-3 ${
          /*'text-[#f2518b]'*/ ''
        }`}>
        <p className="font-medium leading-none align-top whitespace-nowrap text-[24px] font-rubik">
          COMMING SOON
        </p>
      </button>
    </div>
  )
}

export default Button
