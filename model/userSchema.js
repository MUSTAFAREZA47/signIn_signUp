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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
    return next();
  }
});

userSchema.methods = {
  jwtToken() {
    return JWT.sign(
      {id: this_id, email: this.email},
      process.env.SECRET,
      {expireIn: "24h"}
    )
  }
}

getForgotPasswordToken(); {
  const forgotToke = crypto.randomBytes(20).toString("hex")
  this.forgotPasswordToken = crypto
      .createHash("sha256")
      .update(forgotToken)
      .digest('hex')
}

const userModel = mongoose.model("user", userSchema);

module.exports = userSchema;
