const dotenv = require("dotenv").config();
const cTable = require("console.table");
const connection = require("./connection.js")

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
    connection.end();
  }
}

module.exports = {
  ViewTask,
};
