import React, { useState } from 'react'
import DeleteConfirmDialog from './DeleteConfirmDialog'
import { makeStyles, Tooltip } from '@material-ui/core'
import { gravatarPath } from '../gravatar'
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
    <div>
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
        <Tooltip title="記録を削除する" placement="left">
          <IconButton onClick={() => { setOpen(true) }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        {/* delete button dialog */}
        <DeleteConfirmDialog id={id}
          open={open}
          setOpen={setOpen}
          setArchives={setArchives}
          setIsSubmit={setIsSubmit}
        />
      </ListItem>
    </div>
  )
}

export default React.memo(ArchiveItem)
