const app = require('express')();
const mongo = require('mongoose')
const path = require('path');
let PORT = 8080; 
let local_ip = '127.0.0.1'

app.get('/req',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/pages/req.html'))
})

app.post('/res',(req,res)=>{
    res.sendFile(path.join(__dirname,'../client/pages/res.html'))
})

app.listen(PORT, local_ip,()=>{
    console.log(`Server is running on http://${local_ip}:${PORT}`);
})