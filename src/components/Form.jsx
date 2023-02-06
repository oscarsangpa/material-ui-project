import {FormControl, Select, InputLabel, MenuItem, Box, Button} from "@mui/material"
import { useEffect} from "react"
import { CATEGORIES } from "../assets/categories"
import useGetNews from "../hooks/useGetNews"
import useNews from "../hooks/useNews"

const Form = () => {
    const { handleChangeCategory, category } = useNews()
    const {refreshNews} = useGetNews()

    useEffect(() => {
        refreshNews(category)
    }, [category])

  return (
    <form>
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
                label="Category"
                onChange={handleChangeCategory}
                value={category}
            >
                    {CATEGORIES.map(category => (
                        <MenuItem 
                            key={category.value} 
                            value={category.value}
                        >
                        {category.label}
                        </MenuItem>
                    ))}
            </Select>

            <Box sx={{marginTop: 2}}>
            <Button
                fullWidth
                variant="contained"
                color="primary"
            >
                Search News
            </Button>
            </Box>
        </FormControl>
    </form>
  )
}

export default Form