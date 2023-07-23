const express = require("express");
const authRouter = express.Router();
const jwtAuth = require("../middleware/jwtAuth.js");

const {
  signup,
  signin,
  getUser,
  logout,
  fogotPassword,
  resetPassword,
} = require("../controller/authController.js");

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.get("/user", jwtAuth, getUser);
authRouter.get("/logout", jwtAuth, logout);
authRouter.get("/fogotPassword", jwtAuth, fogotPassword);
authRouter.get("/resetPassword", jwtAuth, resetPassword);

module.exports = authRouter;
