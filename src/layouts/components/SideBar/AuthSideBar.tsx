import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import { SideBarMenu } from '.'

type AuthSideBarType = {
  open: boolean
  handleDrawerOpen: () => void
  menus: SideBarMenu[]
  activeMenu?: string
}
const AuthSideBar = ({
  open,
  handleDrawerOpen,
  menus,
  activeMenu = ''
}: AuthSideBarType) => {
  console.log(open)
  console.log(handleDrawerOpen)
  return (
    <Drawer variant='permanent'>
      <Divider />
      <List>
        {menus.map(({ id, description, name, icon, url, onClick }) => (
          <ListItem
            key={name}
            button
            selected={url?.includes(activeMenu)}
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
