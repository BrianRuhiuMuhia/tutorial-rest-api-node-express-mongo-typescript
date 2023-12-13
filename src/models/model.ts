import mongoose from "mongoose"

const {Schema}=require("../db/db.ts")
const userSchema=new Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  }
})
const UserModel=mongoose.model("User",userSchema)
export default UserModel