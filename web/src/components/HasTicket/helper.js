import { GET } from "../../services/network";

export const verifyTransaction = (transactionId) =>
  GET(`/api/verifyReceipt/${transactionId}`).catch((e) => {
    console.error("verifyTransaction", e);
    return {};
  });
