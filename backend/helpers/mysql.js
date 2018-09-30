const mysql = require("mysql");

const getDatabaseConnection = async db => {
  return await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: db
  });
};

module.exports = { getDatabaseConnection };
