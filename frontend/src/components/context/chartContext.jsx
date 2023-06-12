import API from "../api/api";
import { createContext, useState, useEffect } from "react";
export const chartContext = createContext();


export const ChartState = ({ children }) => {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdding, setisAdding] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        fetchTracks()
    }, [])


    const fetchTracks = async () => {
        setIsLoading(true)
        API.get('/api/charts/get-charts')
            .then(response => {
                if (response.status === 200) {

                    setCharts(response.data.charts);
                    setIsLoading(false);
                }
            })
            .catch(err => {
                setError(err);
                setIsLoading(false);
            })
        setIsLoading(false);

    }
    const addTracker = async (data) => {
        setIsLoading(true);

        return await API.put('api/charts/add-chart', data)
            .then(response => {
                if (response.status === 200) {
                    setError('')
                    setIsLoading(false)
                    charts.unshift(response.data)
                    return true;
                }
            })
            .catch(err => {
                setError(error);
                console.log(error)
                setIsLoading(false)

                return false
            })
        setIsLoading(false)
    }

    const addChartData = async (_id, createdAt, value, maxWeek) => {
        setisAdding(true)
        //calculating number of weeks from the time of creation
        const time = (new Date()).getTime() - (new Date(createdAt)).getTime()

        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

        const week = Math.floor(time / oneWeekInMilliseconds) + 1;
        if (week <= maxWeek) {
            setError('')
            setisAdding(false)
            return false;
        }
        return API.put('/api/charts/update-chart-data', { chartId: _id, week, value })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    setisAdding(false)
                    return { week: res.data.week, value: res.data.value }
                }
            })
            .catch(err => {
                setError(err)
                setisAdding(false)
                return false;
            })

    }
    const deleteChart = async (_id) => {
        setIsDeleting(true)
        console.log(charts)
        API.delete(`/api/charts/${_id}`)
            .then(res => {
                if (res.data.acknowledged) {
                    const newCharts = charts.filter(chart => chart._id !== _id)
                    setCharts(prevCharts => newCharts)
                    setIsDeleting(false);
                    console.log(charts)
                }
            })
            .catch(err => {
                setIsDeleting(false);
                setError(err)
                return false;
            })
        setIsDeleting(true)

    }
    return (
        <chartContext.Provider value={{
            charts,
            fetchTracks,
            isLoading,
            isDeleting,
            isAdding,
            deleteChart,
            addChartData,
            addTracker,
            error
        }}>
            {children}
        </chartContext.Provider>
    )
}