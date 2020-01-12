import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from 'app/pages/AppRouter'
import { generateStore } from 'app/redux'

const App = () => {
  const store = generateStore()

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

const mountNode = document.getElementById('root')
ReactDOM.render(<App />, mountNode)
