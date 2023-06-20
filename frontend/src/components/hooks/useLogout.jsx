import API from "../api/api";
import { useUserContext } from "./useUserContext";
import { useState } from "react";
export const useLogout = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch, setIsSignedIn ,setProgress} = useUserContext();
    const logout = async () => {
        setIsLoading(true);
        setProgress(10);
        console.log('logout');
        API. post('api/user/logout')
        .then((res)=>{
            if(res.status===200){
                localStorage.removeItem('vmuser');
                setProgress(50);
                dispatch({ type: 'logout' });
                setIsSignedIn(false); 
                setProgress(100);
       
            }
        })
        .catch(err=>{
            setError(err.message);
            setIsLoading(false);
            setProgress(100);
        });
    }
    return {logout };
}