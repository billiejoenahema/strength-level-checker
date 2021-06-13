import React, { useState, useEffect, useCallback } from 'react'
import { useDebounce } from 'use-debounce'
import { gravatarPath } from '../gravatar'
import RepsSelector from './RepsSelector'
import ReportSubmitButton from './ReportSubmitButton'
import { getStrengthLevel } from '../getStrengthLevel'
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

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '20ch',
    },
  },
}))

const InputField = ({ user, setUser }) => {
  console.log(user.userName)

  const [report, setReport] = useState({
    exercise: 'bench press',
    lift: 0,
    reps: 0,
    maxLift: 0,
    strengthLevel: ''
  })
  const classes = useStyles()
  const avatarPath = gravatarPath(user.userName)
  const debounceInterval = 500
  const [strengthLevelValue] = useDebounce(report.strengthLevel, debounceInterval)
  const [maxLiftValue] = useDebounce(report.maxLift, debounceInterval)

  useEffect(() => {
    if (report.lift === 0 || report.reps === 0) return
    calcMaxLiftAndStrengthLevel()
  }, [report.lift, report.reps])

  const calcMaxLiftAndStrengthLevel = useCallback(() => {
    const maxLift = Math.round(report.lift + report.lift * report.reps / 40)
    // maxLiftとbodyWeightからstrengthLevelを判定
    const judgedLevel = getStrengthLevel(maxLift, user.bodyWeight)
    setReport({ ...report, strengthLevel: judgedLevel, maxLift: maxLift })
  })

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
          <span>{user.userName}</span>
        </Grid>
        <Grid item xs={10}>
          <FormControl margin="normal">
            <InputLabel shrink htmlFor="exercise-native-label-placeholder">
              Exercise
            </InputLabel>
            <NativeSelect
              value={report.exercise}
              onChange={(e) => setReport({ ...report, exercise: e.target.value })}
              inputProps={{
                name: 'exercise',
                id: 'exercise-native-label-placeholder',
              }}
            >
              <option value="benchPress">Bench Press</option>
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
            onChange={(e) => setReport({ ...report, lift: Number(e.target.value) })}
          />
          <FormControl margin="normal">
            <InputLabel shrink htmlFor="reps-native-label-placeholder">
              Reps
            </InputLabel>
            <NativeSelect
              value={report.reps}
              onChange={(e) => setReport({ ...report, reps: Number(e.target.value) })}
              inputProps={{
                name: 'reps',
                id: 'reps-native-label-placeholder',
              }}
            >
              <RepsSelector />
            </NativeSelect>
          </FormControl>
          <TextField
            id="standard-read-only-input"
            label="Your Max Weight"
            value={maxLiftValue}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="standard-read-only-input"
            label="your Strength Level"
            value={strengthLevelValue}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={1}>
          <ReportSubmitButton
            report={report}
            setReport={setReport}
            user={user}
          />
        </Grid>
      </Grid>
    </form>
  )
}

export default InputField
