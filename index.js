if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const helmet = require("helmet");
const routes = require("./routes");
const app = express();

app.use(helmet());
app.use(express.static("build"));
app.use("/api", routes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Toll Plaza started`));
