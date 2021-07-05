import React from 'react'
import PaperComponent from './PaperComponent'
import { firebaseApp } from '../firebase.js'
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button
} from '@material-ui/core'

const LogoutConfirmDialog = ({ open, setOpen }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => { setOpen(false) }}
        PaperComponent={PaperComponent}
        aria-labelledby="logout-draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="logout-draggable-dialog-title">
          ログアウトしますか？
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={() => { setOpen(false) }} color="primary">
            キャンセル
          </Button>
          <Button color="primary" onClick={
            () => firebaseApp.auth().signOut()
          }>
            ログアウト
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LogoutConfirmDialog
