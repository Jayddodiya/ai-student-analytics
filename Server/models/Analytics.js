const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    weeklyActivity: [Number],

    ratings: [Number],

    topics: [
      {
        name: String,
        level: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Analytics",
  analyticsSchema
);