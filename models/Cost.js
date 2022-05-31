const mongoose = require("mongoose");

const CostSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    sum: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cost", CostSchema);