import React from 'react'
import { useScrollTrigger, Slide } from '@material-ui/core'

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger()
  const direction = (children.props.className === "makeStyles-stickToBottom-7")
    ? 'up' : 'down'

  return (
    <Slide appear={false} direction={direction} in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
