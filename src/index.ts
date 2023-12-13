const express=require("express")
const dotenv=require("dotenv")
const bodyParser=require('body-parser')
const cookieParser=require("cookie-parser")
const cors=require("cors")
const compression=require("compression")
dotenv.config()
const app=express()
app.use(cors(
    {
        Credential:true
    }
))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(compression())
app.listen(process.env.port,()=>{
    console.log(`server running on port ${process.env.port}`)
})