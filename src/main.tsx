import 'preact/debug'
import { render } from 'preact'
import Router from '/@/router'
import '/@/styles/index.css'
import '/@/styles/animation.css'
import 'virtual:windi.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<Router />, document.getElementById('app')!)
