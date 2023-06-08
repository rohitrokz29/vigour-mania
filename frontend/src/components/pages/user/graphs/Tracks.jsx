import React, { useEffect } from 'react'
import TrackerGraph from './TrackerGraph'
import { useCharts } from '../../../hooks/useCharts'
const Tracks = () => {

    const { charts, error, isLoading, fetchTracks } = useCharts();

    useEffect(() => {
        fetchTracks();
        console.log(charts)
    }, [])

    return (

        
            (!isLoading) &&
            charts.map((item,index)=>{
                return (
                    <TrackerGraph key={index} graph={item}/>
                )
            })
        
    )
}

export default Tracks   