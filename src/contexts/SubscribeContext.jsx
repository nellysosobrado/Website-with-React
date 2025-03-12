import { useEffect, useState, createContext } from "react"

// Create a Context to share subscription data between components
export const SubscribeContext = createContext()

export const SubscribeProvider = ({children}) => {
    // API 
    const apiUrl = 'https://kyhn24.azurewebsites.net/api/subscribe'

    const defaultValues = {email: ''}
    
    // variables to store the form data, message and error
    const [formData, setFormData] = useState(defaultValues)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    
    // Handle changes in the email input field
    const handleChange = (e) => {
        setFormData({ email: e.target.value });
    }

    // Validate email 
    // Returns true if email is valid, false if not
    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        // Prevent the form from refreshing the page
        e.preventDefault()
        
        // Clear any existing messages
        setMessage('')
        setError('')

        // Check if email is valid before sending
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address')
            return
        }

        // Try to send the email to the API
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Convert the email data to JSON format
                body: JSON.stringify({ email: formData.email })
            })

            // If-statement to check if the API call was successful
            if (response.ok) {
                setMessage('Thank you for subscribing!')
                setFormData(defaultValues) // Clear the form
            } else {
                
                setError('Something went wrong during registration')
            }
        } catch (err) {
           
            setError('An error occurred while connecting to the server')
        }
    }

    // Share the data with the rest of the app
    return (
        <SubscribeContext.Provider value={{ 
            formData, 
            handleChange, 
            handleSubmit, 
            message, 
            error 
        }}>
            {children}
        </SubscribeContext.Provider>
    )
}