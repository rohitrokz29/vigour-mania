import React, { useRef, useState } from 'react'
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, LabelList, Tooltip, Area, AreaChart, Legend } from 'recharts'
import '../../../styles/trackers.css'
import Heads from '../../../cards/Heads';
import { Link } from 'react-router-dom';
import { useCharts } from '../../../hooks/useCharts';
const TrackerGraph = ({ graph }) => {

    const { addChartData, error, isLoading, deleteChart } = useCharts();
    const { chartType, createdAt, minValue, maxValue, unit } = graph;
    const [data, setData] = useState(graph.data)
    const [isDataOpen, setIsDataOpen] = useState(false)
    const [value, setValue] = useState("");
    const [placeholder, setPlaceholder] = useState("Enter Data")

    data.sort((a, b) => a.week - b.week)
    const maxWeek = data[data.length - 1].week

    for (var i = 1; i <= maxWeek; i++) {
        if (!data.find(item => item.week === i)) {
            data.push({ week: i, value: data[i].value });
        }

    }

    const sendReq = async () => {
        let res = await addChartData(graph._id, createdAt, +value, maxWeek);
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
        setPlaceholder(placeholder=>"Enter Data")
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
                    <div className="chartType">{chartType}</div>
                    <div className="buttons">
                        <button className='add-data ' onClick={addData}><Link>{isLoading ? "Adding" : "Add Data"}</Link></button>
                        {
                            isDataOpen ?
                                <input type="number" name="data" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className='data-input' />
                                : <button className='delete-graph ' onClick={deleteTrack}><Link>Delete</Link></button>


                        }
                    </div>
                </div>
                <ResponsiveContainer width="100%" height="90%" key={`${data.length}`}  >
                    <AreaChart
                        height={400}
                        width={700}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
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
                        <XAxis dataKey="week" label={{ value: 'week', position: 'bottom' }} />

                        <YAxis label={{ value: unit, angle: -90, position: 'left' }} />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Area type="monotone" dataKey="value" stroke="#000" strokeWidth={1} fill="url(#colorValue)" dot={{ fill: "white" }} />
                        <LabelList dataKey="value" position="top" />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default TrackerGraph
