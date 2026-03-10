const express = require('express')
require('dotenv').config()

const port = process.env.PORT || 5001
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('hello from my server')
})

const students = []

app.post('/createStudent',(req,res)=>{
    console.log(req.body,"req.body")

    const newStudent = {
        name:req.body.name,
        class:req.body.class,
        id:Date.now()
    }
    console.log(newStudent,"newStudent")
    students.push(newStudent)
    console.log(students)
    res.status(200).send({msg:"Student created successfully", success:true})
})

app.get('/getAllStudents',(req,res)=>{
    res.status(200).send({studentsList:students})
})

app.delete('/deleteStudent/:ID',(req,res)=>{
    const id = req.params.ID
    console.log(id)

    const index = students.findIndex((s,i)=> s.id == id)
    students.splice(index,1)

    res.status(200).send({msg:"student deleted", succes:true})
})

app.put('/updateStudent/:ID',(req,res)=>{
    console.log(req.params,'req.params')
    console.log(req.body,"req.body")

    const index = students.findIndex((s,i)=> s.id == req.params.ID)
    students[index].class = req.body.class

    res.status(200).send({msg:"Student updated",success:true})
})

app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})


// {"name":"Kiran", "class":"Nursary"}

// http://localhost:5002 
// http://localhost:5002/createStudent 