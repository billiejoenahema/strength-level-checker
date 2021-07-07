import React from 'react'
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 124,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}))

const ExerciseSelector = ({ report, setReport }) => {
  const classes = useStyles()
  return (
    <FormControl className={classes.formControl}>
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
