import API from "../api/api"
import { useState } from "react"
import { useUserContext } from "./useUserContext";


export const useCharts = () => {
    const [charts, setCharts] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const fetchTracks=()=>{
        API.get('/api/chart/get-charts')
        .then(response=>{
            if(response.status===200){
                setCharts(response.data.charts);
                setIsLoading(false);
                console.log(response)
            }
        })
        .catch(err=>{
            setError(err);
            setIsLoading(false);
        })
    }
    return {charts,error,isLoading,fetchTracks}
}
