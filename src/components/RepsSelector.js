import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

const RepsSelector = ({ report, setReport }) => {
  return (
    <FormControl margin="normal">
      <InputLabel shrink htmlFor="reps-native-label-placeholder">
        反復回数
      </InputLabel>
      <NativeSelect
        value={report.reps}
        onChange={(e) => setReport({ ...report, reps: Number(e.target.value) })}
        inputProps={{
          name: 'reps',
          id: 'reps-native-label-placeholder',
        }}
      >
        <option value={0}></option>
        <option value={2}>2回</option>
        <option value={3}>3回</option>
        <option value={4}>4回</option>
        <option value={5}>5回</option>
        <option value={6}>6回</option>
        <option value={7}>7回</option>
        <option value={8}>8回</option>
        <option value={9}>9回</option>
        <option value={10}>10回</option>
        <option value={11}>11回</option>
        <option value={12}>12回</option>
      </NativeSelect>
    </FormControl>

  )
}

export default React.memo(RepsSelector)
