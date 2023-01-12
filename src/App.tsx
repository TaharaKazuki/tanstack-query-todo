import { FC, ReactElement } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { Dashboard } from './components/dashboard/dashboard'
import { customTheme } from './theme/customTheme'

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
