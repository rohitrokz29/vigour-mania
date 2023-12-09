import { useState } from "react"
import API from "../api/api"
import { useUserContext } from "./useUserContext";

export const useFetchUser = () => {
    const {setProgress}=useUserContext();
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const fetchData = (username) => {
        setProgress(40)
        setIsLoading(true);
        API.get(`/api/user/${username}`)
            .then((response) => {
                setProgress(70)
                if (response.status === 200) {
                    setUserData(response.data);
                    setProgress(100)
                    setIsLoading(false);
                }
            }).catch((err) => {
                setError(err.response.data.message);
                setIsLoading(false);
                setProgress(100);
            })
    }
    return {
        userData,
        isLoading,
        error,
        fetchData
    };
}
