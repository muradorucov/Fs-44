const fs = require("fs");
const path = require("path");

const readFileUtil = (dbname) => {
  const dbPath = path.join(process.cwd(), "db.json");

  const data = JSON.parse(
    fs.readFileSync(dbPath, "utf-8")
  );

  return dbname ? data[dbname] : data;
};

module.exports = readFileUtil;