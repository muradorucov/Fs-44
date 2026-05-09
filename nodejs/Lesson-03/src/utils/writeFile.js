const fs = require("fs");

const writeFileUtil = (data) => {
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2))
}


module.exports = writeFileUtil;