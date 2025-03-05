import { useEffect, useState, createContext } from "react"

export const FaqContext = createContext()

export const FaqProvider = ({children}) => {
    const apiUrl = 'https://kyhn24.azurewebsites.net/api/faq'
    const [faqs, setFaqs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            setIsLoading(true)
            const res = await fetch(apiUrl)
            if (!res.ok) {
                throw new Error('Failed to fetch data')
            }
            const data = await res.json()
            setFaqs(data)
        } catch (err) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <FaqContext.Provider value={{ faqs, isLoading, error }}>
            {children}
        </FaqContext.Provider>
    )
}