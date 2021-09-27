import { StateUpdater } from 'preact/hooks'

type Props = {
  setOpened: StateUpdater<boolean>
}

const Background: FC<Props> = ({ setOpened }) => {
  const close = () => setOpened(false)
  return (
    <div
      className="fixed w-full h-full bg-black z-20 opacity-80 blur-md"
      onClick={close}
    />
  )
}

export default Background
