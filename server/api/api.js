//-Initilizations
const call = require("../lib/functions")
const Post = require("../database/db")
//--NodeJS Init
const path = require('path')
const express = require('express')
const app = express();
//--Environment Variables Init
require('dotenv').config(); 
//--Database Init
const db = require('mongoose')

//--Variables Declaration
let port = 8080
let local_ip = "localhost"

//--API INIT

db
.connect(
    "mongodb+srv://mohamedhwtham5000_db_user:iJD7F7QO2CIQsveG@cluster0.olw39sm.mongodb.net/?appName=Cluster0"
)
.then(()=>{
    console.log('Database is Connected Successfully')
}).catch((error)=>{
    console.log('Database Rejected Connection Request OR An Error Has Been Occured ', error)
})

app.listen(port,local_ip,()=>{
    console.log(`Server is Running On URL :- http://${local_ip}:${port}`)
})

app.use(express.json())

//-The Main API

app.get('/',(req,res)=>{
    res.render('../page.ejs',{
        "name": "mohamed"
    })
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

//=======================DATABASE--ENDPOINTS=======================\\
app.post('/dbtest',(req,res)=>{
    const newPost = new Post()
    newPost.title = "My Parents Killed My Love"
    newPost.paragraph = "Since My Mom told My Dad About I am Sexing with my Love He Handled A Shotgun and Shoot Up His Head and Take Down of It and He Cut My Reproductive Organ to prevent Having A Baby From My Love"
    newPost.NoLikes = -34
    newPost.save()
    .then(()=>{
        console.log("The Document Uploaded To The Database Successfully")
    })
    .catch((error)=>{
        console.log("There Was an error",error)
    })
})