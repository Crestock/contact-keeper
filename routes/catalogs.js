const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Catalog = require("../models/Catalog");

// @route     GET api/catalogs
// @desc      Get all users catalogs
// @access    Private
router.get("/", auth, async (req, res) => {
  try {
    const catalogs = await Catalog.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(catalogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/catalogs
// @desc      Add new catalog
// @access    Private
router.post(
  "/",
  [
    auth,
    [
      check("test", "test is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { test, quantity, length, width, thickness, units } = req.body;

    try {
      const newCatalog = new Catalog({
        test,
        quantity,
        length,
        width,
        thickness,
        units,
        user: req.user.id
      });

      const catalog = await newCatalog.save();

      res.json(catalog);
    } catch (err) {
      console.error(er.message);
      res.status(500).send("Server Error");
    }
  }
);
/*
// @route     PUT api/catalogs/:id
// @desc      Update catalog
// @access    Private
router.put("/:id", auth, async (req, res) => {
  const { test } = req.body;

  // Build catalog object
  const catalogFields = {};
  if (test) catalogFields.test = test;

  try {
    let catalog = await Catalog.findById(req.params.id);

    if (!catalog) return res.status(404).json({ msg: "Catalog not found" });

    // Make sure user owns catalog
    if (catalog.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    catalog = await Catalog.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(catalog);
  } catch (err) {
    console.error(er.message);
    res.status(500).send("Server Error");
  }
});

// @route     DELETE api/catalogs/:id
// @desc      Delete catalog
// @access    Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let catalog = await Catalog.findById(req.params.id);

    if (!catalog) return res.status(404).json({ msg: "Catalog not found" });

    // Make sure user owns catalog
    if (catalog.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Catalog.findByIdAndRemove(req.params.id);

    res.json({ msg: "Catalog removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

*/
module.exports = router;
