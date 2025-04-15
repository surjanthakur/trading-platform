const express = require("express")
const router = express.Router()


//login route
router.get("/login", (req, res) => {
    res.render("user/login")
})


//signup route
router.get("/signup", (req, res) => {
    res.render("user/signup")
})


module.exports = router;