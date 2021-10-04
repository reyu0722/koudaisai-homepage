type Props = {
  color?: string
}

const ArrowLeft: FC<Props> = ({ color }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.9997 0.333008L9.11967 2.21301L16.5597 9.66634H0.333008V12.333H16.5597L9.11967 19.7863L10.9997 21.6663L21.6663 10.9997L10.9997 0.333008Z"
        fill={color || '#131229'}
      />
    </svg>
  )
}

export default ArrowLeft
