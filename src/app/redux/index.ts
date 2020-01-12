import { createStore, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import { initialState, rootReducer } from './root'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const generateStore = () => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger)),
  )
  return store
}
