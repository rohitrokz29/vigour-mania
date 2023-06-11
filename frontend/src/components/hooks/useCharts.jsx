import API from "../api/api"
import { useState } from "react"
import { useUserContext } from "./useUserContext";


export const useCharts = () => {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchTracks = () => {
        setIsLoading(true)
        API.get('/api/charts/get-charts')
            .then(response => {
                if (response.status === 200) {
                    setCharts(charts=>response.data.charts);
                    setIsLoading(false);

                }
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            })
            setIsLoading(false);

    }
    const addTracker = (data) => {
        setIsLoading(true);

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
            setIsLoading(false)
    }

    const addChartData = async (_id, createdAt, value, maxWeek) => {
        setIsLoading(true)
        //calculating number of weeks from the time of creation
        const time = (new Date()).getTime() - (new Date(createdAt)).getTime()

        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

        const week = Math.floor(time / oneWeekInMilliseconds) + 1;
        if (week<=maxWeek) {
            setError('cant add')
            setIsLoading(false)
            return false;
        }
        return API.put('/api/charts/update-chart-data', { chartId: _id, week, value })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    setIsLoading(false)
                    return { week: res.data.week, value: res.data.value }
                }
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
                return false;
            })

    }
    const deleteChart = async (_id) => {
        setIsLoading(true)
        API.delete(`/api/charts/${_id}`)
            .then(res => {
                if (res.data.acknowledged) {
                                 setCharts(charts=>charts.filter(item=>item._id!==_id))       
                    setIsLoading(false);

                }
            })
            .catch(err => {
                setIsLoading(false);
                setError(err)
                return false;
            })
            setIsLoading(true)

    }
    return { charts, error, isLoading, fetchTracks, addTracker, addChartData, deleteChart }
}
