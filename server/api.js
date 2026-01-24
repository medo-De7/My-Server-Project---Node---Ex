//Modules Initilization
const call = require("./functions")
// NodeJS Initialization
const express = require('express')
const app = express();
const db = require('mongoose')
const path = require('path')
//--------------------------------------------
//Variables Declaration
let port = 8080
let local_ip = "localhost"

app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../app/page.tsx'))
})

app.listen(port,local_ip,()=>{
    console.log(`Server is Running On URL :- http://${local_ip}:${port}`)
})

app.get('/:num1/:num2',(req,res)=>{
    const first = Number(req.params.num1)
    const second = Number(req.params.num2)
    const sum = first + second
    res.send(`${sum}`)
})
app.post('/body',(req,res)=>{
    res.send(`Hello ${req.body.name}"<br>" Your Age is ${req.body.age} "<br>" Your Hobbies are ${req.body.hobbies[0]} "<br>" Your Education is at ${JSON.stringify(req.body.education)} `)
})