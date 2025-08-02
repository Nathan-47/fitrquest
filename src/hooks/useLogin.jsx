import { useState } from "react";
import { useAuthContext } from './useAuthContext';


export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('https://fitrquest-backend.onrender.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        // try catch block to check whether the response body is empty or not valid JSON
        let json;
        try {
            json = await response.json();
        } catch (err) {
            json = null;
        }

        // If response is not working then terminate loading and display error
        if (!response.ok) {
            setIsLoading(false);
            setError(json ? json.error : 'Error');
        }
        if (response.ok) {
            // save user to local storage
            // TODO: Check to see if using local storage is secure for users
            localStorage.setItem('user', JSON.stringify(json));

            // update auth context
            dispatch({ type: 'LOGIN', payload: json });
            
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};
