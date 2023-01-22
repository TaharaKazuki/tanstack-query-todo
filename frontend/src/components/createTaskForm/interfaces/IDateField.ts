import { IDisabled } from './IDisabled'

export type IDateField = {
  value?: Date | null
  onChange?: (value: Date | null, keyboardInputValue?: string | undefined) => void
} & IDisabled
