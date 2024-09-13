// db.js
const massive = require("massive");
const configs = require("../config/configs");
// Database connection details
const connectionString = configs["local"].db.connectionString;
console.log("connection string ==> ", connectionString);
// Initialize Massive.js
massive(connectionString)
  .then((db) => {
    console.log("Connected to PostgreSQL");
    // Export the database instance
    module.exports = db;
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL", err);
  });
