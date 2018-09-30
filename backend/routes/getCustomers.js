"use strict";

const express = require("express");
const router = express.Router();
const cGetCustomers = require("../controllers/getCustomers");

router.get("/getCustomers", cGetCustomers);

module.exports = router;
