import { useState } from 'preact/hooks'
import Background from './Background'
import Body from './Body'

const Modal: FC = () => {
  const [opened, setOpened] = useState(true)

  if (opened)
    return (
      <>
				<Background setOpened={setOpened} />
				<Body />
      </>
    )
  return null
}

export default Modal
