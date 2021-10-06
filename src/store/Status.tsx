import { createContext } from 'preact'
import { useState, useContext, StateUpdater } from 'preact/hooks'

export type StatusState = {
  illustChanged: boolean
  headerVisible: boolean
}

const initialState: StatusState = {
  illustChanged: false,
  headerVisible: false
}

const StatusStateContext = createContext(initialState)

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SetStatusStateContext = createContext<StateUpdater<StatusState>>(() => {})

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useStatusState = () => useContext(StatusStateContext)
export const useSetStatusState = () => useContext(SetStatusStateContext)

type Props = {
  children: preact.ComponentChildren
  initialState?: StatusState
}

export const StatusStateProvider: FC<Props> = props => {
  const [state, setState] = useState(props.initialState ?? initialState)

  return (
    <StatusStateContext.Provider value={state}>
      <SetStatusStateContext.Provider value={setState}>
        {props.children}
      </SetStatusStateContext.Provider>
    </StatusStateContext.Provider>
  )
}
