import API from "../api/api"
import { useState } from "react"
import { useUserContext } from "./useUserContext";


export const useCharts = () => {
    const [charts, setCharts] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTracks = () => {
        setIsLoading(true)
        API.get('/api/charts/get-charts')
            .then(response => {
                if (response.status === 200) {
                    setCharts(response.data.charts);
                    setIsLoading(false);
                    console.log(response.data.charts)

                }
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            })
    }
    const addTracker = (data) => {

        API.put('api/charts/add-chart', data)
            .then(response => {
                if (response.status === 200) {
                    setError('')
                    fetchTracks()
                }
            })
            .catch(err => {
                setError(error);
                console.log(error)
            })
    }

    const addChartData = async (_id, createdAt, value, maxWeek) => {
        setIsLoading(true)
        //calculating number of weeks from the time of creation
        const time = (new Date()).getTime() - (new Date(createdAt)).getTime()

        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

        const week = Math.floor(time / oneWeekInMilliseconds) + 1;
        if (maxWeek === week) {
            setError('cant add')
            return false;
        }
        API.put('/api/charts/update-chart-data', { chartId: _id, week, value })
            .then(res => {
                if (res.data.acknowledged) {
                    /*  API.get(`api/charts/get-chart/${chartId}`)
                      then(res => {
                          if (res.status === 200) {
                              return { data: res.data.data, isModified: true }
                          }
                      })
                          .catch(err => {
                              return { isModified: false }
                          })*/
                    //REMAIN TO DO
                    //Dont do the  aboue insted give the response of put method as the new Updated data
                }
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
                return { isModified: false }
            })

    }
    const deleteChart = async (_id) => {
        setIsLoading(true)
        API.delete(`/api/charts/${_id}`)
            .then(res => {
                if (res.data.acknowledged) {

                    fetchTracks();
                    setIsLoading(false);

                }
            })
            .catch(err => {
                setIsLoading(false);
                setError(err)
                return false;
            })
    }
    return { charts, error, isLoading, fetchTracks, addTracker, addChartData, deleteChart }
}
