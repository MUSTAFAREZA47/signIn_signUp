const express = require("express");
const app = express();

const authRouter = require("./router/authRouter.js");
const databaseconnect = require("./config/databaseConfig.js");
const cookieParser = require("cookie-parser");
const cors = require('cors')

databaseconnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: [process.env.CLIENT_URL], credentials: true}))

app.use("/api/auth/", authRouter);

app.use("/", (req, res) => {
  res.status(200).json({ data: "JWTauth server --update" });
});

// app.use('/signup', (req, res) => {
//     res.status(200).json({data: "You are on signUp page"})
// })

module.exports = app;
