const express = require("express");
const router = express.Router();
const {
  submitInquiry,
  getInquiries,
} = require("../controllers/inquiryController");

const protect = require("../middleware/authMiddleware");

// Public
router.post("/", submitInquiry);

// Admin
router.get("/", protect, getInquiries);

module.exports = router;
