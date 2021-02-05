const jwt=require("jsonwebtoken")
const CreateUser=require("../models/User")
require("dotenv").config()
module.exports={
    post:function(req,res){
        const user=req.body
        if(!user.Username||!user.Password){
            return res.status(400).json({result:false,msg:"ban chua nhap ,moi nhao lai"})
        }
        new CreateUser({Username:user.Username,Password:user.Password}).save((err,result)=>{
            if(err){
                res.status(500).json({result:false,msg:"loi may chu chua luu dc"})
            }
            if(result){
                try{
                    jwt.sign({_id:result._id},process.env.TOKEN,{expiresIn:"1 day"},(err,token)=>{
                        if(err){
                            res.status(500).json({result:false,msg:"loi khoi tao token khong thanh cong"})
                        }
                        if(token){
                            res.status(200).json({result:true,msg:"khoi tao tk thanh cong",token})
                        }
                    })
                }catch(err){
                    res.status(500).json({result:false,msg:"khoi tao token khong thanh cong"})
                }
            }
        })
    }
}
