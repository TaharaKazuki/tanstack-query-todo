import { SelectChangeEvent } from '@mui/material'

import { IDisabled } from './IDisabled'

export type ISelectItems = {
  value: string
  label: string
}

export type ISelectField = {
  name?: string
  label?: string
  value?: string
  onChange?: (e: SelectChangeEvent) => void
} & IDisabled
