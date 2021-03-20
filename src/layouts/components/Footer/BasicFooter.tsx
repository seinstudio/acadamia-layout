import React from 'react'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

type FooterType = {
  className?: string
  text?: string
}

const Footer = ({ className, text, ...rest }: FooterType) => {
  return (
    <footer {...rest} className={clsx(className)}>
      <Container>
        <Grid container justify='center'>
          <Grid item>
            <Typography>{text}</Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
