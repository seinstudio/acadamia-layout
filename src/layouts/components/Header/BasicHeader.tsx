import Container from '@material-ui/core/Container'
import { useTheme } from '@material-ui/core/styles'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import clsx from 'clsx'
import React from 'react'
import NavigatorButton from '../NavigatorButton'
import UserChip, { UserChipOptionType } from '../UserChip'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      display: 'flex',
      gridArea: 'headerToolbar',
      height: 'auto',
      padding: theme.spacing(2, 0)
    },
    spacer: {
      flex: 1
    }
  })
)

type BasicHeaderType = {
  className?: string
  username: string
  profilePicture?: string
  onLogout: () => void
  userOptions?: UserChipOptionType[]
  handleNavigatorVisibility?: () => void
}

const BasicHeader = ({
  className,
  onLogout,
  username,
  profilePicture,
  userOptions,
  handleNavigatorVisibility
}: BasicHeaderType) => {
  const classes = useStyles()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true
  })
  return (
    <Container>
      <header className={clsx(classes.header, className)}>
        <div className={classes.spacer} />

        {isSm && handleNavigatorVisibility && (
          <NavigatorButton onClick={handleNavigatorVisibility} />
        )}

        <UserChip
          username={username}
          profilePicture={profilePicture}
          onLogout={onLogout}
          userOptions={userOptions}
        />
      </header>
    </Container>
  )
}

export default BasicHeader
