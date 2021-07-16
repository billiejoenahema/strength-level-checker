import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const LoginButton = ({ isInputted }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button variant="contained"
        type="submit"
        ariant="contained"
        color="primary"
        disabled={!isInputted}
      >
        Log in
      </Button>
    </div>
  )
}

export default LoginButton
