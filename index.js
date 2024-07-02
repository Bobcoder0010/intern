const express = require("express");
const { create } = require("./controller/create");
const app = express()
app.get('/',(req,res)=>{
    res.send("hellow world") 
})
app.use(express.json());


app.use("/",create)







app.listen(5000,()=>{
    console.log ("server start vayoo")
})