const jwt=require("jsonwebtoken")
const User=require("../models/User")
require("dotenv").config()
module.exports={
    post:async function(req,res){
        await User.findOne({Username:req.body.Username,Password:req.body.Password})
        .exec((err,result)=>{
            if(err){
                res.status(500).json({result:false,msg:"chua the lay data"})
            }
            if(!result){
                res.status(400).json({result:false,msg:"yeu cau dang nhap lai"})
            }
            if(result){
                try{
                    jwt.sign({_id:result._id},process.env.TOKEN,{expiresIn:"1 day"},(err,token)=>{
                        if(err){
                            res.status(500).json({result:false,msg:"loi khoi tao token khong thanh cong"})
                        }
                        if(token){
                            res.status(200).json({result:true,msg:"dang nhap thanh cong",token})
                        }
                    })
                }catch(err){
                    res.status(500).json({result:false,msg:"khoi tao token khong thanh cong"})
                }
            }
        })
    }
}