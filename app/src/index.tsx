import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Test from 'src/components/Test'
import { generateStore } from 'src/redux'

const App = () => {
  const store = generateStore()

  return (
    <Provider store={store}>
      <Test />
    </Provider>
  )
}

const mountNode = document.getElementById('root')
ReactDOM.render(<App />, mountNode)
