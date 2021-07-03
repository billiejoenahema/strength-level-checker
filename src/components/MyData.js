import React, { useState, useEffect } from 'react'
import ChartSelector from './ChartSelector'
import Average from './Average'
import CloseIcon from '@material-ui/icons/Close'
import { db } from '../firebase'

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

const MyData = ({ open, setOpen }) => {
  const classes = useStyles()
  const [chart, setChart] = useState('ベンチプレス')
  const [records, setRecords] = useState([])

  useEffect(() => {
    const getCollection = async () => {
      let reportRef = await db.collection('report')
      reportRef = await reportRef.where('exercise', '==', chart)
      await reportRef
        .orderBy('created_at', 'desc')
        .onSnapshot((snapshot) => {
          const dataList = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          // 日付が古い順に並べ替え
          const sortedDataList = dataList.sort((a, b) => {
            return a.created_at - b.created_at
          })
          sortedDataList.forEach((item) => {
            // m/dの形にフォーマットしたdateを追加
            item['date'] = formatChartDate(item.created_at)
          })
          setRecords(sortedDataList)
        })
    }
    getCollection()
  }, [chart])

  return (
    <Fade in={open}>
      <div>
        <Dialog aria-labelledby="chart-dialog-title" open={open} onClose={() => { setOpen(false) }} maxWidth="lg">
          <DialogTitle className={classes.root} >
            <Typography variant="h6">My Data</Typography>
            <IconButton aria-label="close" className={classes.closeButton} onClick={() => { setOpen(false) }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <ChartSelector chart={chart} setChart={setChart} />
            <Average records={records} chart={chart} />
            <LineChart
              width={640}
              height={400}
              data={records}
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
