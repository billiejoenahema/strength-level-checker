import React from 'react'
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushReport } from '../firebase'

const ReportSubmitButton = ({
  name,
  weight,
  exercise,
  useWeight,
  reps,
  maxWeight,
  strengthLevel
}) => {

  const isInputted = exercise && useWeight && reps

  return (
    <IconButton disabled={isInputted} onClick={() => {
      pushReport({ name, weight, exercise, useWeight, reps, maxWeight, strengthLevel })
    }}>
      <SendIcon />
    </IconButton>
  )
}

export default ReportSubmitButton
