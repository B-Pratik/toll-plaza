const {
  findTransaction,
  saveTransaction,
} = require("./transaction.controller");

const verifyReceipt = async (req, res) => {
  const { transactionId } = req.params;

  const transaction = await findTransaction(transactionId);
  const isValid =
    transaction &&
    transaction.isTwoWay &&
    transaction.date.getTime() < Date.now();

  return res.send({ isValid });
};

const verifyRequest = (req, res, next) => {
  const { vehicleNumber, amount } = req.body;

  if (!vehicleNumber || !amount) {
    res.statusMessage = "incorrect transaction details";
    return res.status(400).end();
  }

  return next();
};

const verifyId = (req, res, next) => {
  const { transactionId } = req.params;
  const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
  if (!transactionId || !checkForHexRegExp.test(transactionId)) {
    res.statusMessage = "incorrect transaction id";
    return res.status(400).end();
  }

  return next();
};

const addTransaction = async (req, res) => {
  const requestObj = req.body;

  const transaction = await saveTransaction(requestObj);
  return res.send(transaction);
};

module.exports = {
  verifyReceipt,
  addTransaction,
  verifyRequest,
  verifyId,
};
