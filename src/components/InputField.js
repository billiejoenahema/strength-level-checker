import React, { useState, useCallback } from 'react'
import {
  Grid,
  Avatar,
  makeStyles,
  FormControl,
  InputLabel,
  NativeSelect,
  InputAdornment,
  TextField
} from '@material-ui/core'
import { gravatarPath } from '../gravatar'
import ReportSubmitButton from './ReportSubmitButton'


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '20ch',
    },
  },
}))

const InputField = ({ name, weight }) => {
  const [exercise, setExercise] = useState('')
  const [useWeight, setUseWeight] = useState(0)
  const [reps, setReps] = useState(0)
  const [maxWeight, setMaxWeight] = useState(0)
  const [strengthLevel, setStrengthLevel] = useState('')
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  const calcMaxWeightAndStrengthLevel = useCallback((reps) => {

    if (useWeight === 0 && reps === 0) return
    // useWeightとrepsを入力したらmaxWeightを計算してstrengthLevelを判定する
    // 計算式が冗長になるなら別ファイルにする
    const weight = useWeight + useWeight * reps / 40

    setMaxWeight(weight)
    setStrengthLevel('Beginner')
  })

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <FormControl margin="normal">
            <InputLabel shrink htmlFor="exercise-native-label-placeholder">
              Exercise
            </InputLabel>
            <NativeSelect
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
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
          </FormControl>
          <TextField
            required
            label="Lifted"
            id="standard-start-adornment"
            margin="normal"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
            onChange={(e) => setUseWeight(Number(e.target.value))}
          />
          <FormControl margin="normal">
            <InputLabel shrink htmlFor="reps-native-label-placeholder">
              Reps
            </InputLabel>
            <NativeSelect
              value={reps}
              onChange={(e) => calcMaxWeightAndStrengthLevel(e.target.value)}
              inputProps={{
                name: 'reps',
                id: 'reps-native-label-placeholder',
              }}
            >
              <option value={0}></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
              <option value={12}>12</option>
            </NativeSelect>
          </FormControl>
          <TextField
            id="standard-read-only-input"
            label="Max Weight ?"
            value={maxWeight}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="Strength Level ?"
            value={strengthLevel}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <ReportSubmitButton
            name={name}
            weight={weight} />
        </Grid>
      </Grid>
    </form>
  )
}

export default InputField
