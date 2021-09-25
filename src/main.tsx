import { render } from 'preact'
import Router from '/@/router'
import '/@/index.css'
import 'virtual:windi.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<Router />, document.getElementById('app')!)
