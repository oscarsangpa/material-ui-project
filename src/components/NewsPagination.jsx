import { Pagination } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export const NewsPagination = () => {
  return (
    <Stack
        sx={{
            marginY: 5
        }}
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
    >
        <Pagination
            count={3}
            color="primary"
        >

        </Pagination>
    </Stack>
  )
}
