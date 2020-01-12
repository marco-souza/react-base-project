import * as React from 'react'
import { Link } from '@reach/router'
import { PageInterface } from 'app/helpers/page'

const Posts = (props: PageInterface) => {
  return (
    <div>
      <h1>Posts</h1>

      <div>
        <Link to={`./${Math.random()}`}>details 1</Link>
      </div>
      <div>
        <Link to={`./${Math.random()}`}>details 2</Link>
      </div>
      <div>
        <Link to={`./${Math.random()}`}>details 3</Link>
      </div>

      {props.children}
    </div>
  )
}
export default Posts
