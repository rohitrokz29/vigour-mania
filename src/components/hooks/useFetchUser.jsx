import { useState } from "react"
import API from "../api/api"
import { useUserContext } from "./useUserContext";

export const useFetchUser=()=>{
    const {user}=useUserContext();
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)  
    const [error, setError] = useState(null)     
    const fetchData=()=>{
        setIsLoading(true);
        API.get(`/api/user/${user.username}`)
        .then((response)=>{
            if(response.status===200){
                setUserData(response.data);
                setIsLoading(false);
            }
        }).catch((err)=>{
            setError(err.response.data.message);
            setIsLoading(false);
        })
    }
    return {userData,isLoading,error,fetchData};
}
