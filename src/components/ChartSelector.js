import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const ChartSelector = ({ chart, setChart }) => {
  return (
    <FormControl margin="normal">
      <InputLabel shrink htmlFor="exercise-native-label-placeholder">
        種目
      </InputLabel>
      <Select
        value={chart}
        onChange={(e) => setChart(e.target.value)}
        inputProps={{
          name: 'chart',
          id: 'chart-native-label-placeholder',
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

export default ChartSelector
