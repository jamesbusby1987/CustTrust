"use strict";

const mySqlCon = require("../helpers/mysql.js");

const getCustomers = (req, res) => {
  mySqlCon.getDatabaseConnection("trustcust").then(con => {
    con.connect(err => {
      if (err) throw err;
      con.query("SELECT * FROM customers", (err, data) => {
        if (err) throw err;
        res.json(data);
      });
    });
  });
};

module.exports = getCustomers;
