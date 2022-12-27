const { string } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const HistoricShema = new Schema({
  author: ObjectId,
  type: String,
  date: String,
  hours: String,
  value: String,
});

const SignInShema = new Schema({
  author: ObjectId,
  name: String,
  password: String,
  email: String,
  balance: String,
  facebook: String,
  github: String,
  linkedin: String,
  historic: [HistoricShema],
});

const SignInModel = mongoose.model("signIn", SignInShema);

module.exports = SignInModel;
