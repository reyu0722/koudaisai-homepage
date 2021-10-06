type Props = {
  color?: string
  className?: string
}

const Frame: FC<Props> = ({ color, className }) => (
  <svg
    width="674"
    height="390"
    viewBox="0 0 674 390"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}>
    <rect
      y="1.50003"
      width="464"
      height="336"
      rx="22.5"
      transform="matrix(0.86602 0.500009 -0.86602 0.500009 282.88 -5.6123)"
      stroke={color ?? '#96DCEB'}
      strokeWidth="3"
    />
  </svg>
)

export default Frame
