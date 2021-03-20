import IconButton from '@material-ui/core/IconButton'
import { makeStyles, Theme } from '@material-ui/core/styles'
import React, { useRef, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import clsx from 'clsx'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    width: 40,
    height: 40,
    borderRadius: 20
  },
  hint: {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    padding: theme.spacing(2, 2),
    position: 'relative'
  },
  keyTileLabel: {
    verticalAlign: 'middle'
  },
  keyTile: {
    '&:first-child': {
      marginLeft: theme.spacing()
    },
    alignItems: 'center',
    background: theme.palette.background.default,
    borderRadius: 8,
    display: 'inline-flex',
    height: 32,
    justifyContent: 'center',
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
    minWidth: 32,
    fontWeight: 'bold'
  }
}))
type NavigatorButtonType = {
  className?: string
  isMac?: boolean
  onClick?: () => void
}
const NavigatorButton = ({
  className,
  onClick,
  isMac,
  ...rest
}: NavigatorButtonType) => {
  const anchor = useRef<HTMLButtonElement>(null)
  const [helperVisibility, setHelperVisibility] = useState(false)
  const classes = useStyles({})

  console.log(rest)
  console.log(helperVisibility)
  return (
    <React.Fragment>
      <IconButton
        className={clsx(className, classes.root)}
        data-test='navigator'
        onMouseEnter={() => setHelperVisibility(true)}
        onMouseLeave={() => setHelperVisibility(false)}
        ref={anchor}
        onClick={onClick}
        {...rest}
      >
        <SearchIcon color='primary' />
      </IconButton>
      <Popper
        open={helperVisibility}
        anchorEl={anchor.current}
        transition
        disablePortal
        placement='bottom'
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'right top' : 'right bottom'
            }}
          >
            <Paper className={classes.hint} elevation={0}>
              <Typography>Search</Typography>

              <div className={classes.keyTile}>
                <span className={classes.keyTileLabel}>
                  <Typography>{isMac ? '⌘' : 'Ctrl'}</Typography>
                </span>
              </div>
              <div className={classes.keyTile}>
                <span className={classes.keyTileLabel}>
                  <Typography>K</Typography>
                </span>
              </div>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  )
}

export default NavigatorButton
