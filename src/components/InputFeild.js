import React, { useState, useRef } from 'react'
import {
  Grid,
  Avatar,
  makeStyles,
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText
} from '@material-ui/core'
import { gravatarPath } from '../gravatar'
import MessageField from './MessageField'
import MessageSubmitButton from './MessageSubmitButton'


const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '24px'
  },
})

const InputField = ({ name, weight }) => {
  const inputEl = useRef(null)
  const [exercise, setExercise] = useState('')
  const [useWeight, setUseWeight] = useState('')
  const [reps, setReps] = useState(1)
  const [maxWeight, setMaxWeight] = useState(0)
  const [strengthLevel, setStrengthLevel] = useState('')
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  const selectExercise = (e) => {
    setExercise(e)
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={2}>
          <FormControl className={classes.formControl}>
            <InputLabel shrink htmlFor="age-native-label-placeholder">
              Exercise
            </InputLabel>
            <NativeSelect
              value={exercise}
              onChange={(e) => selectExercise(e.target.value)}
              inputProps={{
                name: 'exercise',
                id: 'exercise-native-label-placeholder',
              }}
            >
              <option value="benchPress">Bench Press</option>
              <option value="deadLift">Dead Lift</option>
              <option value="squat">Squat</option>
              <option value="shoulderPress">Shoulder Press</option>
            </NativeSelect>
            <FormHelperText>Label + placeholder</FormHelperText>
          </FormControl>
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
          MaxWeight: {maxWeight}
        </Grid>
        <Grid item xs={2}>
          StrengthLevel: {strengthLevel}
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

export default InputField
