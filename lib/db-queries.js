const mysql = require("mysql2");
const cTable = require("console.table");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQLPASSWORD,
  database: "employees_db",
});

const getTable = (db) => {
  connection.query(`SELECT * FROM ${db}`, (err, results, fields) => {
    console.table(results);
  });
};

module.exports = {
  getTable,
};
