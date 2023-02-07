import useNews from '../hooks/useNews'
import { Pagination } from '@mui/material'
import { Stack } from '@mui/system'

export const NewsPagination = () => {
    const { totalNews, handleChangePage, page } = useNews()

    const totalPages = Math.ceil(totalNews /20)

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
            count={totalPages}
            color="primary"
            onChange={handleChangePage}
            page={page}
        >

        </Pagination>
    </Stack>
  )
}
