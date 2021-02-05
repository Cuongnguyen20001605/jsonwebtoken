const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())

require("dotenv").config()

//setup mongoose
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
     if(err){
          console.log(err)
     }else{
          console.log("connect mongoDB...")
     }
})
const verify=require("./middlewares/verifyToken")



//call router
const CreateUserRouter=require("./routers/CreateUser.router")
const LoginRouter=require("./routers/LoginUser.router")
const HomeRouter=require("./routers/Home.router")

//use  router
app.use("/login/createuser",CreateUserRouter)
app.use("/login",verify,LoginRouter)
app.use('/home',verify,HomeRouter)
app.listen(3000,()=>console.log("start server"))
