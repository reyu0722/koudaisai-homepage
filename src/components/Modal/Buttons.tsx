/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useState } from 'preact/hooks'

import { useSetModalState } from '/@/store/Modal'

import Blog from './Button/Blog'
import PlayNowDark from './Button/PlayNowDark'

type Props = {
  blogUrl?: string
  gameUrl: string
}

const Buttons: FC<Props> = ({ blogUrl, gameUrl }) => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(document.body.clientWidth)
  }, [])

  const setModalState = useSetModalState()
  const closeModal = () => setModalState(e => ({ ...e, isOpen: false }))

  return (
    <div className="flex <md:flex-col gap-2 md:gap-12 justify-center items-center w-full h-full">
      {blogUrl && <Blog url={blogUrl} />}
      <PlayNowDark url={gameUrl} />
    </div>
  )
}

export default Buttons
