import express from 'express'
import sqlite3 from 'sqlite3'

const app = express()
const PORT = 4000

const db = new sqlite3.Database('./database/maindb.sqlite3',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE)

// Avoiding CORS problem
app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get('/', (_req, res) => {
  res.send(`This is back-end server running on port ${PORT}`)
})

app.get('/api/view', (req, res) => {
  const p = parseInt(String(req.query.page)) || 1
  const pp = parseInt(String(req.query.per_page)) || 5
  db.serialize(() => {
    let total = -1
    // statement 1
    db.get('SELECT COUNT(*) AS len FROM sale', (err, row) => {
      if (err) res.send(err)
      console.log(row)
      // ${total} must have been initilized before executing second statement.
      total = row.len
    })
    // statement 2
    db.all(`SELECT * FROM sale LIMIT ${pp} OFFSET ${(p - 1) * pp}`, (err, row) => {
      if (err) res.send(err)
      console.log(row)
      res.json({
        "page": p,
        "per_page": pp,
        "total": total,
        "total_pages": Math.ceil(total / pp),
        "data": row
      })
    })
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
