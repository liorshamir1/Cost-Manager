const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    marital_status: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);