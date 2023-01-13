import type { FC, ReactElement } from 'react'
import { TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { IDateField } from './interfaces/IDateField'

export const TaskDateField: FC<IDateField> = ({
  value = new Date(),
  disabled = false,
  onChange,
}): ReactElement => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Basic example"
        value={value}
        disabled={disabled}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
