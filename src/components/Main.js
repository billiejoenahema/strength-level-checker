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
  const [filter, setFilter] = useState('all')

  useEffect(() => {

    const getCollection = async () => {
      let reportRef = await db.collection('report')
      if (filter !== 'all') {
        reportRef = reportRef.where('exercise', '==', filter)
      }
      reportRef
        .orderBy('created_at', 'desc')
        .limit(10)
        .onSnapshot((snapshot) => {
          const dataList = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          setArchives(dataList)
        })
      setIsSubmit(false)
    }
    getCollection()
  }, [isSubmit, filter])


  return (
    <div className={classes.root} >
      <NavigationBar userName={user.userName} filter={filter} setFilter={setFilter} />
      <Archives archives={archives} setIsSubmit={setIsSubmit} setArchives={setArchives} />
      <InputField user={user} setIsSubmit={setIsSubmit} setArchives={setArchives} />
    </div>
  )
}

export default Main

