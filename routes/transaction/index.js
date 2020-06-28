const { findTransaction } = require("./transaction.controller");

const verifyReceipt = async (req, res) => {
  const { transactionId } = req.params;
  if (!transactionId) {
    res.statusMessage = "incorrect transaction id";
    return res.status(400).end();
  }

  const transaction = await findTransaction(transactionId);
  return res.send(transaction);
};

module.exports = {
  verifyReceipt,
};
