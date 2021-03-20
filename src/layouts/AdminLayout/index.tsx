import Container from '@material-ui/core/Container'
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme
} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React, { useState } from 'react'
import {
  AuthSideBar,
  BasicFooter,
  BasicHeader,
  SideBarMenuType
} from '../components'
import { UserChipOptionType } from '../components/UserChip'

const appLoaderHeight = 4

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      },
      width: `100%`
    },
    wrapper: {
      flexGrow: 1
    },
    viewContainer: {
      minHeight: `calc(100vh - ${theme.spacing(2) + appLoaderHeight + 50}px)`
    },
    view: {
      flex: 1,
      flexGrow: 1,
      marginLeft: 0,
      paddingBottom: theme.spacing(),
      [theme.breakpoints.up('sm')]: {
        paddingBottom: theme.spacing(3)
      }
    }
  })
)

type AdminLayoutProps = {
  children: React.ReactNode
  footerText: string
  handleSidebarDrawerOpen?: () => void
  sidebarOpen?: boolean
  menus: SideBarMenuType[]
  activeMenu?: string
  username: string
  profilePicture?: string
  onLogout: () => void
  userOptions?: UserChipOptionType[]
  handleNavigatorVisibility?: () => void
}

const AdminLayout = ({
  footerText,
  handleSidebarDrawerOpen,
  sidebarOpen: sidebarMenuOpen,
  menus,
  activeMenu = '',
  username,
  profilePicture,
  onLogout,
  userOptions,
  children,
  handleNavigatorVisibility
}: AdminLayoutProps) => {
  const classes = useStyles()
  const [sidebarOpen, setSidebarOpen] = useState(sidebarMenuOpen)
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  return (
    <div className={classes.root}>
      {isMd && (
        <AuthSideBar
          menus={menus}
          open={!!sidebarOpen}
          handleDrawerOpen={() => {
            if (handleSidebarDrawerOpen) {
              handleSidebarDrawerOpen()
              return
            }
            setSidebarOpen(!sidebarOpen)
          }}
          activeMenu={activeMenu}
        />
      )}
      <div className={classes.wrapper}>
        <div className={classes.viewContainer}>
          <BasicHeader
            username={username}
            profilePicture={profilePicture}
            onLogout={onLogout}
            userOptions={userOptions}
            handleNavigatorVisibility={handleNavigatorVisibility}
          />
          <main className={classes.view}>
            <div>
              <Container> {children} </Container>
            </div>
          </main>
        </div>
        <BasicFooter text={footerText} />
      </div>
    </div>
  )
}

export default AdminLayout
