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
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    const getCollection = async () => {
      const reportRef = db.collection('report')
      const snapshot = await reportRef.orderBy('created_at', 'desc').get()
      const dataList = await snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      setArchives(dataList)
      setIsSubmit(false)
    }
    getCollection()
  }, [isSubmit])

  return (
    <div className={classes.root} >
      <NavigationBar userName={user.userName} />
      <Archives archives={archives} setIsSubmit={setIsSubmit} setArchives={setArchives} />
      <InputField user={user} setIsSubmit={setIsSubmit} setArchives={setArchives} />
    </div>
  )
}

export default Main

