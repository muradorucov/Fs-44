const jwt = require('jsonwebtoken');
const config = require('../config');
const readFileUtil = require('../utils/readFile');

const authenticate = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      return res.status(401).json({
        message: "Unauthorized - No token provided"
      });
    }

    const decoded = jwt.verify(accessToken, config.jwt_secret);
    const users = readFileUtil("users");
    const foundUser = users.find(usr => usr.id === decoded.id && !usr.isDelete);

    if (!foundUser) {
      return res.status(401).json({
        message: "Unauthorized - User not found"
      });
    }

    req.user = foundUser;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
      error: error.message
    });
  }
};

module.exports = authenticate;