import React from 'react'
import { makeStyles, Modal, Backdrop, Fade } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const MyData = ({ archives, open, setOpen }) => {
  const classes = useStyles()
  const maxLiftList = archives.map((archive) => {
    return archive.maxLift
  })

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => { setOpen(false) }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">My Data</h2>
          <p id="transition-modal-description">{maxLiftList}</p>
        </div>
      </Fade>
    </Modal>
  )
}
export default MyData
