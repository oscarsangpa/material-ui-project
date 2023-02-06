import {useEffect, useState} from 'react'
import axios from 'axios'
import useNews from './useNews'

const useGetNews = () => {
    const { category } = useNews()
    const [news, setNews] = useState([])

    const refreshNews = async(category) => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    
        const { data } = await axios(url)
        setNews(data)

        console.log(data)
    }

    

  return {category, news, refreshNews}
}

export default useGetNews