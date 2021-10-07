import { render } from 'preact'
import { polyfill } from 'seamless-scroll-polyfill'

import App from '/@/pages/App'

polyfill()

import 'virtual:windi.css'
import '/@/styles/index.css'
import '/@/styles/animation.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.getElementById('app')!)
