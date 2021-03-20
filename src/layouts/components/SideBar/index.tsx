type SideBarMenuItem = {
  name: string
  description: string
  id: string
  url?: string
  icon: React.ReactNode
}

export type SideBarMenu = SideBarMenuItem & {
  onClick: (item: SideBarMenuItem) => void
}

export { default as AuthSideBar } from './AuthSideBar'
