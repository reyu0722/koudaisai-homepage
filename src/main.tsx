import { render } from 'preact'
import Router from '/@/router'
import 'virtual:windi.css'
import '/@/styles/index.css'
import '/@/styles/animation.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<Router />, document.getElementById('app')!)
