const express = require('express')
const consign = require('consign')
const mongoose = require('mongoose')
require('./config/mongodb')
const app = express()
const port = 5000
app.mongoose = mongoose


consign()
    .then('./config/middlewares.js')
    .then('./api/controllers')
    .then('./config/routs.js')
    .into(app)



app.listen(port, () => {
  console.log(`Servidor online em: http://localhost:${port}`)
})