import React from 'react'

import { AdminLayout } from 'acadamia-layout'
import { HomeOutlined } from '@material-ui/icons'

const App = () => {
  const menus = [
    {
      name: 'dashboard',
      description: 'Dashboard',
      url: '/dashboard'
    },
    {
      name: 'gakusei',
      description: 'Gakusei',
      url: '/gakusei'
    },
    {
      name: 'staff',
      description: 'Staff',
      url: '/staff'
    },
    {
      name: 'sensei',
      description: 'Sensei',
      url: '/sensei'
    },
    {
      name: 'institution',
      description: 'Institution',
      url: '/institution'
    },
    {
      name: 'company',
      description: 'Company',
      url: '/company'
    },
    {
      name: 'approval',
      description: 'Approval',
      url: '/approval'
    },
    {
      name: 'master',
      description: 'Master',
      url: '/master'
    },
    {
      name: 'filter-and-action',
      description: 'Filter and Action',
      url: '/filter-and-action'
    }
  ].map((data, index) => ({
    ...data,
    id: index.toString(),
    onClick: () => {
      console.log('ASD')
    },
    icon: <HomeOutlined fontSize='large' />
  }))

  return (
    <AdminLayout
      footerText='Acadamia 2021'
      menus={menus}
      username={'sehalsein'}
      onLogout={() => {
        console.log('On Logout')
      }}
      userOptions={[
        {
          id: '1',
          name: 'account-settings',
          description: 'Account Settings',
          onClick: () => {
            console.log('Account On Click')
          }
        }
      ]}
      activeMenu='/approval'
      navigatorOptions={[
        {
          description: 'Sehal',
          name: 'sehal'
        },
        {
          description: 'Sein',
          name: 'sein'
        }
      ]}
    >
      <h1>Admin Layout</h1>
    </AdminLayout>
  )
}

export default App
