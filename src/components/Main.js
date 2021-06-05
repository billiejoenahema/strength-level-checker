import React from 'react'
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

const Main = ({ name, weight }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <NavigationBar name={name} />
      <InputField name={name} weight={weight} />
      {/* <Archives /> */}
    </div>
  )
}

export default Main

