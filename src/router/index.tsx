import Router_ from 'preact-router'
import App from '/@/pages/App'
import Games from '/@/pages/Games'

const Router: FC = () => {
  return (
    <Router_>
      <App path="/" />
      <Games path="/games" />
    </Router_>
  )
}

export default Router
