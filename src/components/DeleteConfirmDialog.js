import React from 'react'
import PaperComponent from './PaperComponent'
import { deleteReport } from '../firebase'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@material-ui/core'

const DeleteConfirmDialog = ({ id, open, setOpen, setArchives, setIsSubmit }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => { setOpen(false) }}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          記録を削除しますか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Delete ボタンを押すと記録は完全に消去されます
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => { setOpen(false) }} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={
            async () => {
              try {
                await deleteReport(id)
                setArchives([])
                setIsSubmit(true)
              } catch (error) {
                alert(error.message)
              }
            }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeleteConfirmDialog
