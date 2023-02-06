import {FormControl, Select, InputLabel, MenuItem, Box, Button} from "@mui/material"
import { CATEGORIES } from "../assets/categories"

const Form = () => {
  return (
    <form>
        <FormControl>
            <InputLabel>Category</InputLabel>
            <Select
                label="category"
                >
                    {CATEGORIES.map(category => (
                        <MenuItem key={category.value} value={category.value}>
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