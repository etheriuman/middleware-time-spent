// app.js
const express = require('express')
const app = express()
const port = 3000


// 用 startTimestamp變數來儲存 request 的 timestamp
let startTimestamp

// request function middleware
app.use( function (req, res, next) {

  // 請求的url
  const currentRouter = req.originalUrl

  // 請求的方法
  const method = req.method

  // 請求的時間
  const requestTimestamp =  new Date(Date.now())
  // 把 timestamp 傳給全域變數 startTimestamp
  startTomestamp = requestTimestamp


  // 將 request timestamp 儲存到 start time stamp
  startTimestamp = requestTimestamp

  const YYYY = requestTimestamp.getFullYear()
  const MM = requestTimestamp.getMonth() + 1 // month index starts at 0
  const DD = requestTimestamp.getDate()
  const hr = requestTimestamp.getHours()
  const min = requestTimestamp.getMinutes()
  const sec = requestTimestamp.getSeconds()

  // 輸出字串
  const startTimeOutPrint = `${YYYY}-${MM}-${DD} ${hr}:${min}:${sec}`

  // log start time
  console.log(`${startTimeOutPrint} | ${method} from '${currentRouter}'`)

  // 在 response finished 時觸發 responseTime()
  res.on('finish', () => {
    responseTime()
  }) 

  // 結束 middleware 
  next()

})


// 設定從 middleware 接收到請求到 router 回應的時間計算函式
const responseTime = function () {

  // 抓取 response 的 timestamp
  const responseTimestamp = new Date(Date.now())
  
  // 計算 startTimestamp 到 responseTimestamp 的時間差
  const timeSpent = responseTimestamp - startTimestamp

  // log 出消耗時間
  console.log(`time spent: ${timeSpent} millisecond!`)

}



// 路由設定

// 這邊因為沒response一個完整的html結構，瀏覽器會預設自己去找 /favicon.ico檔案，以至於 double request
// --> 所以給 browser 一個 site icon data 防止瀏覽器重複送出請求
const iconData = '<link rel="icon" href="data:,">'

app.get('/', (req, res) => {
  // 設定一個 5566ms 的延遲驗證 log 的時間是否正確
  setTimeout(() => {
    res.send(iconData + '列出全部 Todo')
  }, 5566)
})

app.get('/new', (req, res) => {
  
  res.send(iconData + '新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  
  res.send(iconData + '顯示一筆 Todo')
})

app.post('/', (req, res) => {
  
  res.send(iconData + '新增一筆  Todo')
})



// 啟動伺服器，伺服器等待中...
app.listen(port, () => {
  console.log(`App running on http://localhost${port}`)
})