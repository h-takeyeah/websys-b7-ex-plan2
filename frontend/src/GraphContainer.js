import React from 'react'
import { MyBarChart, MyLineChart } from './Graph'

const GraphContainer = () => {
  const a = [
    { date: '2020-12-14', proceeds: '33860' },
    { date: '2020-12-15', proceeds: '27540' },
    { date: '2020-12-16', proceeds: '72660' },
    { date: '2020-12-17', proceeds: '150000' },
    { date: '2020-12-18', proceeds: '46600' },
    { date: '2020-12-19', proceeds: '24300' },
    { date: '2020-12-20', proceeds: '27700' },
    { date: '2020-12-21', proceeds: '56100' },
    { date: '2020-12-22', proceeds: '6000' }
  ]
  const all = [
    {name:'C',proceeds: 154800},
    {name:'B',proceeds:88000},
    {name:'E',proceeds:85500},
    {name:'D',proceeds:67200},
    {name:'A',proceeds:43500},
    {name:'F',proceeds:5760}
  ]
  return (
    <div>
      <div>
        <h5>全ての商品</h5>
        <MyBarChart data={all} />
      </div>
      <div>
        <h5>A</h5>
        <MyLineChart data={a} />
      </div>
      {/* <div>
        <h5>B</h5>
        <MyLineChart main='b' />
      </div>
      <div>
        <h5>C</h5>
        <MyLineChart main='c' />
      </div>
      <div>
        <h5>D</h5>
        <MyLineChart main='d' />
      </div>
      <div>
        <h5>E</h5>
        <MyLineChart main='e' />
      </div>
      <div>
        <h5>F</h5>
        <MyLineChart main='f' />
      </div>
      <div>
        <h5>G</h5>
        <MyLineChart main='g' />
      </div> */}
    </div>
  )
}

// function getAll() {
//   let url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
//   url += '/sale?type=inventory'
//   fetch(url)
//     .then(responce => responce.json())
//     .then(result => {
//       return result
//     })
// }

// function getDate(i) {
//   let ans = null
//   let url = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
//   url += `/sale?inventory=${i}`
//   fetch(url)
//     .then(responce => responce.json())
//     .then(result => {
//       return result
//     })
// }

export default GraphContainer
