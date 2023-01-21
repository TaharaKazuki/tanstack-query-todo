import { FC, ReactElement } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import { format } from 'date-fns'

import { ITaskHeader } from './interfaces/ITaskHeader'

export const TaskHeader: FC<ITaskHeader> = ({
  title = 'Default title',
  data = new Date(),
}): ReactElement => {
  return (
    <Box display="flex" width="100%" justifyContent="space-between" mb={4}>
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={format(data, 'PPP')} />
      </Box>
    </Box>
  )
}
