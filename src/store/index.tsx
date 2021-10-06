import { ChangedStateProvider } from '/@/store/Changed'
import { ModalStateProvider } from '/@/store/Modal'
import { OffsetStateProvider } from '/@/store/Offset'
import { StatusStateProvider } from '/@/store/Status'

const Provider: FC = ({ children }) => {
  return (
    <ModalStateProvider>
      <ChangedStateProvider>
        <StatusStateProvider>
          <OffsetStateProvider>{children}</OffsetStateProvider>
        </StatusStateProvider>
      </ChangedStateProvider>
    </ModalStateProvider>
  )
}

export default Provider
