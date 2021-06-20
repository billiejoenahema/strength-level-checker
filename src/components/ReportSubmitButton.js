import React from 'react'
import { IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { addReport } from '../firebase'

const ReportSubmitButton = ({ report, setReport, user, setIsPosted, setArchives }) => {
  const isInputted = (report.lift === 0) || (report.reps === 0)
  return (
    <IconButton disabled={isInputted} onClick={
      async () => {
        try {
          await addReport({
            userName: user.userName,
            bodyWeight: user.bodyWeight,
            exercise: report.exercise,
            lift: report.lift,
            reps: report.reps,
            maxLift: report.maxLift,
            strengthLevel: report.strengthLevel
          })
          setReport({
            ...report,
            lift: 0,
            reps: 0,
            maxLift: 0,
            strengthLevel: ''
          })
          setArchives([])
          setIsPosted(true)
        } catch (error) {
          alert(error.message)
        }
      }}>
      <SendIcon />
    </IconButton>
  )
}

export default ReportSubmitButton
