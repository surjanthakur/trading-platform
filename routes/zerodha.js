
const express = require("express")
const router = express.Router()

// home
router.get("/home", (req, res) => {
    res.render("zerodha/home");
});

//about
router.get("/about", (req, res) => {
    res.render("zerodha/about");
});

//products
router.get("/products", (req, res) => {
    res.render("zerodha/product");
});

//pricing
router.get("/pricing", (req, res) => {
    res.render("zerodha/pricing");
});


module.exports = router;