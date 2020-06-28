import { POST } from "../../services/network";

export const createTicket = (reqObj) =>
  POST("/api/add", reqObj).catch((e) => {
    console.error("createTicket", e);
    return null;
  });
