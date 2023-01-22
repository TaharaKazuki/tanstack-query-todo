import { FC, ReactElement } from 'react'
import { Avatar, Box, Typography } from '@mui/material'

type Props = {
  name?: string
}

export const Profile: FC<Props> = ({ name = 'John' }): ReactElement => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Avatar
        sx={{
          width: '96px',
          height: '96px',
          backgroundColor: 'primary.main',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4" color="text.primary">
          {`${name.substring(0, 1)}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal tasks manager
      </Typography>
    </Box>
  )
}
