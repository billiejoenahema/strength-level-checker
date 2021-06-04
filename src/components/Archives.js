import React, { useState, useEffect } from 'react'
import { List, makeStyles } from '@material-ui/core'
import ArchiveItem from './MessageItem'
import { messagesRef } from '../firebase'


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
    messagesRef
      .orderByKey()
      .limitToLast(12)
      .on('value', (snapshot) => {
        const archives = snapshot.val()

        if (archives === null) return

        const entries = Object.entries(archives)
        const newArchives = entries.map((entry) => {
          const [key, nameAndText] = entry
          return { key, ...nameAndText }
        })
        setArchives(newArchives)
      })
  }, [])

  const length = archives.length

  return (
    <List className={classes.root}>
      {
        archives.map(({ key, name, text }, index) => {
          const isLastItem = length === index + 1
          return (
            <ArchiveItem
              key={key}
              name={name}
              text={text}
              isLastItem={isLastItem}
            />
          )
        })
      }
    </List>
  )
}

export default Archives
