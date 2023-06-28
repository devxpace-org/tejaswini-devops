const express = require('express')
const app = express()
const port = 5000

app.get('/nicejob*', (req, res) => {
  res.send('Nice job!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
