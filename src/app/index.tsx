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

const rootElement = document.getElementById('root')
if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement)
} else {
  ReactDOM.render(<App />, rootElement)
}
