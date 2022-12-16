const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SignInShema = new Schema({
  author: ObjectId,
  name: String,
  password: String,
  email: String,
  cash: String,
});

const SignInModel = mongoose.model("signIn", SignInShema);

module.exports = SignInModel;
