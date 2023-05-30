require("dotenv").config();
const mysql = require("mysql2/promise");

async function connect() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDB,
  });

  return connection;
}


module.exports = connect;
