import React, { useEffect, useState } from 'react'
//components
import TrackerGraph from './TrackerGraph'
//custom hooks
import { useChartsContext } from '../../../hooks/useChartsContext'
//assets
import Null from '../../../../assets/null.png'

const Tracks = () => {

    const { charts, error, isLoading, fetchTracks, addTracker } = useChartsContext();
    const [chartType, setChartType] = useState("");
    const [value, setValue] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [unit, setUnit] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            week: 1,
            chartType, unit,
            value: +value,
            minValue: +min,
            maxValue: +max
        }
        const res = await addTracker(data);
        if (res) {
            setChartType("");
            setMax(0);
            setValue(0);
            setMin(0);
            setUnit("")
        }
    }
    return (
        <>
            <div className="trackers-head">
                Your Trackers
            </div>
            <div className="graphs">

                {

                    charts[0] ?
                        <div className="trackers">

                            {charts.map((item, index) => {
                                return (
                                    <TrackerGraph graph={item} key={item._id} />
                                )
                            })
                            }
                        </div>
                        :
                        <div className=" no-tracker">
                            <h1>
                                {isLoading?"Loading...":"No Active Trackers"}
                            </h1>
                        </div>
                }

                <div className="track-forms trackers">
                    <form onSubmit={handleSubmit} >
                        <div className="add-chart ">Add Tracker</div>
                        <div className="input-field chart ">
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
                        <button type='submit' disabled={isLoading} className='add-data'>{isLoading ? "Adding Tracker" : "Add Tracker"}</button>
                    </form>
                    {/* {error!==null?<div className="error">{error}</div>:""} */}
                </div>
            </div>
        </>
    )
}

export default Tracks   