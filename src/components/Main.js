import React, { useState, useEffect } from 'react'
import { makeStyles, Button } from '@material-ui/core'
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
  const [visible, setVisible] = useState(10)

  useEffect(() => {
    const getCollection = async () => {
      try {
        let reportRef = await db.collection('report')
        if (refine !== 'all') {
          reportRef = reportRef.where('exercise', '==', refine)
        }
        reportRef
          .limit(visible)
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
      } catch (error) {
        alert(error)
      }
      setIsSubmit(false)
    }
    getCollection()
  }, [isSubmit, refine, visible])

  const loadMore = () => {
    // もっと見るボタンを押したらさらに10件読み込む
    setVisible(visible + 10)
  }

  return (
    <div className={classes.root} >
      <NavigationBar userName={user.userName} refine={refine} setRefine={setRefine} setOpen={setOpen} />
      <MyData open={open} setOpen={setOpen} />
      <Archives archives={archives} setIsSubmit={setIsSubmit} setArchives={setArchives} />
      {(archives.length >= visible) && (
        <Button onClick={loadMore} size="large" >もっと見る</Button>
      )}
      <InputField user={user} setIsSubmit={setIsSubmit} setArchives={setArchives} />
    </div>
  )
}

export default Main

