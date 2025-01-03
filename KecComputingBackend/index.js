var express=require('express')
var app=express()
const PORT=3001
app.get('/',(req,res)=>{
    res.send("Welcome to Backend server")
})
app.get('/json',(req,res)=>{
    res.json({server:"Welcome to Backend"})
})
app.get('/static',(req,res)=>{
    res.sendFile('D:/full stack/kecComputingBackend/index.html')
})
app.listen(PORT,()=>{
    console.log('Backend server started\nURL: http://localhost:${PORT}')
})