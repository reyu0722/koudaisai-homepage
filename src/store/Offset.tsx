import { useState, useContext, StateUpdater } from 'preact/hooks'
import { createContext } from 'preact'

export type OffsetState = number

const initialState: OffsetState = 0
const OffsetStateContext = createContext(initialState)

// eslint-disable-next-line @typescript-eslint/no-empty-function
const SetOffsetStateContext = createContext<StateUpdater<OffsetState>>(() => {})

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useOffsetState = () => useContext(OffsetStateContext)
export const useSetOffsetState = () => useContext(SetOffsetStateContext)

type Props = {
  children: preact.ComponentChildren
  initialState?: OffsetState
}

export const OffsetStateProvider: FC<Props> = props => {
  const [state, setState] = useState(props.initialState ?? initialState)

  return (
    <OffsetStateContext.Provider value={state}>
      <SetOffsetStateContext.Provider value={setState}>
        {props.children}
      </SetOffsetStateContext.Provider>
    </OffsetStateContext.Provider>
  )
}
