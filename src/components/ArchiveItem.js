import React, { useState } from 'react'
import PaperComponent from './PaperComponent'
import { makeStyles } from '@material-ui/core/styles'
import { gravatarPath } from '../gravatar'
import { deleteReport } from '../firebase'
import { formatDate } from '../formatDate'
import DeleteIcon from '@material-ui/icons/Delete'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}))

const ArchiveItem = ({ archive, setArchives, setIsSubmit }) => {
  const classes = useStyles()
  const avatarPath = gravatarPath(archive.userName)
  const { userName,
    bodyWeight,
    exercise,
    lift,
    reps,
    maxLift,
    strengthLevel,
    created_at,
    id
  } = archive
  const [open, setOpen] = useState(false)
  const formattedDate = formatDate(created_at)

  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={userName}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            <List dense>
              <ListItem>
                <ListItemText
                  primary={`体重: ${bodyWeight} kg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`種目: ${exercise}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`挙上重量: ${lift} kg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`反復回数: ${reps}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`最大挙上重量: ${maxLift} kg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`称号: ${strengthLevel}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`投稿日時: ${formattedDate}`}
                />
              </ListItem>
            </List>
          </Typography>
        }
      />
      <IconButton onClick={() => { setOpen(true) }}>
        <DeleteIcon />
      </IconButton>
      {/* delete button dialog */}
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
    </ListItem>
  )
}

export default React.memo(ArchiveItem)
