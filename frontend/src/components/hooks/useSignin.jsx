import { useUserContext } from "./useUserContext";
import { useState } from "react";
import API from '../api/api'


export const useSignin = () => {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch, setIsSignedIn,setProgress } = useUserContext();

    const signin = async (data) => {
        setProgress(20)
        setIsLoading(true);
        API.post('/api/user/signin', data)
            .then((response) => {
                setProgress(50)
                if (response.status === 201) {
                    const user = response.data;
                    setProgress(60)
                    localStorage.setItem('vmuser', JSON.stringify(user));
                    setProgress(80)
                    dispatch({ type: 'signin', payload: user })
                    setError(null);
                    setIsSignedIn(true);
                    setIsLoading(false);
                    setProgress(100)
                }
            }).catch(err => {
                setError(err.response.data.message);
                setIsLoading(false);
                setProgress(100);
            })
    }

    return {
        signin,
        isLoading,
        error
    };
}