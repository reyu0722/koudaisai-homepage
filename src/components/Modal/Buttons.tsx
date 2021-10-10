/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useState } from 'preact/hooks'

import Blog from '/@/components/Button/Blog'
import PlayNowDark from '/@/components/Button/PlayNowDark'
import { useSetModalState } from '/@/store/Modal'

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
    <div className="flex <md:flex-col gap-2 md:justify-between <md:items-center w-full h-full">
      {blogUrl && <Blog url={blogUrl} />}
      <PlayNowDark url={gameUrl} />
      {width < 640 && (
        <div className="w-48 sm:w-60 <md:h-12 h-16" onClick={closeModal}>
          <div className="flex justify-evenly items-center py-2 w-full h-full">
            <p className="font-bold leading-none text-left align-top whitespace-nowrap text-[18px] sm:text-[24px] font-noto text-[#e3040]">
              CLOSE
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Buttons
