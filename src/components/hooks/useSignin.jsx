import { useUserContext } from "./useUserContext";
import { useState } from "react";
import API from '../api/api'
export const useSignin= () => {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useUserContext();
    const signin = async (data) => {

        setIsLoading(true);
        console.log(data)

        API.post('/api/user/signin', data)
            .then( (response) => {
                console.log(response)
                if (response.status === 201) {
                    const user = response.data;
                    localStorage.setItem('vmuser', JSON.stringify(user));
                    dispatch({ type: 'signin', payload: user })
                    setError(null);
                }
            }).catch(err => {
                setError(err.response.data.message);
            })
        setIsLoading(false);
    }

    return {signin,isLoading,error};
}