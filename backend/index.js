const express = require("express");
const app = express();
const getCustomers = require("./routes/getCustomers");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to CustTrust API!");
});
app.listen(5000, () => {
  console.log("Node server running!");
});

app.use("/", getCustomers);
