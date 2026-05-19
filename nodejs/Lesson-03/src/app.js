const express = require("express")
const app = express();
const router = require("./routers");
const cors = require("cors")
require("dotenv").config()


// const allowedOrigins = [
//   origin1,
//   orogin2
// ]


app.use(cors(
  {
    origin: function (origin, callback) {
      console.log(origin);

      if (!allowedOrigins.includes(origin)) {
        const msg = "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  }
))
app.use(express.json());

app.use("/", router)

module.exports = app;


// origin

// cors access
// https://front.az
