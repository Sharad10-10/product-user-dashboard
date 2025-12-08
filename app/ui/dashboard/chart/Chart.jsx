"use client"
import React from 'react'
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {

  const data = [
    {
      name: "Sun",
      visit: 4000,
      click: 2400,
    },
    {
      name: "Mon",
      visit: 3000,
      click: 1398,
    },
    {
      name: "Tue",
      visit: 2000,
      click: 3800,
    },
    {
      name: "Wed",
      visit: 2780,
      click: 3908,
    },
    {
      name: "Thu",
      visit: 1890,
      click: 4800,
    },
    {
      name: "Fri",
      visit: 2390,
      click: 3800,
    },
    {
      name: "Sat",
      visit: 3490,
      click: 4300,
    },
  ];


  return (
    <div className='bg-[#182237] mt-2 rounded-lg'>
      <div className='mt-4 px-4'>
        <h1 className='font-semibold text-[#b7bac1]'>Weekly Recap</h1>
      </div>

      <div className='ml-4 mt-4'> 
        <LineChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip contentStyle={{backgroundColor: "white",  border: "none", outline: "none"}}/>
        <Legend />
        <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
      </LineChart>
      </div>

    </div>
  )
}

export default Chart