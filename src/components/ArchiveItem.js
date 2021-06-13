import React, { useEffect, useRef } from 'react'
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

const MessageItem = React.memo(({
  isLastItem, // boolean
  name, // string
  bodyWeight, // number
  report // array?
}) => {
  const ref = useRef(null)
  const classes = useStyles()
  const avatarPath = gravatarPath(name)
  const [lift, reps, maxLift, strengthLevel] = report // number, number, number, string?

  useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isLastItem])

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {bodyWeight}
            {lift}
            {reps}
            {maxLift}
            {strengthLevel}
          </Typography>
        }
      />
    </ListItem>
  )
})

export default MessageItem
