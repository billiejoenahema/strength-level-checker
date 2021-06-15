import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from '../auth/PrivateRoute'
import { AuthProvider } from '../auth/AuthProvider'
import Login from '../auth/Login'
import SignUp from '../auth/SignUp'
import Main from './Main'

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Main} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
