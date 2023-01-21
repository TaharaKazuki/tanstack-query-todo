import { FC, ReactElement } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

import { Status } from '../createTaskForm/enums/Status'

import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor'
import { emitCorrectLabel } from './helpers/emitCorrectLabel'
import { ITaskCounter } from './interfaces/ITaskCounter'

export const TaskCounter: FC<ITaskCounter> = ({
  status = Status.completed,
  count = 0,
}): ReactElement => {
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColor(status)}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography color="#ffffff" fontWeight="bold" fontSize="20px" variant="h5">
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  )
}
