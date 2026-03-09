// const http = require('http')
const express = require('express')
const path = require('path')
const colors = require('colors')
require('dotenv').config()


const port = process.env.PORT || 5005

// const app = http.createServer((req,res)=>{
//     res.end("HELLO")
// })


console.log(__dirname)
path.join(__dirname,'/upload')


const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello from b69 server')
})


app.get('/aboutus',(req,res)=>{
    res.status(200).send('This is about us page')
})

app.post('/contactus',(req,res)=>{
    console.log(req.body)
    res.send('This is conatct us')
})


app.listen(port, ()=>{
    console.log(`Hamara server start hua hai http://localhost:${port}`.rainbow)
})