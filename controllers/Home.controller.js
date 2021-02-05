
const User=require("../models/User")

module.exports={
    get:async function(req,res){
        await User.findById({_id:req._id})
        .exec((err,result)=>{
            if(err){
                res.status(500).json({result:false,msg:"loi may chu "})
            }
            if(result){
                res.json({result:true,msg:"thanh cong",username:result.Username})
            }
        })
    }
}

