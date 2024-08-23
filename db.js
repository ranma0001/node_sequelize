const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tbl_emp",
});

mysqlPool
  .query("Select * from tbl_employee")
  .then((data) => console.log(data))
  .catch((err) => console.log("db connection error".err));
