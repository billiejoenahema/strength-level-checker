import React, { useState } from 'react'
import HideOnScroll from './HideOnScroll'
import LogoutConfirmDialog from './LogoutConfirmDialog'
import MenuIcon from '@material-ui/icons/Menu'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Menu,
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
    minWidth: 124,
  },
}))

const NavigationBar = ({ userName, refine, setRefine, setChartOpen }) => {
  const classes = useStyles()
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const openMyData = () => {
    setChartOpen(true)
    setAnchorEl(null)
  }

  const openLogoutDialog = () => {
    setLogoutDialogOpen(true)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={openMyData}>{userName}</MenuItem>
              <MenuItem onClick={openLogoutDialog}>ログアウト</MenuItem>
            </Menu>
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
                value={refine}
                onChange={(e) => { setRefine(e.target.value) }}
              >
                <MenuItem value="all">すべての種目</MenuItem>
                <MenuItem value="ベンチプレス">ベンチプレス</MenuItem>
                <MenuItem value="スクワット">スクワット</MenuItem>
                <MenuItem value="デッドリフト">デッドリフト</MenuItem>
                <MenuItem value="ショルダープレス">ショルダープレス</MenuItem>
                <MenuItem value="ベントオーバーロウ">ベントオーバーロウ</MenuItem>
              </Select>
            </FormControl>
            <Button color="inherit" onClick={openMyData}>{userName}</Button>
            <Button color="inherit" onClick={openLogoutDialog}>ログアウト</Button>
            <LogoutConfirmDialog open={logoutDialogOpen} setOpen={setLogoutDialogOpen} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  )
}

export default NavigationBar
