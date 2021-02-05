const router=require("express").Router()
const createrUserController=require("../controllers/CreateUser.controller")


router.route("/")
    .post(createrUserController.post)



module.exports=router