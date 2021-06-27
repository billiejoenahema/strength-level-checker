import React, { useState } from 'react'
import ChartSelector from './ChartSelector'
import { makeStyles, Modal, Backdrop, Fade } from '@material-ui/core'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // ResponsiveContainer
} from 'recharts'
import { formatChartDate } from '../formatChartDate'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const MyData = ({ archives, open, setOpen }) => {
  const classes = useStyles()
  const [chart, setChart] = useState('ベンチプレス')

  archives.forEach((archive) => {
    // m/dの形にフォーマットしたdateをarchivesに追加する
    archive['date'] = formatChartDate(archive.created_at)
  })

  const data = archives.filter((item) => {
    return item.exercise === chart
  })

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => { setOpen(false) }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">My Data</h2>
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
        </div>
      </Fade>
    </Modal>
  )
}
export default MyData
