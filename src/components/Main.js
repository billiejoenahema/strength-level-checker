import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto'
  },
})

const Main = ({ name }) => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <h2>Main Component</h2>
      <span>Name: {name}</span>
    </div>
  )
}

export default Main

