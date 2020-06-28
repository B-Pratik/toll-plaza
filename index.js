if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));
app.use("/api", routes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Toll Plaza started`));
