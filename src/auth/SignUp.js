import React, { useContext } from 'react'
import { withRouter } from 'react-router'
import { AuthContext } from './AuthProvider'

const SignUp = ({ history }) => {
  // const [disabled, setDisabled] = useState(true)

  const { signUp } = useContext(AuthContext)
  // AuthContextからsignUp関数を受け取る
  const handleSubmit = e => {
    e.preventDefault()
    const { email, password } = e.target.elements
    signUp(email.value, password.value, history)
  }

  // useEffect(() => {
  // 全項目を入力するまではボタンを無効化する
  //   const isInputted = (email === '' || password === '' || userName === '' || bodyWeight === 0)
  //   setDisabled(isInputted)
  // }, [email, password, userName, bodyWeight])

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
        {/* <label>
          User Name
          <input name="userName" type="text" placeholder="User Name" />
        </label>
        <label>
          Body Weight
          <input name="bodyWeight" type="text" placeholder="Body Weight" />
        </label> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default withRouter(SignUp)
