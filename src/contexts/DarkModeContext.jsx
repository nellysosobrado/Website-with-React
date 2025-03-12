import { useEffect, useState, createContext } from "react"

// Create a context for the dark mode
export const DarkModeContext = createContext()

export const DarkModeProvider = ({children}) => {
    //Function to get the initial theme
    const getInitialTheme = () => {
        //  
        const savedTheme = localStorage.getItem('darkMode')
        
        // If there is a saved theme
        if (savedTheme !== null) {
            // Convert the text 'true'/'false' to a real boolean value
            return savedTheme === 'true'
        }
        
        // If there is no saved theme, use the system's setting
        // This checks if the user has dark mode enabled on their computer/phone
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
        
    // State to keep track of whether dark mode is on or off
    const [darkMode, setDarkMode] = useState(getInitialTheme)
    
    // This useEffect runs whenever darkMode changes
    useEffect(() => {
        try {
            // Save the choice in the browser's memory
            localStorage.setItem('darkMode', darkMode)
            
            // Update the page's theme
            // If darkMode is true, set the theme to 'dark', otherwise 'light'
            const theme = darkMode ? 'dark' : 'light'
            document.documentElement.setAttribute('data-theme', theme)
        } catch (error) {
            console.error('Kunde inte spara tema-inställningen:', error)
        }
    }, [darkMode])

    // This useEffect runs when the component is mounted (when the page loads)
    useEffect(() => {
        // Create a mediaQuery to listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        
        // Function that runs when the system theme changes
        const handleSystemThemeChange = (event) => {
            // Only update the theme if the user hasn't made their own choice
            if (localStorage.getItem('darkMode') === null) {
                setDarkMode(event.matches)
            }
        }
        
        // Start listening for changes in the system theme
        mediaQuery.addEventListener('change', handleSystemThemeChange)
        
        // Clean up when the component is unmounted
        return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }, [])

    // Function to toggle between light and dark theme
    const toggleDarkMode = () => {
        setDarkMode(currentMode => !currentMode)
    }

    // Provide the darkMode status and the toggle function to all child components
    return (
        <DarkModeContext.Provider value={{ 
            darkMode,      // true/false if dark mode is on/off
            toggleDarkMode // function to toggle theme
        }}>
            {children}
        </DarkModeContext.Provider>
    )
}