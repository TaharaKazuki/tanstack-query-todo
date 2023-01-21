import { FC, ReactElement } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

export const TaskCounter: FC = (): ReactElement => {
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
            borderColor: 'warning.light',
          }}
        >
          <Typography>10</Typography>
        </Avatar>
        <Typography>Subtitle</Typography>
      </Box>
    </>
  )
}
