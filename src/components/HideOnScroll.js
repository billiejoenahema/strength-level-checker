import React from 'react'
import { useScrollTrigger, Slide } from '@material-ui/core'

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger()
  // ボトムのinputFieldはスクロールで下へフレームアウトさせる
  const direction = (children.props.id === 'stick-bottom')
    ? 'up' : 'down'

  return (
    <Slide appear={false} direction={direction} in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
