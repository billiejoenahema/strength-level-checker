import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

const ChartSelector = ({ chart, setChart }) => {
  return (
    <FormControl margin="normal">
      <InputLabel shrink htmlFor="exercise-native-label-placeholder">
        種目
      </InputLabel>
      <NativeSelect
        value={chart}
        onChange={(e) => setChart(e.target.value)}
        inputProps={{
          name: 'chart',
          id: 'chart-native-label-placeholder',
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

export default ChartSelector
