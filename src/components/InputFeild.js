import React, { useState, useRef } from 'react'
import { Grid, Avatar, makeStyles } from '@material-ui/core'
import { gravatarPath } from '../gravatar'
import MessageField from './MessageField'
import MessageSubmitButton from './MessageSubmitButton'


const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '24px'
  },
})

const MessageInputField = ({ name, weight }) => {
  const inputEl = useRef(null)
  const [exercise, setExercise] = useState('')
  const [useWeight, setUseWeight] = useState('')
  const [reps, setReps] = useState(1)
  const [maxWeight, setMaxWeight] = useState(0)
  const [strengthLevel, setStrengthLevel] = useState('')
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={2}>
          <MessageField
            inputEl={inputEl}
            name={exercise}
            setText={setExercise}
            text={exercise}
          />
        </Grid>
        <Grid item xs={2}>
          <MessageField
            inputEl={inputEl}
            name={useWeight}
            setText={setUseWeight}
            text={useWeight}
          />
        </Grid>
        <Grid item xs={2}>
          <MessageField
            inputEl={inputEl}
            name={reps}
            setText={setReps}
            text={reps}
          />
        </Grid>
        <Grid item xs={2}>
          <MessageField
            inputEl={inputEl}
            name={maxWeight}
            setText={setMaxWeight}
            text={maxWeight}
          />
        </Grid>
        <Grid item xs={2}>
          <MessageField
            inputEl={inputEl}
            name={strengthLevel}
            setText={setStrengthLevel}
            text={strengthLevel}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            inputEl={inputEl}
            name={name}
            weight={weight} />
        </Grid>
      </Grid>
    </div>
  )
}

export default MessageInputField
