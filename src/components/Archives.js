import React, { useState, useEffect } from 'react'
import { List, makeStyles } from '@material-ui/core'
import ArchiveItem from './ArchiveItem'
import { reportRef } from '../firebase'

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    width: '100%',
    overFlow: 'auto'
  },
})

const Archives = () => {
  const [archives, setArchives] = useState([])
  const classes = useStyles()

  useEffect(() => {
    reportRef
      .orderByKey()
      .limitToLast(12)
      .on('value', (snapshot) => {
        const archives = snapshot.val()

        if (archives === null) return

        const entries = Object.entries(archives)
        const newArchives = entries.map((entry) => {
          const [key, report] = entry
          return { key, ...report }
        })
        setArchives(newArchives)
      })
  }, [])

  const length = archives.length

  return (
    <List className={classes.root}>
      {
        archives.map(({ key, name, bodyWeight, exercise, lift, reps, maxLift, strengthLevel }, index) => {
          const isLastItem = length === index + 1
          return (
            <ArchiveItem
              key={key}
              name={name}
              isLastItem={isLastItem}
            />
          )
        })
      }
    </List>
  )
}

export default Archives
