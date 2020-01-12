import * as React from 'react'
import { PageInterface } from 'app/helpers/page'
import Profile from 'app/components/Profile'

const PostDetails = (props: PageInterface) => {
  return (
    <>
      <h1>PostDetails {props.id}</h1>

      <Profile />
    </>
  )
}
export default PostDetails
