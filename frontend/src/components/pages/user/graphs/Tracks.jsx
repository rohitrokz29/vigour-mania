import React, { useState } from 'react';

//components
import TrackerGraph from './TrackerGraph';
import CompHead from '../../../cards/CompHead';
//custom hooks
import { useChartsContext } from '../../../hooks/useChartsContext';
import { useThemeContext } from '../../../hooks/useThemeContext';
//assets
import Null from '../../../../assets/null.png'

const Tracks = () => {

    //theme
    const { theme } = useThemeContext();
    //accessing charts state
    const { charts, error, isLoading, fetchTracks, addTracker } = useChartsContext();
    // data states to add new tracker graph
    const [chartType, setChartType] = useState("");
    const [value, setValue] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [unit, setUnit] = useState("");
    // set the model open /close
    const [isOpen, setIsOpen] = useState(false)

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
            setUnit("");
            setIsOpen(isOpen => !isOpen)
        }
    }
    return (
        <>

            <CompHead heading="Your Trackers" isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className={`graphs bg-${theme}er`}>

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
                        <div className=" tracker no-tracker">
                            <h1>
                                {isLoading ? "Loading..." : "No Active Trackers"}
                            </h1>
                        </div>
                }

                <div className={`track-forms  ${isOpen ? " " : "form-display "} add-form bg-${theme}`}  >
                    <form onSubmit={handleSubmit} >
                        <div className={`add-chart dark-text-${theme}`} >Add Tracker</div>
                        <div className="chart ">
                            <label htmlFor="trackerName" className={` dark-text-${theme}`}>Tracker Name</label>
                            <br />
                            <input type="text" name='chartType' className="chart-name" id='trackerName' placeholder='Tracker Name' value={chartType} onChange={(e) => setChartType(e.target.value)} />
                        </div>
                        <div className=" chart">
                            <label htmlFor="firstValue"  className={` dark-text-${theme}`}>First Value</label>
                            <br />
                            <input type="number" name="value" className="chart-value" id='firstValue' placeholder='Trackers First Value' value={value} onChange={(e) => setValue(e.target.value)} />
                        </div>
                        <div className=" chart">
                            <label htmlFor="unit"  className={` dark-text-${theme}`}>Unit</label>
                            <br />
                            <input type="text" name="unit" className="chart-value" id='unit' placeholder='Unit of value(optional)' value={unit} onChange={(e) => setUnit(e.target.value)} />
                        </div>
                        <div className="chart">
                            <label htmlFor="minValue"  className={` dark-text-${theme}`}>Minimum Value</label>
                            <br />
                            <input type="number" name="min" className="chart-value" id='minValue' placeholder='Set Mimimum Value' value={min} onChange={(e) => setMin(e.target.value)} />
                        </div><div className=" chart" >
                            <label htmlFor="maxValue"  className={` dark-text-${theme}`}>Maximum Value</label>
                            <br />
                            <input type="number" name='max' className="chart-value" id='maxValue' placeholder='Set Maximum Value' value={max} onChange={(e) => setMax(e.target.value)} />
                        </div>
                        <button type='submit' disabled={isLoading} className='add-data'><span className={`dark-text-${theme}`}>{isLoading ? "Adding Tracker" : "Add Tracker"}</span></button>
                    </form>
                    {/* {error!==null?<div className="error">{error}</div>:""} */}
                </div>
            </div>
        </>
    )
}

export default Tracks   