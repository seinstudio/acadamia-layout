import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import React, { useRef, useState } from 'react'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    userMenuContainer: {},
    arrow: {
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0
      },
      marginLeft: theme.spacing(0.5),
      transition: theme.transitions.duration.standard + 'ms'
    },
    rotate: {
      transform: 'rotate(180deg)'
    },
    popover: {
      zIndex: 10
    },
    userChip: {
      [theme.breakpoints.down('sm')]: {
        height: 48
      },
      backgroundColor: theme.palette.background.paper,
      borderRadius: 24,
      color: theme.palette.text.primary,
      height: 40,
      padding: theme.spacing(0.5)
    }
  })
)
export type UserChipOptionType = {
  id: string
  name: string
  description: string
  onClick: () => void
}
type UserChipType = {
  username: string
  profilePicture?: string
  onLogout: () => void
  userOptions?: UserChipOptionType[]
}

const getAvatarText = (text: string) => {
  text = text.toUpperCase()
  const [first, second] = text.split(' ')
  if (second) {
    return `${first.substring(0, 1)}${second.substring(0, 1)}`
  }
  if (text.length >= 2) {
    return text.substring(0, 2)
  }
  return text.substring(0, 1)
}

const UserChip = ({
  username,
  profilePicture,
  onLogout,
  userOptions
}: UserChipType) => {
  const classes = useStyles({})
  const [isMenuOpened, setMenuState] = useState(false)
  const anchor = useRef<HTMLDivElement>(null)

  return (
    <div className={clsx('user-chip', classes.userMenuContainer)} ref={anchor}>
      <Chip
        className={classes.userChip}
        deleteIcon={
          <ArrowDropDownIcon
            className={clsx(classes.arrow, {
              [classes.rotate]: isMenuOpened
            })}
          />
        }
        onClick={() => {
          setMenuState(!isMenuOpened)
        }}
        onDelete={() => {
          setMenuState(!isMenuOpened)
        }}
        label={username}
        avatar={<Avatar src={profilePicture}>{getAvatarText(username)}</Avatar>}
      />
      <Popper
        open={isMenuOpened}
        transition
        disablePortal
        anchorEl={anchor.current}
        placement='bottom-end'
        className={classes.popover}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'right top' : 'right bottom'
            }}
          >
            <Paper>
              <ClickAwayListener
                onClickAway={() => setMenuState(false)}
                mouseEvent='onClick'
              >
                <MenuList autoFocusItem={isMenuOpened}>
                  {userOptions &&
                    userOptions.map(({ name, description, onClick }) => (
                      <MenuItem key={name} onClick={onClick}>
                        {description}
                      </MenuItem>
                    ))}
                  <MenuItem onClick={onLogout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default UserChip
