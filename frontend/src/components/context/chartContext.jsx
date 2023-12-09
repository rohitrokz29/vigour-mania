import API from "../api/api";
import {
    createContext,
    useState,
    useEffect,
} from "react";
import { useUserContext } from "../hooks/useUserContext";
import { useLogout } from "../hooks/useLogout";
export const chartContext = createContext();


export const ChartState = ({ children }) => {
    const [charts, setCharts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdding, setisAdding] = useState(false);
    const { setProgress } = useUserContext();
    const { logout } = useLogout();
    useEffect(() => {
        fetchTracks()
    }, [])

    const fetchTracks = async () => {
        setProgress(30);
        setIsLoading(true)
        //!HERE SOME PROBLEM WITH AUTH
        API.get('/api/charts/get')
            .then(async (response) => {
                if (response.status === 200) {
                    setProgress(70);
                    setCharts(response.data.charts);
                    setIsLoading(false);
                    setProgress(100);
                }

            })
            .catch(async (err) => {
                setError(err);
                setIsLoading(false);
                setProgress(100);
            })

    }
    const addTracker = async (data) => {
        setProgress(30);
        setIsLoading(true);
        return await API.put('api/charts/add', data)
            .then(response => {
                setProgress(60);
                if (response.status === 200) {
                    setError('')
                    setIsLoading(false)
                    setProgress(70);
                    setCharts([response.data, ...charts]);
                    setProgress(100);
                    return true;
                }
            })
            .catch(err => {
                setError(error);
                setIsLoading(false)
                setProgress(100);
                return false
            })
    }

    const addChartData = async ({ _id, createdAt, value, maxWeek }) => {
        setProgress(10);
        setisAdding(true)
        //calculating number of weeks from the time of creation
        const time = (new Date()).getTime() - (new Date(createdAt)).getTime()
        //calculating milliseconds in one week
        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
        //calculating number of weeks in time chart created and current time
        const week = Math.floor(time / oneWeekInMilliseconds) + 1;
        setProgress(30);
        if (week <= maxWeek) {
            setError('')
            setisAdding(false)
            setProgress(0)
            return false;
        }
        return API.put('/api/charts/update', { chartId: _id, week, value })
            .then(res => {
                setProgress(60);
                if (res.status === 200) {
                    setisAdding(false)
                    setProgress(100);
                    return { week: res.data.week, value: res.data.value }
                }
            })
            .catch(err => {
                setError(err)
                setisAdding(false)
                setProgress(100);
                return false;
            })

    }
    const deleteChart = async (_id) => {
        setProgress(30);
        API.delete(`/api/charts/${_id}`)
            .then(res => {
                setProgress(60);
                if (res.data.acknowledged) {
                    const newCharts = charts.filter(chart => chart._id !== _id)
                    setCharts(prevCharts => newCharts)
                    setProgress(80);
                    setProgress(100);
                }
            })
            .catch(err => {
                setError(err)
                setProgress(100);
                return false;
            })
    }
    return (
        <chartContext.Provider value={{
            charts,
            fetchTracks,
            isLoading,
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