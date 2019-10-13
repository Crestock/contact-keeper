const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Contact = require("../models/Contact");
const Product = require("../models/Product");

// @route     GET api/products
// @desc      Get all users products
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/products
// @desc      Add new contact
// @access    Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newProduct = new Product({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const product = await newProduct.save();

      res.json(product);
    } catch (err) {
      console.error(er.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
