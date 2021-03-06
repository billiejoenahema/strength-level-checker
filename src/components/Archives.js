import React from 'react'
import { List, makeStyles } from '@material-ui/core'
import ArchiveItem from './ArchiveItem'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    width: '100%',
    marginTop: '64px',
    overFlow: 'auto'
  },
})

const Archives = ({ archives, setArchives, setIsSubmit }) => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {
        archives.map((archive) => {
          return (
            <ArchiveItem
              archive={archive}
              key={archive.id}
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
