/**
 * Dependencies
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Signin, Signup, Jokes } from '../views/index'

/**
 * Define component
 */

function RootRouter() {
  return (
    <>
      <Route exact path="/" render={() => <Redirect to="/jokes" />} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/jokes" component={Jokes} />
    </>
  )
}

/**
 * Export component
 */

export default RootRouter
