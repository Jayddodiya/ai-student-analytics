const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {

    // Get token
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Store user data
    req.user = decoded;

    next();

  } catch (error) {

    res.status(401).json({
      success: false,
      message: "Unauthorized",
    });

  }
};