const Model = require("./transaction.model");

const findTransaction = (transactionId) => Model.findOne({ transactionId });

module.exports = { findTransaction };
