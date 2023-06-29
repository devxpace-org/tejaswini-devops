const express = require('express')
const app = express()
const port = 3000

app.get('/kartik', (req, res) => {
  res.send('Hello Iam kartik!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
