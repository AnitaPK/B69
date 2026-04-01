const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbconn = require('./config/db')
const worldRouter = require('./routes/worldRoute')

const app = express()
const port = process.env.PORT || 7000

app.use(express.json())
app.use(cors())

app.use('/', worldRouter)

app.listen(port , ()=>{
    console.log(`server started on http://localhost:${port}`)
})