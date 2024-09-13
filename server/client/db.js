// db.js
const massive = require("massive");
const configs = require("../config/configs");
// Database connection details
const connectionString = configs["local"].db.connectionString;
// Initialize Massive.js
let dbInstance;

module.exports = async () => {
  if (!dbInstance) {
    dbInstance = await massive({ connectionString });
  }
  return dbInstance;
};
