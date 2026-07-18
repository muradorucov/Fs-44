const express = require("express")
const app = express();
const router = require("./routers");
const cors = require("cors");
const config = require("./config");
const path = require("path");
const cookieParser = require('cookie-parser')

const allowedOrigins = [
  config.origin1,
  config.origin2,
  "http://localhost:3002"
]

app.use(cors(
  {
    origin: function (origin, callback) {
      if (!origin && config.node_env === "development") return callback(null, true);
      if (!allowedOrigins.includes(origin)) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  }
))

app.use(express.json());
app.use(cookieParser());

app.use("/", router)

app.use("/uploads", express.static(path.join(__dirname, "uploads")))

module.exports = app;


// origin

// cors access
// https://front.az
