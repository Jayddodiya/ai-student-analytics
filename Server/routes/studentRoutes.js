const express = require("express");

const router = express.Router();

const auth = require(
  "../middleware/authMiddleware"
);

const {
  getProfile,
    getDashboard,
  getAnalytics,
  getLeaderboard,
} = require(
  "../controllers/studentController"
);


// Protected Route
router.get(
  "/profile",
  auth,
  getProfile
);


router.get(
  "/dashboard",
  auth,
  getDashboard
);

router.get(
  "/analytics",
  auth,
  getAnalytics
);

router.get(
  "/leaderboard",
  auth,
  getLeaderboard
);

module.exports = router;