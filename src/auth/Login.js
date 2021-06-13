import React, { useContext } from "react"
import { withRouter } from "react-router"
import { AuthContext } from "./AuthProvider"

const Login = ({ history }) => {
  const { login } = useContext(AuthContext)

  // AuthContextからlogin関数を受け取る
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    login(email.value, password.value, history)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  )
}

export default withRouter(Login)
