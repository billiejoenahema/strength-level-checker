import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

const RepsSelector = ({ report, setReport }) => {
  return (
    <FormControl margin="normal">
      <InputLabel shrink htmlFor="reps-native-label-placeholder">
        Reps
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
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
      </NativeSelect>
    </FormControl>

  )
}

export default React.memo(RepsSelector)
