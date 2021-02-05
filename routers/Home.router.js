const router=require("express").Router()
const HomeController=require("../controllers/Home.controller")

router.route("/")
    .get(HomeController.get)

module.exports=router