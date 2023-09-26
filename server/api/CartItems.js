const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.get("/", async (req, res, next) => {
  try {
    const cartItems = await prisma.cartItem.findMany();
    res.send(cartItems);
  } catch (err) {
    next(err);
  }
});


router.post("/", async (req, res, next) => {
  try {
    const newCartItem = await prisma.cartItem.create({
      data: req.body,
    });
    res.send(newCartItem);
  } catch (err) {
    next(err);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const cartItem = await prisma.cartItem.delete({
      where: {
        id: Number(req.params.id)
      },
    });
    res.send({ message: 'Item deleted successfully', cartItem });
  } catch (err) {
    next(err);
  }
});

module.exports = router;


