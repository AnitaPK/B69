// console.log("Hello world")

const http = require('http')

// import http from 'http'

const server = http.createServer((req,res)=>{
    res.end('Hello world from server of b69....')
})

// emitter->http lister->createServer handler->callback 
// 0-35535. = 35536. 5000 7000 8000

server.listen('5001', ()=>{
    console.log('server running on http://localhost:5001')
})