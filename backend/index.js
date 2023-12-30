const bodyparser = require("body-parser");
const express = require("express");

const dbConnection = require("./connection/dbConnection");

const SERVER_PORT = 4000;

const app = express();

app.use(bodyparser.json());

dbConnection();
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening at localhost:${SERVER_PORT}`)
);
