import React, { useState, useEffect, useCallback } from 'react'
import { gravatarPath } from '../gravatar'
import HideOnScroll from './HideOnScroll'
import RepsSelector from './RepsSelector'
import ReportSubmitButton from './ReportSubmitButton'
import { getStrengthLevel } from '../getStrengthLevel'
import { getMaxLift } from '../getMaxLift'
import {
  makeStyles,
  Box,
  Grid,
  Avatar,
  FormControl,
  InputLabel,
  NativeSelect,
  InputAdornment,
  TextField,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '20ch',
      gridRow: 2,
    },
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: 'white',
  },
}))

const InputField = ({ user, setIsSubmit, setArchives }) => {

  const [report, setReport] = useState({
    exercise: 'bench press',
    lift: 0,
    reps: 0,
    maxLift: 0,
    strengthLevel: '',
  })
  const classes = useStyles()
  const avatarPath = gravatarPath(user.userName)

  useEffect(() => {
    if (report.lift === 0 || report.reps === 0) return
    calcMaxLiftAndStrengthLevel()
  }, [report.lift, report.reps])

  const calcMaxLiftAndStrengthLevel = useCallback(() => {
    const resultLift = getMaxLift(report)
    const judgedLevel = getStrengthLevel(resultLift, user.bodyWeight)
    setReport({ ...report, strengthLevel: judgedLevel, maxLift: resultLift })
  })

  return (
    <HideOnScroll>
      <Box className={classes.stickToBottom} boxShadow={2} >
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container alignItems="center">
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
                margin="dense"
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
                label="Your Max Lift"
                value={report.maxLift}
                margin="dense"
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id="standard-read-only-input"
                label="Your Strength Level"
                value={report.strengthLevel}
                margin="dense"
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
                setIsSubmit={setIsSubmit}
                setArchives={setArchives}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </HideOnScroll>
  )
}

export default React.memo(InputField)
