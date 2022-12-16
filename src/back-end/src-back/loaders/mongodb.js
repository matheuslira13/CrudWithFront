const mongoose = require("mongoose");

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const startDB = async () => {
  console.log("aquiii", dbUser);
  await mongoose.connect(
    `mongodb+srv://itachidb:itachidb@cluster0.f381zwd.mongodb.net/test`
  );
};

module.exports = startDB;
