import React, { useState, useEffect } from 'react'
import { List, makeStyles } from '@material-ui/core'
import ArchiveItem from './ArchiveItem'
import { db } from '../firebase'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    width: '100%',
    overFlow: 'auto'
  },
})

const Archives = () => {
  const [archives, setArchives] = useState([])
  const classes = useStyles()

  // archivesはMainで取得してArchives componentへpropsを渡したほうがよい？
  useEffect(() => {
    const getCollection = async () => {
      const reportRef = db.collection('report')
      const snapshot = await reportRef.get()
      const dataList = snapshot.docs.map((doc) => {
        return doc.data()
      })
      setArchives(dataList)
    }
    getCollection()
  }, [])

  return (
    <List className={classes.root}>
      {
        archives.map((archive) => {
          return (
            <ArchiveItem
              archive={archive}
              key={archive.created_at.seconds}
            />
          )
        })
      }
    </List>
  )
}

export default Archives
