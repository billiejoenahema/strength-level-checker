import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'
import { addReport } from '../firebase'

const ReportSubmitButton = ({ report, setReport, user, setIsSubmit, setArchives }) => {
  const isInputted = (report.lift === 0) || (report.reps === 0)
  return (
    <Tooltip title="記録を保存する" placement="left">
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
            await setReport({
              ...report,
              lift: 0,
              reps: 0,
              maxLift: 0,
              strengthLevel: ''
            })
            setArchives([])
            setIsSubmit(true)
          } catch (error) {
            alert(error.message)
          }
        }}>
        <FitnessCenterIcon fontSize="large" />
      </IconButton>
    </Tooltip>
  )
}

export default ReportSubmitButton
