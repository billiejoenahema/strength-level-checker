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
  inputLabel: {
    color: '#fff',
  },
  select: {
    color: '#fff',
  },
}))

const NavigationBar = ({ userName, filter, setFilter, setOpen }) => {
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
              <InputLabel className={classes.inputLabel}
                id="exercise-select-label">種目で絞り込み</InputLabel>
              <Select
                className={classes.select}
                labelId="exercise-select-label"
                id="exercise-select"
                value={filter}
                onChange={(e) => { setFilter(e.target.value) }}
              >
                <MenuItem value="all">すべての種目</MenuItem>
                <MenuItem value="ベンチプレス">ベンチプレス</MenuItem>
                <MenuItem value="スクワット">スクワット</MenuItem>
                <MenuItem value="デッドリフト">デッドリフト</MenuItem>
                <MenuItem value="ショルダープレス">ショルダープレス</MenuItem>
                <MenuItem value="ベントオーバーロウ">ベントオーバーロウ</MenuItem>
              </Select>
            </FormControl>
            <Button color="inherit" onClick={() => { setOpen(true) }}>{userName}</Button>
            <Button color="inherit" onClick={() => firebaseApp.auth().signOut()}>ログアウト</Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}

export default NavigationBar
