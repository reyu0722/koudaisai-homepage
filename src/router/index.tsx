import { Route } from 'wouter-preact'
import App from '/@/pages/App'
import Games from '/@/pages/Games'

const Router: FC = () => {
  return (
    <>
      <Route path="/">
        <App />
      </Route>
      <Route path="/games">
        <Games />
      </Route>
    </>
  )
}

export default Router
