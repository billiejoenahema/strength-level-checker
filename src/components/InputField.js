import React, { useState, useRef } from 'react'
import {
  Grid,
  Avatar,
  makeStyles,
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
  TextField
} from '@material-ui/core'
import { gravatarPath } from '../gravatar'
import ReportSubmitButton from './ReportSubmitButton'


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
  const calcMaxWeightAndStrengthLevel = () => {
    // useWeightとrepsの両方入力するまでなにもしない
    if (useWeight === 0 || reps === 0) return
    // useWeightとrepsを入力したらmaxWeightを計算してstrengthLevelを判定する
    // 計算式が冗長になるなら別ファイルにする
    setMaxWeight()
    setStrengthLevel()
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
          <TextField
            inputEl={inputEl}
            name={useWeight}
            setText={setUseWeight}
            text={useWeight}
            onChange={calcMaxWeightAndStrengthLevel}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
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
          <ReportSubmitButton
            inputEl={inputEl}
            name={name}
            weight={weight} />
        </Grid>
      </Grid>
    </div>
  )
}

export default InputField
