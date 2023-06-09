import React from 'react'
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, LabelList, Tooltip, Area, AreaChart } from 'recharts'
import '../../../styles/trackers.css'
import Heads from '../../../cards/Heads';
import { Link } from 'react-router-dom';
const TrackerGraph = ({ graph }) => {

    graph.data.sort((a, b) => a.week - b.week)
    const maxWeek=graph.data[graph.data.length-1].week
    for(var i=1;i<=maxWeek;i++){
        if(!graph.data.find(item=>item.week===i)){
            graph.data.push({week:i,value:graph.data[i].value});
        }
    
    }
    const unit = "Kg"
    const min = 90
    const max = 350
    return (
        <>
            <div className="tracker">
                <div className="chartAction dark-text">
                    <div className="chartType">{graph.chartType}</div>
                    <div className="buttons">
                        <button className='add-data '><Link>Add Data</Link></button>
                        <button className='delete-graph '><Link>Delete</Link></button>

                    </div>
                </div>
                <ResponsiveContainer width="100%" height="100%"   >
                    <AreaChart
                        height={400}
                        width={700}
                        data={graph.data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 20,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={`${100 - min * 100 / max}%`} stopColor="#14e33efc" stopOpacity={1} />
                                <stop offset={`${min * 100 / max}%`} stopColor="#ff1111fc" stopOpacity={1} />
                            </linearGradient>

                        </defs>
                        <CartesianGrid strokeDasharray="4 4" />
                        <XAxis dataKey="week" label={{ value: 'week', position: 'bottom' }} />

                        <YAxis label={{ value: unit, angle: -90, position: 'left' }} />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#000" strokeWidth={1} fill="url(#colorValue)" dot={{ fill: "white" }} />
                        <LabelList dataKey="value" position="top" />

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default TrackerGraph