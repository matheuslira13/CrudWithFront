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

const HistoricModel = mongoose.model("historic", HistoricShema);

module.exports = HistoricModel;
