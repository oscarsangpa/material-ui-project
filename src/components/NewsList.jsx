import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNews from "../hooks/useNews"
import { News } from "./News"
import { NewsPagination } from "./NewsPagination"

export const NewsList = () => {
    const {news} = useNews()

    console.log(news)
  return (
    <>
        <Typography
            textAlign="center"
            marginY={5}
            variant="h3"
            component="h3"
        >
            Breaking News
        </Typography>

        <Grid 
            container
            spacing={2}
        >
            {news.map(newMap => (
                <News
                    key={newMap.url}
                    news={newMap} 
                />
            ))}
        </Grid>
        <NewsPagination/>
    </>
  )
}
