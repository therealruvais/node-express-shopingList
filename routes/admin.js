const express = require("express");
const path = require("path");
const router = express.Router();

const products = [];

router.get("/", (req, res, next) => {
  res.render('addproduct', {
    docTitle: "Add Product",
    path:"/"
  });
});

router.post("/product", (req, res) => {
  products.push({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  res.redirect("/shop");
});

exports.routes = router;
exports.products = products;
