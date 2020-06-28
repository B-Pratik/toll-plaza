const mongoose = require("../../db");

const transactionSchema = new mongoose.Schema({
  vehicleNumber: String,
  amount: String,
  isTwoWay: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Transactions", transactionSchema);
