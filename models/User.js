const mongoose=require("mongoose")

const User=new mongoose.Schema({
    Username:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})



const UserData=mongoose.model('UserData',User)
module.exports=UserData