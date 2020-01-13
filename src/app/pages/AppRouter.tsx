import * as React from 'react'
import { Router } from '@reach/router'

import Home from './Home'
import Posts from './Posts'
import PostDetails from './PostDetails'
import PageTemplate from './templates/Page'

const AppRouter = () => {
  return (
    <Router>
      <PageTemplate path='/'>
        <Home path='/' />
        <Posts path='/posts'>
          <PostDetails path='/:id' />
        </Posts>
      </PageTemplate>
    </Router>
  )
}
export default AppRouter
