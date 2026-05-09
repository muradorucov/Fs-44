const fs = require("fs");
const path = require("path");

const writeFileUtil = (data) => {
  const dbPath = path.join(process.cwd(), "db.json");

  fs.writeFileSync(
    dbPath,
    JSON.stringify(data, null, 2)
  );
};

module.exports = writeFileUtil;