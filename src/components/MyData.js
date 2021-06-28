import React, { useState } from 'react'
import ChartSelector from './ChartSelector'
import CloseIcon from '@material-ui/icons/Close'
import {
  makeStyles,
  Fade,
  IconButton,
  Dialog,
  Typography,
  DialogTitle,
  DialogContent
} from '@material-ui/core'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { formatChartDate } from '../formatChartDate'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}))

const MyData = ({ archives, open, setOpen }) => {
  const classes = useStyles()
  const [chart, setChart] = useState('ベンチプレス')
  // 日付が古い順に並び替え
  const sortedArchives = archives.sort((a, b) => {
    return a.created_at - b.created_at
  })
  sortedArchives.forEach((archive) => {
    // m/dの形にフォーマットしたdateをarchivesに追加する
    archive['date'] = formatChartDate(archive.created_at)
  })
  // 選択した種目で絞り込んでチャート用データを作成
  const data = sortedArchives.filter((item) => {
    return item.exercise === chart
  })

  return (
    <Fade in={open}>
      <div>
        <Dialog aria-labelledby="chart-dialog-title" open={open} onClose={() => { setOpen(false) }}>
          <DialogTitle className={classes.root}>
            <Typography variant="h6">My Data</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={() => { setOpen(false) }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <ChartSelector chart={chart} setChart={setChart} />
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="maxLift" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </DialogContent>
        </Dialog>
      </div>
    </Fade>
  )
}
export default MyData
