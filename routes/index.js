const router = require("express").Router();
const { verifyReceipt } = require("./transaction");

router.get("/verifyReceipt/:transactionId", verifyReceipt);

module.exports = router;
