const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

// Bring in use model
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    Get all of the user's contacts
// @access   private
router.get("/", auth, async (req, res) => {
  try {
    // sort date -1 means the most recent first
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      let contacts = await newContact.save();
      res.json(contacts);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   PUT api/contacts/:id
// @desc    Add new contact
// @access  private
router.put("/:id", (req, res) => {
  res.send("Update a contact");
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  private
router.delete("/:id", (req, res) => {
  res.send("Delete a contact");
});

module.exports = router;
