import API from "../api/api";
import { useUserContext } from "./useUserContext";
import { useState } from "react";
export const useLogout = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch, setIsSignedIn } = useUserContext();
    const logout = () => {
        console.log('logout');
        localStorage.removeItem('vmuser');
        dispatch({ type: 'logout' });
        setIsSignedIn(false);
    }
    return { logout };
}