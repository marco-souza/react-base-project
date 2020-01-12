import * as React from 'react'
import { Link } from '@reach/router'
import { PageInterface } from 'app/helpers/page'

const PageTemplate = (props: PageInterface) => {
  return (
    <div>
      <h1>Page template</h1>

      {/* navbar */}
      <div>
        <Link to="/">home</Link>
      </div>
      <div>
        <Link to="/posts">posts</Link>
      </div>

      {props.children}
    </div>
  )
}
export default PageTemplate
