import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//chart components
import {
    ResponsiveContainer,
    CartesianGrid,
    XAxis,
    YAxis,
    LabelList,
    Tooltip,
    Area,
    AreaChart
} from 'recharts'
//styles
import './trackers.css'
//custom hooks
import { useChartsContext } from "../../../hooks/useChartsContext";
import { useThemeContext } from '../../../hooks/useThemeContext';

const TrackerGraph = ({ graph }) => {

    const { addChartData, error, isLoading, deleteChart, isAdding } = useChartsContext();
    const { theme } = useThemeContext();
    //destructuring data from graph data props
    const { chartType, createdAt, minValue, maxValue, unit } = graph;
    const [data, setData] = useState(graph.data)

    /**
     * to add the new data to a specific graph data ->is data open , value , placeholder
     */

    const [isDataOpen, setIsDataOpen] = useState(false)
    const [value, setValue] = useState("");
    const [placeholder, setPlaceholder] = useState("Enter Data")


    const sendReq = async () => {
        let maxWeek = data?.at(0).week;
        //finding maximum value of week from all data of points on graph 
        data.forEach(item => {
            maxWeek = Math.max(maxWeek, item.week)
        });

        //+value -> converts string to number 
        let res = await addChartData({ _id: graph._id, createdAt, value: +value, maxWeek });
        if (res) {
            setData([...data, res])
            setIsDataOpen(false)
        }
        else {
            setPlaceholder("Error")
            setValue("")
            setTimeout(() => {
                setIsDataOpen(false)
            }, 1500);
        }
    }

    const addData = () => {
        setValue("")
        setPlaceholder(placeholder => "Enter Data")
        if (isDataOpen) { sendReq() }
        else {
            setIsDataOpen(isDataOpen => !isDataOpen)
        }
    }

    const deleteTrack = async () => {
        const res = await deleteChart(graph._id);
    }
    return (
        <>
            <div className="tracker">
                <div className="chartAction dark-text">
                    <div className="chartType">
                        <div to={chartType} className={`dark-text-${theme}`}>
                            {chartType}
                        </div>
                    </div>
                    <div className="buttons">
                        <button className='add-data ' onClick={addData}>
                            <Link className={`dark-text-${theme}`}>
                                {isAdding ? "Adding" : isDataOpen ? "Click Here" : "Add Data"}
                            </Link>
                        </button>
                        {
                            isDataOpen ?
                                <input type="number" name="data" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className='data-input' />
                                : <button className='delete-graph ' onClick={deleteTrack}><Link >  Delete</Link></button>
                        }
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="90%" key={`${data.length}`}  >
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            bottom: 20,
                        }}
                        key={`${data.length}`}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={`${100 - minValue * 100 / maxValue}%`} stopColor="#14e33efc" stopOpacity={1} />
                                <stop offset={`${minValue * 100 / maxValue}%`} stopColor="#ff1111fc" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis dataKey="week" label={{ value: 'week', position: 'bottom'}} />
                        <YAxis label={{ value: unit, angle: -90, position: 'center' }} width={unit ? 80 : 60} />
                        <Tooltip />
                        <Area type="monotone" connectNulls dataKey="value" stroke="#000" strokeWidth={1} fill="url(#colorValue)" dot={{ fill: "white" }} />
                        <LabelList dataKey="value" position="top" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
TrackerGraph.propTypes = {
    graph: PropTypes.object
}
export default TrackerGraph
