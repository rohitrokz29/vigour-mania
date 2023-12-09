import API from "../api/api";
import { useUserContext } from "./useUserContext";
import { useState } from "react";
import {useThemeContext} from "./useThemeContext";
export const useLogout = () => {
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch, setIsSignedIn ,setProgress} = useUserContext();
    const {changeTheme}=useThemeContext();
    const logout = async () => {
        setIsLoading(true);
        setProgress(10);
        API. post('api/user/logout')
        .then((res)=>{
                localStorage.clear();
                setProgress(50);
                dispatch({ type: "logout" });
                setIsSignedIn(false); 
                changeTheme('light')
                setProgress(100);
        })
        .catch(err=>{
            setError(err.message);
            setIsLoading(false);
            setProgress(100);
        });
    }
    return {logout };
}