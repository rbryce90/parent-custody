// db.js
const massive = require("massive");
const configs = require("../config/configs");
// Database connection details
const connectionString = configs["local"].db.connectionString;
// Initialize Massive.js
let dbInstance;

module.exports = async () => {
  if (!dbInstance) {
    try {
      dbInstance = await massive({ connectionString });
      console.log("db connected");
    } catch (err) {
      console.log("error connecting to massive: ", err);
    }
  }
  return dbInstance;
};
