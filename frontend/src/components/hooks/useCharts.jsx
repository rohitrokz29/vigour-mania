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
                console.log(response.data.charts)

            }
        })
        .catch(err=>{
            setError(err);
            setIsLoading(false);
        })
    }
    const addTracker=(data)=>{

        setIsLoading(true)
        API.put('api/chart/add-chart',data)
        .then(response=>{
            if(response.status===200){
                setIsLoading(false)
                setError('')
                fetchTracks()
            }
        })
        .catch(err=>{
            setError(error);
            console.log(error)
            setIsLoading(false);
        })
    }
    return {charts,error,isLoading,fetchTracks,addTracker}
}
