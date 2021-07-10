import React, { useState, useEffect } from 'react'
import { gravatarPath } from '../gravatar'
import HideOnScroll from './HideOnScroll'
import ExerciseSelector from './ExerciseSelector'
import RepsSelector from './RepsSelector'
import ReportSubmitButton from './ReportSubmitButton'
import { calcMaxLiftAndStrengthLevel } from '../calcMaxLiftAndStrengthLevel'
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
      marginTop: 8,
      marginBottom: 8,
      minWidth: 56,
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
    exercise: 'ベンチプレス',
    lift: 0,
    reps: 0,
    maxLift: 0,
    strengthLevel: '???',
  })
  const classes = useStyles()
  const avatarPath = gravatarPath(user.userName)

  useEffect(() => {
    if (report.lift !== 0 && report.reps !== 0) {
      const MaxLiftAndStrengthLevel = calcMaxLiftAndStrengthLevel(report, user)
      setReport(MaxLiftAndStrengthLevel)
    }
    return
  }, [report.lift, report.reps])

  return (
    <HideOnScroll>
      <Box className={classes.stickToBottom} boxShadow={2} id="stick-bottom" >
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Avatar src={avatarPath} className={classes.avatar} />
              <Typography align="center" >{user.userName}</Typography>
            </Grid>
            <Grid item xs={8}>
              <ExerciseSelector report={report} setReport={setReport} />
              {/* input lift */}
              <TextField
                id="lift-input-adornment"
                label="挙上重量"
                InputProps={{
                  endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                }}
                onFocus={(e) => { e.target.value = '' }}
                onChange={(e) => setReport({ ...report, lift: Number(e.target.value) })}
              />
              {/* select reps */}
              <RepsSelector report={report} setReport={setReport} />
              {/* display max lift */}
              <TextField
                id="max-lift-input"
                label="最大挙上重量"
                value={report.maxLift}
                InputProps={{
                  readOnly: true,
                }}
              />
              {/* display strength level */}
              <TextField
                id="strength-level-input"
                label="称号"
                value={report.strengthLevel}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
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
