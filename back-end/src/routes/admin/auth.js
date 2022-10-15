const { application } = require("express");
const express = require("express");
const { signup,signIn } = require("../../controller/admin/auth");
const router = express.Router();
application.use(express.json())

router.post("admin/signup", signup);

router.post("admin/signin",signin)



module.exports = router;
