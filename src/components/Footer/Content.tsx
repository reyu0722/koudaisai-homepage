type Props = {
  logo: JSX.Element
  name: string
  contacts: {
    iconSrc: string
    text: string
  }[]
}

const Content: FC<Props> = ({ logo, name, contacts }) => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex items-center h-32">{logo}</div>
      <div className="text-2xl">{name}</div>
      <div className="my-3">
        {contacts.map(({ iconSrc, text }) => (
          <div className="flex items-center my-4" key={text}>
            <img src={iconSrc} className="mr-4" />
            <div className="text-lg leading-none">{text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
