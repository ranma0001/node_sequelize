const express = require("express"),
  app = express();

const db = require("./db"),
  EmployeeRoute = require("./controller/employee.controller");

//middleware
app.use("/api/employees", EmployeeRoute);

db.query("Select 1").then(
  () => console.log("Database Connected"),
  app.listen(3000, () => console.log("Server Connected"))
);
