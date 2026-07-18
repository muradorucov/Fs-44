const fs = require("fs");
const path = require("path");

const readFileUtil = (dbname) => {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../../db.json"), "utf-8"))
  return dbname ? data[dbname] : data
}


module.exports = readFileUtil;