import API from "../api/api";
import { useUserContext } from "./useUserContext";
import { useState } from "react";
export const useLogout = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch, setIsSignedIn ,setProgress} = useUserContext();
    const logout = () => {
        setProgress(10)
        console.log('logout');
        localStorage.removeItem('vmuser');
        setProgress(50);
        dispatch({ type: 'logout' });
        setIsSignedIn(false);
        setProgress(100)
    }
    return {logout };
}