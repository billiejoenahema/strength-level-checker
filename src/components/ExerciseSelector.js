import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

const ExerciseSelector = ({ report, setReport }) => {
  return (
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
        <option value="squat">Squat</option>
        <option value="deadLift">Dead Lift</option>
        <option value="shoulderPress">Shoulder Press</option>
        <option value="bentOverRow">Bent Over Row</option>
      </NativeSelect>
    </FormControl>
  )
}

export default React.memo(ExerciseSelector)
