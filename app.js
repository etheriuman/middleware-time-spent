// app.js
const express = require('express')
const app = express()
const port = 3000



// middleware
app.use( function (req, res, next) {
  // 請求的url
  const url = req.originalUrl
  // 請求的方法
  const method = req.method

  // 請求的時間
  const time =  new Date(Date.now())

  const YYYY = time.getFullYear()
  const MM = time.getMonth()
  const DD = time.getDate()
  const hr = time.getHours()
  const min = time.getMinutes()
  const sec = time.getSeconds()

  // 輸出字串
  const timeOutPrint = `${YYYY}-${MM}-${DD} ${hr}:${min}:${sec}`

  // log
  console.log(`${timeOutPrint} | ${method} from '${url}'`)
  next()
})



// 路由設定

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})