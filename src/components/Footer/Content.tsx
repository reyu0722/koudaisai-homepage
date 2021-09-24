import Contact from '/@/components/Footer/Contact'

type ContactType = {
  iconSrc: string
  text: string
}

type Props = {
  logo: JSX.Element
  name: string
  contacts: ContactType[]
}

const Content: FC<Props> = ({ logo, name, contacts }) => {
  return (
    <div className="flex flex-col text-white">
      <div className="h-32 flex items-center">{logo}</div>
      <div className="text-2xl">{name}</div>
      <div className="my-3">
        {contacts.map(({ iconSrc, text }) => (
          <Contact iconSrc={iconSrc} text={text} key={text}></Contact>
        ))}
      </div>
    </div>
  )
}

export default Content
