import React from 'react'
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushReport } from '../firebase'

const ReportSubmitButton = ({
  name,
  bodyWeight,
  exercise,
  lift,
  reps,
  maxLift,
  strengthLevel
}) => {

  const isInputted = exercise && lift && reps

  return (
    <IconButton disabled={isInputted} onClick={() => {
      pushReport({ name, bodyWeight, exercise, lift, reps, maxLift, strengthLevel })
    }}>
      <SendIcon />
    </IconButton>
  )
}

export default ReportSubmitButton
