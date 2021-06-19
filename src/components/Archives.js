import React from 'react'
import { List, makeStyles } from '@material-ui/core'
import ArchiveItem from './ArchiveItem'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    width: '100%',
    overFlow: 'auto'
  },
})

const Archives = ({ archives }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {
        archives.map((archive) => {
          return (
            <ArchiveItem
              archive={archive}
              key={archive.created_at.seconds}
            />
          )
        })
      }
    </List>
  )
}

export default Archives
