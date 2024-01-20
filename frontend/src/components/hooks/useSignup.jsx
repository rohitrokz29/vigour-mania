
import { useState } from "react"
import { useUserContext } from "./useUserContext";
import API from '../api/api'

export const useSignup = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch, setIsSignedIn,setProgress } = useUserContext();

    const SignUp = async (data) => {
        setIsLoading(true);
        setProgress(30)
        API.post('/api/user/signup', data)
            .then(async (response) => {
                setProgress(60);
                if (response.status === 201) {
                    const user = response.data;
                    setProgress(70);
                    localStorage.setItem('vmuser', JSON.stringify(user));
                    setProgress(80);
                    dispatch({ type: 'signin', payload: user })
                    setProgress(90);
                    setError(null);
                    setIsSignedIn(true);
                    setIsLoading(false);
                    setProgress(100);
                }
            }).catch(error => {
                setError(error.response.data.message);
                setIsLoading(false);
                setProgress(100)
            })
    }
    return {
        SignUp,
        error,
        isLoading
    };
}