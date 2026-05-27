const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    type: String,

    status: {
      type: String,
      default: "Generated",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Report",
  reportSchema
);