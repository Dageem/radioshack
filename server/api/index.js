const express = require('express');
const router = express.Router();

router.use("/products", require("./Products"))
router.use("/category", require("./Category"))
router.use("/orders", require("./Orders"))
router.use("/cartitems", require("./CartItems"))

module.exports = router;