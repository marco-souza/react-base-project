import * as React from 'react'
import { PageInterface } from 'src/helpers/page'
import Profile from 'src/components/Profile'

const PostDetails = (props: PageInterface) => {
  return (
    <>
      <h1>PostDetails {props.id}</h1>

      <Profile />
    </>
  )
}
export default PostDetails
