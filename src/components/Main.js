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
      await db
        .collection('report')
        .orderBy('created_at', 'desc')
        .onSnapshot((snapshot) => {
          const dataList = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          console.log(dataList)
          setArchives(dataList)
        })
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

