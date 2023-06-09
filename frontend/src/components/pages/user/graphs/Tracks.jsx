import React, { useEffect, useState } from 'react'
import TrackerGraph from './TrackerGraph'
import { useCharts } from '../../../hooks/useCharts'
const Tracks = () => {

    const { charts, error, isLoading, fetchTracks, addTracker } = useCharts();
    const [chartType, setChartType] = useState("");
    const [value, setValue] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [unit, setUnit] = useState("")
    useEffect(() => {
        fetchTracks();
        console.log(charts)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            week: 1,
            chartType,unit,
            value: +value,
            min: +min,
            max: +max
        }
        addTracker(data);}
        
    return (


        (!isLoading) &&
        <>
            <div className="graphs">
                <div className="trackers">
                    {charts.map((item, index) => {
                        return (
                            <TrackerGraph graph={item} key={index} />
                        )
                    })}
                </div>
                <div className="track-forms">
                    <form onSubmit={handleSubmit} >
                        <div className="add-chart ">Add Tracker</div>
                        <div className="input-field chart">
                            <label htmlFor="trackerName">Tracker Name</label>
                            <br />
                            <input type="text" name='chartType' className="chart-name" id='trackerName' placeholder='Tracker Name' value={chartType} onChange={(e) => setChartType(e.target.value)} />
                        </div>

                        <div className="input-field chart">
                            <label htmlFor="firstValue">First Value</label>
                            <br />
                            <input type="number" name="value" className="chart-value" id='firstValue' placeholder='Trackers First Value' value={value} onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <div className="input-field chart">
                            <label htmlFor="unit">Unit</label>
                            <br />
                            <input type="text" name="unit" className="chart-value" id='unit' placeholder='Unit of value(optional)' value={unit} onChange={(e) => setUnit(e.target.value)} />
                        </div>
                        <div className="input-field chart">
                            <label htmlFor="minValue">Minimum Value</label>
                            <br />
                            <input type="number" name="min" className="chart-value" id='minValue' placeholder='Set Mimimum Value' value={min} onChange={(e) => setMin(e.target.value)} />
                        </div><div className="input-field chart">
                            <label htmlFor="maxValue">Maximum Value</label>
                            <br />
                            <input type="number" name='max' className="chart-value" id='maxValue' placeholder='Set Maximum Value' value={max} onChange={(e) => setMax(e.target.value)} />
                        </div>
                        <button type='submit' className='add-data'>Add Tracker</button>
                    </form>
                    {/* {error!==null?<div className="error">{error}</div>:""} */}
                </div>

            </div>
        </>

    )
}

export default Tracks   