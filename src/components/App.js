import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from '../auth/PrivateRoute'
import { AuthProvider } from '../auth/AuthProvider'
import Login from '../auth/Login'
import SignUp from '../auth/SignUp'
import Main from './Main'

const App = () => {
  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "Strength Level Checker"
  }, [])

  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path='/' component={Main} />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
