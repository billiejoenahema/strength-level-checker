import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

const ExerciseSelector = ({ report, setReport }) => {
  return (
    <FormControl margin="normal">
      <InputLabel shrink htmlFor="exercise-native-label-placeholder">
        種目
      </InputLabel>
      <NativeSelect
        value={report.exercise}
        onChange={(e) => setReport({ ...report, exercise: e.target.value })}
        inputProps={{
          name: 'exercise',
          id: 'exercise-native-label-placeholder',
        }}
      >
        <option value="ベンチプレス">ベンチプレス</option>
        <option value="スクワット">スクワット</option>
        <option value="デッドリフト">デッドリフト</option>
        <option value="ショルダープレス">ショルダープレス</option>
        <option value="ベントオーバーロウ">ベントオーバーロウ</option>
      </NativeSelect>
    </FormControl>
  )
}

export default React.memo(ExerciseSelector)
