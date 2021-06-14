import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router'
import { AuthContext } from './AuthProvider'

const SignUp = ({ history }) => {
  const [disabled, setDisabled] = useState(true)
  const { signUp } = useContext(AuthContext)

  // AuthContextからsignUp関数を受け取る
  const handleSubmit = e => {
    e.preventDefault()
    const { email, password } = e.target.elements
    signUp(email.value, password.value, history)
    if (email === '' || password === '') {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button disabled={disabled} type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default withRouter(SignUp)
