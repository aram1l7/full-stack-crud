const express = require("express");
const router = express.Router();
const { getAccounts, getById } = require("../controllers/accounts");
router.get("/", getAccounts);
router.get("/:id", getById);
module.exports = router;
