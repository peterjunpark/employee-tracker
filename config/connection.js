const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: "employees_db",
  });

  module.exports = connection;
