const { application } = require("express");
const express = require("express");
const { signup,signIn, requireSignIN } = require("../controller/auth");
const router = express.Router();
application.use(express.json())

router.post("/signup", signup);

router.post("/signin",signIn)

router.post("/profile",requireSignIN,(req,res) => {
    res.status(200).json({user : 'profile  '})
})

module.exports = router;
