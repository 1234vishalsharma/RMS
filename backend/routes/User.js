const express =  require("express");
const router =  express.Router();



const {signup, sendotp} = require("../controller/Auth");

router.post("/signUp",signup);
router.post("/sendotp",sendotp);

module.exports = router;