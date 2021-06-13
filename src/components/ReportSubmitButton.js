import React from 'react'
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { addReport } from '../firebase'

const ReportSubmitButton = ({
  name,
  bodyWeight,
  report
}) => {
  const isInputted = (report.lift === 0) || (report.reps === 0)
  return (
    <IconButton disabled={isInputted} onClick={
      async () => {
        try {
          await addReport({
            name: name,
            bodyWeight: bodyWeight,
            exercise: report.exercise,
            lift: report.lift,
            reps: report.reps,
            maxLift: report.maxLift,
            strengthLevel: report.strengthLevel
          })
        } catch (error) {
          alert(error.message)
        }
      }}>
      <SendIcon />
    </IconButton>
  )
}

export default ReportSubmitButton
