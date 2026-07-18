require('dotenv').config()

const config = {
  origin1: process.env.ORIGIN1,
  origin2: process.env.ORIGIN2,
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  jwt_secret: process.env.JWT_SECRET_KEY
}

module.exports = config;