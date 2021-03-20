import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import React, { useState } from 'react'
import { AuthSideBar, BasicFooter, SideBarMenu } from '../components'

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    wrapper: {},
    viewContainer: {},
    view: {}
  })
)

type AdminLayoutProps = {
  footerText: string
  handleSidebarDrawerOpen?: () => void
  sidebarOpen?: boolean
  menus: SideBarMenu[]
}

const AdminLayout = ({
  footerText,
  handleSidebarDrawerOpen,
  sidebarOpen: sidebarMenuOpen,
  menus
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
          activeMenu='approval'
        />
      )}
      <div className={classes.wrapper}>
        <div className={classes.viewContainer}>
          <h1>Heaer</h1>
          <main className={classes.view}>
            <h1>SAD</h1>
          </main>
        </div>
        <BasicFooter text={footerText} />
      </div>
    </div>
  )
}

export default AdminLayout
