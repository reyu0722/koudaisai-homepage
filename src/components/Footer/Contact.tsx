type Props = {
  iconSrc: string
  text: string
}

const Contact: FC<Props> = ({ iconSrc, text }) => {
  return (
    <div className="flex item-center">
      <img src={iconSrc} />
      {text}
    </div>
  )
}

export default Contact
