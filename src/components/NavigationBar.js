import React from 'react'
import { firebaseApp } from '../firebase.js'
import HideOnScroll from './HideOnScroll'
import MenuIcon from '@material-ui/icons/Menu'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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

const NavigationBar = ({ userName, filter, setFilter }) => {
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
            <FormControl className={classes.formControl}>
              <InputLabel id="exercise-select-label">Exercise</InputLabel>
              <Select
                labelId="exercise-select-label"
                id="exercise-select"
                value={filter}
                onChange={(e) => { setFilter(e.target.value) }}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="benchPress">Bench Press</MenuItem>
                <MenuItem value="squat">Squat</MenuItem>
                <MenuItem value="deadLift">Dead Lift</MenuItem>
                <MenuItem value="shoulderPress">Shoulder Press</MenuItem>
                <MenuItem value="bentOverRow">Bent Over Row</MenuItem>
              </Select>
            </FormControl>
            <Button color="inherit">user: {userName}</Button>
            <Button color="inherit" onClick={() => firebaseApp.auth().signOut()}>logout</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}

export default NavigationBar
