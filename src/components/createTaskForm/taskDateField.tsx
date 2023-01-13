import type { FC, ReactElement } from 'react'
import { useState } from 'react'
import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

export const TaskDateField: FC = (): ReactElement => {
  const [value, setValue] = useState<Date | null>(null)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
