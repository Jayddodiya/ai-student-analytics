const User = require("../models/User");

exports.getStudents = async (req, res) => {
  try {
    const students = await User.find();

    res.json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};