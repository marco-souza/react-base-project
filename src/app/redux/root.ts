import { combineReducers } from 'redux'

// import ducks
import * as loading from './loading'

// define initial state
export const initialState = {
  loading: loading.initialState,
}

// combine reducers
export const rootReducer = combineReducers({
  loading: loading.reducer,
})
