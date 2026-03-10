const express = require('express')

const app = express()

port = 5002


app.use(express.json())
app.use(express.static('public'))


app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})