import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavigationBar from './NavigationBar'
import InputField from './InputField'
import Archives from './Archives'
import { db } from '../firebase'


const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto'
  },
})

const Main = () => {
  const classes = useStyles()
  const [user] = useState({ userName: 'Guest', bodyWeight: 70 })
  const [archives, setArchives] = useState([])

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
    <div className={classes.root} >
      <NavigationBar userName={user.userName} />
      <Archives archives={archives} />
      <InputField user={user} />
    </div>
  )
}

export default Main

