const express = require('express');
const router = express.Router();

router.use("/products", require("./Products"))

module.exports = router;