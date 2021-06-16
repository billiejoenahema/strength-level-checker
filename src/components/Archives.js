import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
// import ArchiveItem from './ArchiveItem'
import { db } from '../firebase'

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

  console.log(archives)

  useEffect(() => {
    const getCollection = async () => {
      const reportRef = db.collection('report')
      const snapshot = await reportRef.get()
      const dataList = await snapshot.docs.map((doc) => {
        return doc.data()
      })
      setArchives(dataList)
    }
    getCollection()
  }, [])

  return (
    <div></div>
    // <List className={classes.root}>
    //   {
    //     archives.map((report) => {
    //       return (
    //         <ArchiveItem
    //           report={report}
    //           key={report.id}
    //         />
    //       )
    //     })
    //   }
    // </List>
  )
}

export default Archives
