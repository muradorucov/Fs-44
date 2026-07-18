const app = require("../src/app");
const config = require("../src/config");

app.listen(config.port);
module.exports = app;