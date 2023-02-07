import { useState, createContext, useEffect } from "react"
import axios from "axios"

const NewsContext = createContext()

const NewsProvider = ({children}) => {

    const [category, setCategory] = useState("general")
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0) 

    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    } 

    const handleChangePage = (e, value) => {
        setPage(value)
    }

    useEffect(() => {
        const APICall = async() => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        
            const { data } = await axios(url)
            setNews(data.articles)
            setTotalNews(data.totalResults)
            setPage(1)
    
        }
        APICall()
        
    }, [category])

    useEffect(() => {
        const APICall = async() => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        
            const { data } = await axios(url)
            setNews(data.articles)
            setTotalNews(data.totalResults)

    
        }
        APICall()
        
    }, [page])



    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                news,
                totalNews,
                handleChangePage,
                page
            }}    
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext