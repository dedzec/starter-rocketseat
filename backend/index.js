const port = process.env.PORT || 4000;

// Framework Express
const express = require('express')
const app = express()
app.use(express.json())
// Cors
const cors = require('cors')
app.use(cors())
// Consign
const consign = require('consign')
// knex
const db = require('./src/config/db')
app.db = db

consign()
    .then('./src/models')
    .then('./api')
    .then('./src/config/routes.js')
    .into(app)

app.listen(port, () => {
    console.log('Backend executando...')
})