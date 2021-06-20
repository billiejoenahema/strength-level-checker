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

const Archives = ({ archives, setArchives, setIsSubmit }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {
        archives.map((archive, index) => {
          return (
            <ArchiveItem
              archive={archive}
              key={index}
              setArchives={setArchives}
              setIsSubmit={setIsSubmit}
            />
          )
        })
      }
    </List>
  )
}

export default Archives
