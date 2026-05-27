const User = require("../models/User");


// Get Profile
exports.getProfile = async (req, res) => {
  try {

    const user = await User.findById(
      req.user.id
    ).select("-password");

    res.json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


exports.getDashboard = async (req, res) => {
  try {

    const user = await User.findById(
      req.user.id
    );

    const dashboardData = {
      currentRating: user.rating,
      solvedProblems: user.solvedProblems,
      contests: user.contests,

      weeklyGrowth: "18%",

      recentActivity: [
        "Solved 5 problems today",
        "Participated in contest",
        "Reached new rating",
      ],
    };

    res.json({
      success: true,
      dashboardData,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


exports.getAnalytics = async (req, res) => {
  try {

    const analyticsData = {
      ratingGraph: [
        900,
        1000,
        1200,
        1300,
        1450,
      ],

      weeklyActivity: [
        5,
        3,
        6,
        7,
        4,
        8,
        5,
      ],

      topics: [
        {
          name: "Arrays",
          level: "Strong",
        },

        {
          name: "DP",
          level: "Weak",
        },

        {
          name: "Graphs",
          level: "Average",
        },
      ],
    };

    res.json({
      success: true,
      analyticsData,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


exports.getLeaderboard = async (req, res) => {
  try {

    const students = await User.find()
      .sort({ rating: -1 })
      .select("-password");

    res.json({
      success: true,
      students,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};