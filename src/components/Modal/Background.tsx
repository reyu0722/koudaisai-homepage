import { useSetModalState } from '/@/store/Modal'

const Background: FC = () => {
  const setModalState = useSetModalState()
  return (
    <div
      className="fixed w-full h-full bg-black z-20 opacity-80 blur-md"
      onClick={() => setModalState(false)}
    />
  )
}

export default Background
