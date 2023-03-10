import type { FC, ReactElement } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { ISelectField } from './interfaces/ISelectField'

export const TaskSelectField: FC<ISelectField> = ({
  value = '',
  label = 'Select Box',
  name = 'selectBox',
  items = [{ value: '', label: 'AddItem' }],
  disabled = false,
  onChange = (e: SelectChangeEvent) => console.info(e),
}): ReactElement => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${name}-id`}>Status</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map((item, i) => (
          <MenuItem key={item.value + i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
