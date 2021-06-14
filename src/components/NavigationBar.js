import React from 'react'
import { firebaseApp } from '../firebase.js'
import { makeStyles, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import PersonIcon from '@material-ui/icons/Person'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
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
}));

const NavigationBar = ({ userName }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Strength Level Checker
          </Typography>
          <Box>
            <Box>
              <PersonIcon />
            </Box>
            <Box>
              {userName}
            </Box>
          </Box>
          <Button color="inherit" onClick={() => firebaseApp.auth().signOut()}>logout</Button>
        </Toolbar>
      </AppBar>
    </div >
  )
}

export default NavigationBar
