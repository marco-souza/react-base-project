import * as React from 'react'
import { PageInterface } from 'src/helpers/page'
import Test from 'src/components/Test'

const PostDetails = (props: PageInterface) => {
  return (
    <>
      <h1>PostDetails {props.id}</h1>
      <Test />
    </>
  )
}
export default PostDetails
