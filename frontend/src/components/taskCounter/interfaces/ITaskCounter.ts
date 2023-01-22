import { Status } from '../../createTaskForm/enums/Status'

export type TaskCounterStatusType = Status.todo | Status.inProgress | Status.completed

export type ITaskCounter = {
  count?: number
  status?: TaskCounterStatusType
}
