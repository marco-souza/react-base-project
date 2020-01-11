// Make easy to import all important ducks information
import { useSelector, useDispatch } from 'react-redux'

import { startLoading, stopLoading, StoreType, initialState } from './constants'
import reducer from './reducer'

// Setup redux hook
export default () => {
  const state = useSelector((state: StoreType) => state.loading)
  const dispatch = useDispatch()

  const actions = {
    // set actions with dispatch
    startLoading: () => dispatch(startLoading()),
    stopLoading: () => dispatch(stopLoading()),
  }

  return {
    state,
    actions,
  }
}

export { reducer, initialState }
