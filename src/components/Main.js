import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavigationBar from './NavigationBar'
import InputField from './InputField'
import Archives from './Archives'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto'
  },
})

const Main = () => {
  const classes = useStyles()
  const [user, setUser] = useState({ userName: 'Guest', bodyWeight: 70 })

  return (
    <div className={classes.root} >
      <NavigationBar userName={user.userName} />
      <Archives />
      <InputField user={user} setUser={setUser} />
    </div>
  )
}

export default Main

