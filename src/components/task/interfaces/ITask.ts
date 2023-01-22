import { ITaskDescription } from './ITaskDescription'
import { ITaskFooter } from './ITaskFooter'
import { ITaskHeader } from './ITaskHeader'

export type ITask = {
  id?: string
  priority?: string
  status?: string
} & ITaskDescription &
  ITaskHeader &
  ITaskFooter
