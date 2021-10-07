import { render } from 'preact'

import App from '/@/pages/App'

import 'virtual:windi.css'
import '/@/styles/index.css'
import '/@/styles/animation.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.getElementById('app')!)
