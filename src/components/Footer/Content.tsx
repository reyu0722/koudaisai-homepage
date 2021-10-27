type Props = {
  logo: JSX.Element
  name: string
  contacts: {
    iconSrc: string
    text: string
    url?: string
  }[]
}

const Content: FC<Props> = ({ logo, name, contacts }) => {
  return (
    <div className="flex flex-col text-white">
      <div className="flex items-center h-32">{logo}</div>
      <div className="text-2xl">{name}</div>
      <div className="my-3">
        {contacts.map(({ iconSrc, text, url }) => (
          <div className="flex items-center my-4 space-x-4" key={text}>
            <img src={iconSrc} />
            <a
              className={
                'text-lg leading-none' + (url ? '' : ' hover:no-underline')
              }
              href={url}
              target="_blank"
              rel="noreferrer">
              {text}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
