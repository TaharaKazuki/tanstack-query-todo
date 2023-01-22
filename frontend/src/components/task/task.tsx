import { FC, ReactElement } from 'react'
import { Box } from '@mui/system'

import { Priority } from '../createTaskForm/enums/Priority'
import { Status } from '../createTaskForm/enums/Status'

import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor'
import { ITask } from './interfaces/ITask'
import { TaskDescription } from './taskDescription'
import { TaskFooter } from './taskFooter'
import { TaskHeader } from './taskHeader'

export const Task: FC<ITask> = ({
  title = 'Test Title',
  date = new Date(),
  description = 'Lorem ipsum dolor sit',
  priority = Priority.high,
  status = Status.completed,
  onStatusChange = (e) => console.info(e),
  onClick = (e) => console.info(e),
}): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  )
}
