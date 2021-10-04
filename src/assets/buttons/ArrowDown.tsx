type Props = {
  color?: string
}

const ArrowDown: FC<Props> = ({ color }) => {
  return (
    <svg
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8">
      <path
        d="M30.3398 18.7803L28.2248 16.6653L19.8398 25.0353V6.78027H16.8398V25.0353L8.46984 16.6503L6.33984 18.7803L18.3398 30.7803L30.3398 18.7803Z"
        fill={color || '#131129'}
      />
    </svg>
  )
}

export default ArrowDown
