const fs = require("fs");
const path = require("path");

const writeFileUtil = (data) => {
  fs.writeFileSync(path.join(__dirname, "../../db.json"), JSON.stringify(data, null, 2))
}


module.exports = writeFileUtil;