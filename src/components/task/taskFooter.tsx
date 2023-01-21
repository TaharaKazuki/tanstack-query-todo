import { FC, ReactElement } from 'react'
import { Box, Button, FormControlLabel, Switch } from '@mui/material'

import { ITaskFooter } from './interfaces/ITaskFooter'

export const TaskFooter: FC<ITaskFooter> = ({
  onClick = (e) => console.info(e),
  onStatusChange = (e) => console.info(e),
}): ReactElement => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={4}>
      <FormControlLabel
        label="In Progress"
        control={<Switch onChange={(e) => onStatusChange(e)} color="warning" />}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{ color: '#ffffff' }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  )
}
