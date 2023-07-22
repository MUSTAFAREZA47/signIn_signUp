const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "user name is Required"],
      minLenght: [5, "Name must be atleast than 5 char"],
      maxLength: [50, "Name must be less than 50 char"],
    },
    email: {
      type: String,
      required: [true, "user email is required"],
      unique: [true, "already acquired"],
      lowercase: true,
    },
    forgotPasswordToken: {
      type: String,
      select: false,
    },
    forgotPasswordExpiryDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userSchema;
