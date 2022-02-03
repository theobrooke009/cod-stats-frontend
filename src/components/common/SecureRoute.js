import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { removeToken, isAuthenticated } from '../lib/auth'

function SecureRoute({ component: Component, ...rest }) {
  if (isAuthenticated()) return <Route {...rest} component={Component} />
  removeToken()
  
  return <Navigate to='/' />
}

export default SecureRoute