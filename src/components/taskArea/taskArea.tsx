import { FC, ReactElement } from 'react'
import { Box, Grid } from '@mui/material'
import { format } from 'date-fns'

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Tasks As On</h2>
        {format(new Date(), 'PPPP')}
      </Box>
    </Grid>
  )
}
