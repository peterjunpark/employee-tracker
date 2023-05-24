const mysql = require("mysql2");
const cTable = require("console.table");
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQLPASSWORD,
  database: "employees_db",
});

class Task {
  constructor(type, table, column) {
    this.type = type;
    this.table = table;
    this.column = column;
  }
}

class ViewTask extends Task {
  constructor(table, column) {
    super("view", table, column);
  }

  viewTable() {
    connection.query(`SELECT * FROM ${this.table}`, (err, results) => {
      err ? console.error(err) : console.table(results);
    });
  }
}

module.exports = {
  ViewTask,
};
