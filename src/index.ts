const express=require("express")
const http=require("http")
const bodyParser=require('body-parser')
const cookieParser=require("cookie-parser")
const cors=require("cors")
const compression=require("compression")
const app=express()
app.use(cors(
    {
        Credential:true
    }
))
app.use(cookieParser())
app.use(bodyParser().json())
app.use(compression())