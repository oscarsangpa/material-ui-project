import {FormControl, Select, InputLabel, MenuItem} from "@mui/material"
import { CATEGORIES } from "../assets/categories"
import useNews from "../hooks/useNews"

const Form = () => {
    const { handleChangeCategory, category } = useNews()

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

        </FormControl>
    </form>
  )
}

export default Form