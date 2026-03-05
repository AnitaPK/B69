const http = require('http')
const path = require('path')
const colors = require('colors')
require('dotenv').config()


const port = process.env.PORT || 5005
const app = http.createServer((req,res)=>{
    res.end("HELLO")
})

console.log(__dirname)
path.join(__dirname,'/upload')

app.listen(port, ()=>{
    console.log(`Hamara server start hua hai http://localhost:${port}`.rainbow)
})