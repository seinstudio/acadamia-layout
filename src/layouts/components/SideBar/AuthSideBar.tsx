import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {
  Theme,
  makeStyles,
  createStyles,
  useTheme
} from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { SideBarMenuType } from '.'

const SIDE_BAR_DRAWER_WIDTH = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: SIDE_BAR_DRAWER_WIDTH,
      flexShrink: 0,
      whiteSpace: 'nowrap'
    },
    drawerOpen: {
      width: SIDE_BAR_DRAWER_WIDTH,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1
      }
    },
    drawerPaper: {
      overflow: 'initial'
    },
    navButton: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '50%',
      '&:hover': {
        backgroundColor: theme.palette.background.paper
      },
      padding: theme.spacing(0.5),
      position: 'absolute',
      zIndex: 9999,
      border: 'solid 1px #eaeaea',
      top: '47px',
      right: '-17px',
      transition: theme.transitions.duration.shortest + 'ms'
    },
    navOpen: {
      transform: 'scaleX(-1)'
    },
    menuList: {
      height: '100vh',
      overflow: 'hidden'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      backgroundColor: theme.palette.primary.main,
      overflow: 'hidden'
    }
  })
)

type AuthSideBarType = {
  open: boolean
  handleDrawerOpen: () => void
  menus: SideBarMenuType[]
  activeMenu?: string
}
const AuthSideBar = ({
  open,
  handleDrawerOpen,
  menus,
  activeMenu = ' '
}: AuthSideBarType) => {
  console.log()

  const classes = useStyles()
  const theme = useTheme()

  return (
    <Drawer
      variant='permanent'
      className={clsx('sidebar-drawer', classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx(
          {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          },
          classes.drawerPaper
        )
      }}
    >
      <div className={classes.toolbar}></div>

      <IconButton
        onClick={handleDrawerOpen}
        className={classes.navButton}
        component='span'
      >
        {theme.direction === 'rtl' ? (
          <ChevronLeftIcon
            className={clsx({
              [classes.navOpen]: open
            })}
          />
        ) : (
          <ChevronRightIcon
            className={clsx({
              [classes.navOpen]: open
            })}
          />
        )}
      </IconButton>
      <Divider />
      <List className={classes.menuList}>
        {menus.map(({ id, description, name, icon, url, onClick }) => (
          <ListItem
            key={name}
            button
            selected={activeMenu.includes(url || '/')}
            onClick={() => {
              onClick({ description, name, icon, url, id })
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={description} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

export default AuthSideBar
