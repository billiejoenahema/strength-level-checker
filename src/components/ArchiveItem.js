import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { gravatarPath } from '../gravatar'
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}))

const ArchiveItem = ({ archive }) => {
  const classes = useStyles()
  const avatarPath = gravatarPath(archive.userName)
  const { userName, bodyWeight, lift, reps, maxLift, strengthLevel } = archive


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
            <ul>
              <li>body weight: {bodyWeight} kg</li>
              <li>lift: {lift} kg</li>
              <li>reps: {reps}</li>
              <li>max lift: {maxLift} kg</li>
              <li>strength level: {strengthLevel}</li>
            </ul>
          </Typography>
        }
      />
    </ListItem>
  )
}

export default React.memo(ArchiveItem)
