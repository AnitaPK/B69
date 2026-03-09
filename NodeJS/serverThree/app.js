// const http = require('http')

// const port = 5000
// const app = http.createServer((req,res)=>{
//     res.end('hello from server')
// })
// app.listen(port, ()=>{
//     console.log('server running')
// })

const fs = require('fs')

fs.writeFileSync('fileOne.txt', 'This is first line ...')

// fs.unlinkSync('fileOne.txt')

const data = fs.readFileSync('fileOne.txt', 'utf-8')

console.log(data)

fs.appendFileSync('fileOne.txt', '\n This is second line ...')

content = '\n df dfgh 45thj '
fs.appendFileSync('fileOne.txt', content)


const data1 = fs.readFileSync('fileOne.txt', 'utf-8')

console.log(data1)