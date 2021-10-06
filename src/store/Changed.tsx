import { createContext } from 'preact'
import { useState, useContext, StateUpdater } from 'preact/hooks'

const initialState = false

const ChangedStateContext = createContext(initialState)

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SetChangedStateContext = createContext<StateUpdater<boolean>>(() => {})

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useChangedState = () => useContext(ChangedStateContext)
export const useSetChangedState = () => useContext(SetChangedStateContext)

type Props = {
  children: preact.ComponentChildren
  initialState?: boolean
}

export const ChangedStateProvider: FC<Props> = props => {
  const [state, setState] = useState(props.initialState ?? initialState)

  return (
    <ChangedStateContext.Provider value={state}>
      <SetChangedStateContext.Provider value={setState}>
        {props.children}
      </SetChangedStateContext.Provider>
    </ChangedStateContext.Provider>
  )
}
