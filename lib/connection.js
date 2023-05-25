const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQLPASSWORD,
    database: "employees_db",
  });

  module.exports = connection;
