import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { gravatarPath } from '../gravatar'
import { formatDate } from '../formatDate'
import { deleteReport } from '../firebase'
import DeleteIcon from '@material-ui/icons/Delete'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}))

const ArchiveItem = ({ archive, setArchives, setIsSubmit }) => {
  const classes = useStyles()
  const avatarPath = gravatarPath(archive.userName)
  const { userName, bodyWeight, lift, reps, maxLift, strengthLevel, created_at, id } = archive
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
                  primary={`Body Weight: ${bodyWeight} kg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Lift: ${lift} kg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Reps: ${reps}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Max Lift: ${maxLift} kg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Strength Level: ${strengthLevel}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Created_at: ${formattedDate}`}
                />
              </ListItem>
            </List>
          </Typography>
        }
      />
      <IconButton onClick={
        async () => {
          try {
            await deleteReport(id)
            setArchives([])
            setIsSubmit(true)
          } catch (error) {
            alert(error.message)
          }
        }}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}

export default React.memo(ArchiveItem)
