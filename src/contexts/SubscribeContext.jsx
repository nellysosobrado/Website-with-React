import { createContext, useContext, useState } from 'react';

const SubscribeContext = createContext();

export const useSubscribe = () => {
    const context = useContext(SubscribeContext);
    if (!context) {
        throw new Error('useSubscribe must be used within a SubscribeProvider');
    }
    return context;
};

export const SubscribeProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const subscribe = async (email) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('https://kyhn24.azurewebsites.net/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Subscription failed');
            }

            const data = await response.json();
            setSuccess(true);
            return data;

        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const value = {
        subscribe,
        loading,
        error,
        success
    };

    return (
        <SubscribeContext.Provider value={value}>
            {children}
        </SubscribeContext.Provider>
    );
}; 