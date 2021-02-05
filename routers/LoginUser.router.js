const router=require("express").Router()
const LoginController=require("../controllers/LoginUser.controller")

router.route("/")
    .post(LoginController.post)

module.exports=router