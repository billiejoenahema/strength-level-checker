import React, { useState, useEffect, useCallback } from 'react'
import { gravatarPath } from '../gravatar'
import HideOnScroll from './HideOnScroll'
import ExerciseSelector from './ExerciseSelector'
import RepsSelector from './RepsSelector'
import ReportSubmitButton from './ReportSubmitButton'
import { getStrengthLevel } from '../getStrengthLevel'
import { getMaxLift } from '../getMaxLift'
import {
  makeStyles,
  Box,
  Grid,
  Avatar,
  Typography,
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
  avatar: {
    margin: 'auto',
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: '#c5cae9',
  },
}))

const InputField = ({ user, setIsSubmit, setArchives }) => {

  const [report, setReport] = useState({
    exercise: 'benchPress',
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
    const judgedLevel = getStrengthLevel(report.exercise, resultLift, user.bodyWeight)
    setReport({ ...report, strengthLevel: judgedLevel, maxLift: resultLift })
  })

  return (
    <HideOnScroll>
      <Box className={classes.stickToBottom} boxShadow={2} id="stick-bottom" >
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <Avatar src={avatarPath} className={classes.avatar} />
              <Typography align="center" >{user.userName}</Typography>
            </Grid>
            <Grid item xs={10}>
              <ExerciseSelector report={report} setReport={setReport} />
              {/* input lift */}
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
              {/* select reps */}
              <RepsSelector report={report} setReport={setReport} />
              {/* display max lift */}
              <TextField
                id="max-lift-input"
                label="Your Max Lift"
                value={report.maxLift}
                margin="dense"
                InputProps={{
                  readOnly: true,
                }}
              />
              {/* display strength level */}
              <TextField
                id="strength-level-input"
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
