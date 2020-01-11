import * as React from 'react'
import useLoading from 'src/redux/loading'

const Test = () => {
  const { state, actions } = useLoading()
  const { isLoading } = state
  const { startLoading, stopLoading } = actions

  const toggleLoading = () => (isLoading ? stopLoading() : startLoading())

  return (
    <>
      <div>{isLoading ? 'Loading' : 'Not loading'}</div>
      <div>Just a test component</div>
      <button onClick={toggleLoading}>toggle</button>
    </>
  )
}
export default Test
