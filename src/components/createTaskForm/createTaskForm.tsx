import { FC, ReactElement } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import { TaskDescriptionField } from './taskDescriptionField'
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
      </Stack>
    </Box>
  )
}
