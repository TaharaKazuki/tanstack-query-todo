import { FC, ReactElement } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { Priority } from './enums/Priority'
import { Status } from './enums/Status'
import { TaskDateField } from './taskDateField'
import { TaskDescriptionField } from './taskDescriptionField'
import { TaskSelectField } from './taskSelectField'
import { TaskTitleField } from './taskTitleField'

export const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" width="100%" px={4} my={6}>
      <Typography mb={2} component="h2" variant="h6">
        Create Tasks
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />

        <Stack sx={{ width: '100%' }} direction="row" spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              { value: Status.inProgress, label: Status.inProgress.toUpperCase() },
              { value: Status.completed, label: Status.completed.toUpperCase() },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  )
}
