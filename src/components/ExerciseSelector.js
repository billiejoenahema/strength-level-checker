import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const ExerciseSelector = ({ report, setReport }) => {
  return (
    <FormControl margin="normal">
      <InputLabel shrink htmlFor="exercise-native-label-placeholder">
        種目
      </InputLabel>
      <Select
        value={report.exercise}
        onChange={(e) => setReport({ ...report, exercise: e.target.value })}
        inputProps={{
          name: 'exercise',
          id: 'exercise-native-label-placeholder',
        }}
      >
        <MenuItem value="ベンチプレス">ベンチプレス</MenuItem>
        <MenuItem value="スクワット">スクワット</MenuItem>
        <MenuItem value="デッドリフト">デッドリフト</MenuItem>
        <MenuItem value="ショルダープレス">ショルダープレス</MenuItem>
        <MenuItem value="ベントオーバーロウ">ベントオーバーロウ</MenuItem>
      </Select>
    </FormControl>
  )
}

export default React.memo(ExerciseSelector)
