const express = require('express')
const app = express()
const port = 3000

app.get('/harshitha', (req, res) => {
  res.send('Hello Iam harshitha!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
