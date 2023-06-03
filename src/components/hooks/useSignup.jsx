
import axios from "axios"
import React, { useState } from "react"
import { useUserContext } from "./useUserContext";
import API from '../api/api'
export const useSignup = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch,setIsSignedIn } = useUserContext();
    const SignUp = async (data) => {

        setIsLoading(true);

        API.post('/api/user/signup', data)
            .then(async (response) => {
                if (response.status === 201) {
                    const user = response.data;
                    localStorage.setItem('vmuser', JSON.stringify(user));
                    dispatch({ type: 'signin', payload: user })
                    setError(null);
                    setIsSignedIn(true);
                }
            }).catch(error => {
                console.log((error))
                setError(error.response.data.message);
            })
        setIsLoading(false);



    }
    return { SignUp, error, isLoading };
}