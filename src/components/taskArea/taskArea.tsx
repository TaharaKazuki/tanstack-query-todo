import { FC, ReactElement } from 'react'
import { Box, Grid } from '@mui/material'

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Content Area</h2>
      </Box>
    </Grid>
  )
}
