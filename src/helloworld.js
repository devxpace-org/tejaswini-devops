const express = require('express')
const app = express()
const port = 3000

app.get('/chetana', (req, res) => {
  res.send('Hello Iam chetana!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
