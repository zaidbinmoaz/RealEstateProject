const express=require("express")
const mongoDB = require("./config/db")
const app=express()
const env=require("dotenv").config()
const cors=require("cors")
const port=process.env.PORT || 6000
app.use(express.json())
app.use(cors())
app.use("/contrive", require("./routers/router"))

mongoDB()
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})