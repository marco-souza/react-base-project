import * as React from 'react'
import useLoading from 'src/redux/loading'

const Profile = () => {
  const { state, actions } = useLoading()
  const { isLoading } = state
  const { fetchGithubProfile } = actions

  const toggleLoading = () => fetchGithubProfile('marco-souza')

  return (
    <>
      <div>{isLoading ? 'Loading' : 'Not loading'}</div>
      <div>Just a test component</div>
      <button onClick={toggleLoading}>toggle</button>
    </>
  )
}
export default Profile
