const jwt =require("jsonwebtoken")
require("dotenv").config()


function auth(req,res,next){
     const token=req.header('token')
     if(!token) return res.status(401).send("yeu cau xac thuc nguoi dung")
     try{
          const verifyed=jwt.verify(token,process.env.TOKEN)
          req._id=verifyed._id
          next()
     }catch(err){
          res.status(401).json({result:false,msg:"xac thuc khong thanh cong"})
     }
}

module.exports=auth