import React from 'react'
import { Typography, Link } from '@material-ui/core'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit"
        href="https://github.com/billiejoenahema"
        target="_blank"
        rel="noopener">
        StrengthLevelChecker
      </Link>
    </Typography>
  )
}

export default Copyright
