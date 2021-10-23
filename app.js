const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const mysql2 = require("mysql2");

const db = mysql2.createConnection({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

console.log(db);

const app = express();

app.use(morgan("dev"));

app.listen(process.env.PORT, () => {
  console.log("4000 SERVER START");
});
