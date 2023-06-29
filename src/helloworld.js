const express = require('express')
const app = express()
const port = 3000

app.get('/praneeth', (req, res) => {
  res.send('Hello Iam praneeth!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
