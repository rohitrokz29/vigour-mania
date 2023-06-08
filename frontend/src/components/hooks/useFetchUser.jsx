import { useState } from "react"
import API from "../api/api"
import { useParams } from "react-router-dom";

export const useFetchUser=()=>{
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)  
    const [error, setError] = useState(null)     
    const {username}=useParams();
    const fetchData=()=>{
        setIsLoading(true);
        API.get(`/api/user/${username}`)
        .then((response)=>{
            if(response.status===200){
                console.log(response)
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
