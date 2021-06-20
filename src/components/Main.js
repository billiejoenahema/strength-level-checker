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
  const [isPosted, setIsPosted] = useState(false)

  useEffect(() => {
    console.log(isPosted)
    const getCollection = async () => {
      // 第2引数に何らかのstateを入れて、submitを検知してArchivesを再レンダリングさせる
      const reportRef = db.collection('report')
      const snapshot = await reportRef.orderBy('created_at', 'desc').get()
      const dataList = await snapshot.docs.map((doc) => {
        return doc.data()
      })
      setArchives(dataList)
      setIsPosted(false)
    }
    getCollection()
  }, [isPosted])

  return (
    <div className={classes.root} >
      <NavigationBar userName={user.userName} />
      <Archives archives={archives} />
      <InputField user={user} setIsPosted={setIsPosted} setArchives={setArchives} />
    </div>
  )
}

export default Main

