import { useEffect, useState, createContext } from "react"

export const SubscribeContext = createContext()

export const SubscribeProvider = ({children}) => {
    const apiUrl = ''
    const defaultValues = {email: ''}
    const [formData, setFormData] = useState(defaultValues)
    
    const handleChange = (e) => {
        setFormData({ email: e.target.value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        setFormData(defaultValues)
    }


    return (
        <SubscribeContext.Provider value={{ formData, handleChange, handleSubmit }}>
            {children}
        </SubscribeContext.Provider>
    )
}