import { createAction } from 'app/helpers/redux'

// select duck from store
export const DUCK_NAME = 'loading'

// redux types
export const START_LOADING = `${DUCK_NAME}/START_LOADING`
export const STOP_LOADING = `${DUCK_NAME}/STOP_LOADING`

// create actions
export const startLoading = createAction(START_LOADING)
export const stopLoading = createAction(STOP_LOADING)

export interface StoreType {
  loading: DuckType
}

export interface DuckType {
  isLoading: boolean
}

export const initialState: DuckType = {
  isLoading: false,
}
