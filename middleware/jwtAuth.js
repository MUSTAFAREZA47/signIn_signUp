const { JsonWebTokenError } = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
    const token = (res.cookies && req.cookies.token) || null;

    if (!token) {
        return res.status(400).json({
            success: false,
            message: "Not Authoriszed",
          });
    }

    try {
        const payload = JWT.verify(token, process.env.SECRET)
        req.user = {id: payload.id, email: payload.email }
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Not Authoriszed",
          });
    }

    next();
}

module.exports = jwtAuth;