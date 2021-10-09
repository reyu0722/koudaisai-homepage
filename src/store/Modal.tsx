// 参考 : https://mizchi.dev/202005271609-react-app-context

import { createContext } from 'preact'
import { useState, useContext, StateUpdater } from 'preact/hooks'

export type ModalState = {
  isOpen: boolean
  howToPlay: string
  carouselImages: string[]
  blogUrl: string
  gameUrl: string
}

const initialState: ModalState = {
  isOpen: false,
  howToPlay: '',
  carouselImages: [],
  blogUrl: '',
  gameUrl: ''
}

const ModalStateContext = createContext(initialState)

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SetModalStateContext = createContext<StateUpdater<ModalState>>(() => {})

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useModalState = () => useContext(ModalStateContext)
export const useSetModalState = () => useContext(SetModalStateContext)

type Props = {
  children: preact.ComponentChildren
  initialState?: ModalState
}

export const ModalStateProvider: FC<Props> = props => {
  const [state, setState] = useState(props.initialState ?? initialState)

  return (
    <ModalStateContext.Provider value={state}>
      <SetModalStateContext.Provider value={setState}>
        {props.children}
      </SetModalStateContext.Provider>
    </ModalStateContext.Provider>
  )
}
