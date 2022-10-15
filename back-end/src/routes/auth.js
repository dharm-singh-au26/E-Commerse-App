const { application } = require("express");
const express = require("express");
const { signup,signIn } = require("../controller/auth");
const router = express.Router();
application.use(express.json())

router.post("/signup", signup);

router.post("/signin",signIn)

module.exports = router;
