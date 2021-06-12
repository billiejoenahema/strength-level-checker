import React from 'react'
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { setReport } from '../firebase'

const ReportSubmitButton = ({
  name,
  bodyWeight,
  report
}) => {
  const isInputted = (report.lift === 0) || (report.reps === 0)
  return (
    <IconButton disabled={isInputted} onClick={() => {
      setReport({
        name: name,
        bodyWeight: bodyWeight,
        exercise: report.exercise,
        lift: report.lift,
        reps: report.reps,
        maxLift: report.maxLift,
        strengthLevel: report.strengthLevel
      })
    }}>
      <SendIcon />
    </IconButton>
  )
}

export default ReportSubmitButton
