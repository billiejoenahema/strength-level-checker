import React, { useState, useContext } from 'react'
import clsx from 'clsx'

import { withRouter } from 'react-router'
import { AuthContext } from './AuthProvider'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import {
  makeStyles,
  CardHeader,
  Card,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
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
  card: {
    margin: 'auto',
    marginTop: 80,
  },
  textField: {
    width: '25ch',
    margin: '8px',
  },
  button: {
    marginTop: theme.spacing(2)
  }

}))

const SignUp = ({ history }) => {
  const classes = useStyles()
  const { signUp } = useContext(AuthContext)
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
  // AuthContextからsignUp関数を受け取る
  const handleSubmit = e => {
    e.preventDefault()
    const { email, password } = e.target.elements
    signUp(email.value, password.value, history)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <CardHeader title="新規登録" />
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
            <Button variant="contained"
              className={classes.button}
              type="submit"
              ariant="contained"
              color="primary"
              disabled={!isInputted}
            >
              新規登録
            </Button>
            <Box className={classes.root}>
              <Link href="/login">アカウントをお持ちの方はこちら</Link>
            </Box>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}

export default withRouter(SignUp)
