import React, { useState, useContext } from 'react'
import clsx from 'clsx'
import LoginButton from './LoginButton'
import { withRouter } from 'react-router'
import { AuthContext } from './AuthProvider'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import {
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Box,
  Link
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
    margin: '8px',
  },
}))

const Login = ({ history }) => {
  const classes = useStyles()
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const isInputted = email && values.password

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  }

  // AuthContextからlogin関数を受け取る
  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = e.target.elements
    login(email.value, password.value, history)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={classes.root}>
        <TextField
          id="email-input"
          name="email"
          label="Email"
          type="email"
          className={classes.textField}
          margin="normal"
          onChange={(e) => { setEmail(e.target.value) }}
        />
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <LoginButton isInputted={isInputted} />
      </form>
      <Box className={classes.root}>
        <Link href="/signup">新規登録</Link>
      </Box>
    </div>
  )
}

export default withRouter(Login)
