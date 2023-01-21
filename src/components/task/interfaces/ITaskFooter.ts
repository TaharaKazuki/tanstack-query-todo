import { ChangeEvent, MouseEvent } from 'react'

export type ITaskFooter = {
  onStatusChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void
}
