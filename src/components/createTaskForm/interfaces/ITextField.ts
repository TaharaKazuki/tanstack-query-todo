import { ChangeEvent } from 'react'

import { IDisabled } from './IDisabled'

export type ITextField = {
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
} & IDisabled
