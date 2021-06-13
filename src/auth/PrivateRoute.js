import React, { useContext } from 'react'
import { Route } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import Login from './Login'

const PrivateRoute = ({ component: Main, ...options }) => {
  const { currentUser } = useContext(AuthContext)
  const Component = currentUser ? Main : Login

  return <Route {...options} component={Component} />
}

export default PrivateRoute
