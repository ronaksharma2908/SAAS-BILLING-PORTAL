const express = require("express");
const { getSubscriptions } = require("../controllers/billingController.js");
const router = express.Router();

router.get("/", getSubscriptions);

module.exports = router;
