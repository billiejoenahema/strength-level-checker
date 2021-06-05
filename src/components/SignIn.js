import React, { useState, useEffect } from 'react'
import Copyright from './Copyright'
import {
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  makeStyles,
  Container
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    userSelect: 'none',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const SignIn = React.memo(({ setName, setWeight }) => {
  const classes = useStyles()
  const [disabled, setDisabled] = useState(true)
  const [string, setString] = useState('')
  const [number, setNumber] = useState(0)

  useEffect(() => {
    // 両項目を入力するまではボタンを無効化する
    const isInputted = (string === '' || number === '')
    setDisabled(isInputted)
  }, [string, number])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          ようこそ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="weight"
            label="体重"
            name="weight"
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
            onClick={() => {
              setName(string)
              setWeight(number)
            }}
          >
            はじめる
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
})

export default SignIn
