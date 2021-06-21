import React from 'react'
import { firebaseApp } from '../firebase.js'
import HideOnScroll from './HideOnScroll'
import MenuIcon from '@material-ui/icons/Menu'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const NavigationBar = ({ userName }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Strength Level Checker
            </Typography>
            <Button color="inherit">user: {userName}</Button>
            <Button color="inherit" onClick={() => firebaseApp.auth().signOut()}>logout</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}

export default NavigationBar
