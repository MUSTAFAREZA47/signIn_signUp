const emailValidator = require("email-validator");

const signup = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  console.log(name, email, password, confirmPassword);

  //   Every field is required
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Every feild is required",
    });
  }

  //   validating email using npm package "email-validator"
  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address",
    });
  }

  //   when password is not matching with confirmPassword
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "password and confirm password should be same",
    });
  }

  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    if (e.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account already exist with provided email id",
      });
    }
  }
};

const signin = async (req, res) => {
  const { email, password } = res.body;

  // if email and password is missing
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Eamil and Password are required",
    });
  }

  try {
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");

    if (!user || password !== user.password) {
      return res.status(400).json({
        success: false,
        message: "invalid credentials",
      });
    }

    const token = user.jwtToken();
    user.password = undefined;
    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };

    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {
    return res.status(400).json({
        success: false,
        message: error.message
      });
  }
};

const getUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  signup,
  signin,
  getUser,
};
