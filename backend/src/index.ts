import express, { Response } from 'express'
import { Client } from 'pg'

const app = express()
const PORT = 4000

const client = new Client({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/sales',
  ssl: {
    rejectUnauthorized: false
  }
})

client.connect(e => {
  if (e) console.error(e)
})

// Avoiding CORS problem
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.get('/', (_req, res) => {
  res.send(`This is back-end server running on port ${PORT}`)
})

app.get('/sale', (req, res) => {
  const p = parseInt(String(req.query.page)) || 1
  const pp = parseInt(String(req.query.per_page)) || 5
  if (req.query.type === 'inventory') {
    getData(res, MyQuery.inventory)
  } else if (req.query.type === 'dialy') {
    getData(res, MyQuery.daily)
  } else {
    let total = -1
    // statement 1
    client.query('SELECT COUNT(*) AS len FROM sale')
    .then(result => {
      // ${total} have to be initilized before executing second statement.
      total = result.rows[0].len
      // statement 2
      client.query(
        'SELECT date,name,price AS proceeds '
        + 'FROM sale NATURAL INNER JOIN inventory '
        + `LIMIT ${pp} OFFSET ${(p - 1) * pp}`)
      .then(result => {
        console.log(result.rows)
        result.rows.forEach(row => row.date = fmt(row.date))
        res.json({
          'page': p,
          'per_page': pp,
          'total': total,
          'total_pages': Math.ceil(total / pp),
          'data': result.rows
        })
      })
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

function fmt(date: any) {
  const d = new Date(date)
  const padding = (v: number) => { // 0で埋めて表示する関数を定義 --- (※2)
    const s = '00' + v
    return s.substr(s.length - 2, 2)
  }
  return d.getFullYear() + '/' + padding(d.getMonth() + 1) + '/' + padding(d.getDate())
}

function getData(res: Response, q: MyQuery) {
  client.query(q)
  .then(result => {
    console.log(result.rows)
    result.rows.forEach(row => {
      if (row.data !== undefined) row.date = fmt(row.date)
    })
    res.json({
      'data': result.rows
    })
  })
}

enum MyQuery {
  daily = 'SELECT date,sum(price) AS proceeds '
          + 'FROM sale NATURAL INNER JOIN inventory '
          + 'GROUP BY date ORDER BY date',
  inventory = 'SELECT name,sum(price) AS proceeds '
              + 'FROM sale NATURAL INNER JOIN inventory '
              + 'GROUP BY inventory.name ORDER BY proceeds DESC'
}