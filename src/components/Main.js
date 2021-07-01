import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavigationBar from './NavigationBar'
import InputField from './InputField'
import MyData from './MyData'
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
  const [refine, setRefine] = useState('all')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const getCollection = async () => {
      let reportRef = await db.collection('report')
      if (refine !== 'all') {
        reportRef = reportRef.where('exercise', '==', refine)
      }
      reportRef
        .limit(10)
        .orderBy('created_at', 'desc')
        .onSnapshot((snapshot) => {
          const dataList = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
          // 日付が新しい順に並べ替え
          const sortedDataList = dataList.sort((a, b) => {
            return b.created_at - a.created_at
          })
          setArchives(sortedDataList)
        })
      setIsSubmit(false)
    }
    getCollection()
  }, [isSubmit, refine])

  return (
    <div className={classes.root} >
      <NavigationBar userName={user.userName} refine={refine} setRefine={setRefine} setOpen={setOpen} />
      <MyData open={open} setOpen={setOpen} />
      <Archives archives={archives} setIsSubmit={setIsSubmit} setArchives={setArchives} />
      <InputField user={user} setIsSubmit={setIsSubmit} setArchives={setArchives} />
    </div>
  )
}

export default Main

