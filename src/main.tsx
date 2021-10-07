import { render } from 'preact'
import smoothscroll from 'seamless-scroll-polyfill'

import App from '/@/pages/App'
smoothscroll.polyfill()

import 'virtual:windi.css'
import '/@/styles/index.css'
import '/@/styles/animation.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<App />, document.getElementById('app')!)
