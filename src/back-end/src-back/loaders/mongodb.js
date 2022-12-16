const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbPath = process.env.DB_PATH;

const startDB = async () => {
  console.log("aquiii", dbUser);
  await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}${dbPath}`);
};

module.exports = startDB;
