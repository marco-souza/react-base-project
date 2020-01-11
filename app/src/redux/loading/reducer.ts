import { ActionType } from 'src/helpers/redux'

import { STOP_LOADING, START_LOADING, initialState } from './constants'

export default (state = initialState, action: ActionType) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      }

    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}
