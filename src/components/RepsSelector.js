import React from 'react'
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}))

const RepsSelector = ({ report, setReport }) => {
  const classes = useStyles()
  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="reps-native-label-placeholder">
        反復回数
      </InputLabel>
      <Select
        value={report.reps}
        onChange={(e) => setReport({ ...report, reps: Number(e.target.value) })}
        inputProps={{
          name: 'reps',
          id: 'reps-native-label-placeholder',
        }}
      >
        <MenuItem value={0}></MenuItem>
        <MenuItem value={2}>2回</MenuItem>
        <MenuItem value={3}>3回</MenuItem>
        <MenuItem value={4}>4回</MenuItem>
        <MenuItem value={5}>5回</MenuItem>
        <MenuItem value={6}>6回</MenuItem>
        <MenuItem value={7}>7回</MenuItem>
        <MenuItem value={8}>8回</MenuItem>
        <MenuItem value={9}>9回</MenuItem>
        <MenuItem value={10}>10回</MenuItem>
        <MenuItem value={11}>11回</MenuItem>
        <MenuItem value={12}>12回</MenuItem>
      </Select>
    </FormControl>
  )
}

export default React.memo(RepsSelector)
