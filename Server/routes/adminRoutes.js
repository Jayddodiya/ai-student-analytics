const express = require("express");

const {
  getStudents,
} = require("../controllers/adminController");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get(
  "/students",
  auth,
  getStudents
);

module.exports = router;
