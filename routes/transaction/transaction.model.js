const mongoose = require("../../db");

const transactionSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Transaction", transactionSchema);
