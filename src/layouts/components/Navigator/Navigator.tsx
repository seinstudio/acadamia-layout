import Fade from '@material-ui/core/Fade'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme, Theme } from '@material-ui/core/styles'
import Autocomplete from '@material-ui/lab/Autocomplete'
import React from 'react'
import useQuickSearch from '../../../hooks/useQuickSearch'
import NavigatorInput from './NavigatorInput'

const useStyles = makeStyles(
  (theme: Theme) => ({
    modal: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(3)
    },
    paper: {
      overflow: 'hidden'
    },
    root: {
      [theme.breakpoints.down('sm')]: {
        height: 'auto'
      },
      height: 500,
      maxWidth: 600,
      outline: 0,
      width: '100%'
    },
    searchTextField: {
      padding: theme.spacing(0, 2)
    }
  }),
  {
    name: 'Navigator'
  }
)

export type NavigatorOptionType = {
  name: string
  description: string
}

type NavigatorType = {
  visible: boolean
  setVisibility: (state: boolean) => void
  navigatorOptions: NavigatorOptionType[]
}

const Navigator = ({
  visible,
  setVisibility,
  navigatorOptions
}: NavigatorType) => {
  const classes = useStyles({})
  const theme = useTheme()

  const [shown, text] = useQuickSearch(visible, 'Sad')
  console.log(shown)
  console.log(text)

  return (
    <Modal
      className={classes.modal}
      open={visible}
      onClose={() => setVisibility(false)}
    >
      <Fade in={visible} timeout={theme.transitions.duration.short}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Autocomplete
              freeSolo
              disableClearable
              options={navigatorOptions.map((option) => option.description)}
              renderInput={(params) => {
                return (
                  <NavigatorInput
                    {...params}
                    placeholder='Type ? to see available actions'
                    margin='normal'
                    variant='standard'
                    InputProps={{
                      ...params.InputProps,
                      disableUnderline: true,
                      className: classes.searchTextField
                    }}
                  />
                )
              }}
            />
          </Paper>
        </div>
      </Fade>
    </Modal>
  )
}

export default Navigator
