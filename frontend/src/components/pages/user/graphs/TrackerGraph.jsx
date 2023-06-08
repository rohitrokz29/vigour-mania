import React from 'react'
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart } from 'recharts'

const TrackerGraph = ({ graph }) => {

    return (
        <>
            <h2>{graph.chartType}</h2>
            <AreaChart width={730} height={250} data={graph.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                {/* <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs> */}
                <XAxis dataKey="week" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="#ddd"  activeDot={{ r: 5 }} strokeWidth={2} />
                {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
            </AreaChart>
        </>
    )
}

export default TrackerGraph