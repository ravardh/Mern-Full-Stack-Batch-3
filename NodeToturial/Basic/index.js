import express from 'express';

const app = express();

app.get("/",(request,response)=>{
    response.json({message:"Mai server hoon"})
})

app.post("/register",(request,response)=>{
    response.json({message:"User Register Ho gya"})
})

app.listen(5000,()=>{
    console.log("Server Start ho gya 5000 port pe")
})