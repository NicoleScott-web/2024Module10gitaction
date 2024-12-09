const express = require('express')
const app = express()
require('dotenv').config()
const port = 8080

app.get('/', (req, res) => {
  res.send(`Hello World! Is this working?${process.env.HOST_ENV} this is my secret value ${process.env.SECRET} `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.HOST_ENV}`)
})
// docker build -t nicolescott/mvc-structure .