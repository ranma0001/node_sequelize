const mysql = require("mysql2/promise");

mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tbl_emp",
});




module.exports = mysqlPool;
