import React from 'react'
import { MyBarChart, MyLineChart } from './Graph'

const GraphContainer = () => {
  const a = [
    { date: '2020-12-15', amount: 1 },
    { date: '2020-12-16', amount: 2 },
    { date: '2020-12-17', amount: 8 },
    { date: '2020-12-18', amount: 5 },
    { date: '2020-12-19', amount: 2 },
    { date: '2020-12-20', amount: 5 },
    { date: '2020-12-21', amount: 3 },
    { date: '2020-12-22', amount: 3 }
  ]
  const b = [
    { date: '2020-12-15', amount: 2 },
    { date: '2020-12-16', amount: 1 },
    { date: '2020-12-17', amount: 10 },
    { date: '2020-12-18', amount: 9 },
    { date: '2020-12-19', amount: 5 },
    { date: '2020-12-20', amount: 3 },
    { date: '2020-12-21', amount: 5 },
    { date: '2020-12-22', amount: 9 }
  ]
  const c = [
    { date: '2020-12-15', amount: 4 },
    { date: '2020-12-16', amount: 2 },
    { date: '2020-12-17', amount: 5 },
    { date: '2020-12-18', amount: 11 },
    { date: '2020-12-19', amount: 7 },
    { date: '2020-12-20', amount: 2 },
    { date: '2020-12-21', amount: 2 },
    { date: '2020-12-22', amount: 9 },
    { date: '2020-12-23', amount: 1 }
  ]
  const d = [
    { date: '2020-12-15', amount: 2 },
    { date: '2020-12-16', amount: 1 },
    { date: '2020-12-17', amount: 13 },
    { date: '2020-12-18', amount: 22 },
    { date: '2020-12-19', amount: 7 },
    { date: '2020-12-20', amount: 3 },
    { date: '2020-12-21', amount: 5 },
    { date: '2020-12-22', amount: 1 },
    { date: '2020-12-23', amount: 2 }
  ]
  const e = [
    { date: '2020-12-15', amount: 2 },
    { date: '2020-12-16', amount: 3 },
    { date: '2020-12-17', amount: 1 },
    { date: '2020-12-18', amount: 13 }
  ]
  const f = [
    { date: '2020-12-15', amount: 4 },
    { date: '2020-12-16', amount: 1 },
    { date: '2020-12-17', amount: 4 }
  ]
  const all = [
    {name: 'C', proceeds: 154800},
    {name: 'B', proceeds: 88000},
    {name: 'E', proceeds: 85500},
    {name: 'D', proceeds: 67200},
    {name: 'A', proceeds: 43500},
    {name: 'F', proceeds: 5760}
  ]
  return (
    <div>
      <div>
        <h3>これまでの売り上げ額</h3>
        <MyBarChart data={all} />
      </div>
      <div>
        <h3>本Aの売れ行き</h3>
        <MyLineChart data={a} />
      </div>
      <div>
        <h3>本Bの売れ行き</h3>
        <MyLineChart data={a} />
      </div>
      <div>
        <h3>本Bの売れ行き</h3>
        <MyLineChart data={b} />
      </div>
      <div>
        <h3>本Cの売れ行き</h3>
        <MyLineChart data={c} />
      </div>
      <div>
        <h3>本Dの売れ行き</h3>
        <MyLineChart data={d} />
      </div>
      <div>
        <h3>本Eの売れ行き</h3>
        <MyLineChart data={e} />
      </div>
      <div>
        <h3>本Fの売れ行き</h3>
        <MyLineChart data={f} />
      </div>
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
