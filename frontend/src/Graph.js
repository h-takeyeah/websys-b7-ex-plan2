import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, LineChart
} from 'recharts'

const MyBarChart = (props) => {
  return (
    <BarChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis unit='¥' />
      <Tooltip />
      <Legend />
      <Bar dataKey='proceeds' fill='#8884d8'/>
    </BarChart>
  )
}

const MyLineChart = (props) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='date' />
      <YAxis unit='冊' />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='amount' stroke='#8884d8' activeDot={{ r: 8 }} />
    </LineChart>
  )
}

export { MyBarChart, MyLineChart }