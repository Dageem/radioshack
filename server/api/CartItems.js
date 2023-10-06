const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


router.get("/", require("../auth/middleware"), async (req, res, next) => {
  try {
    const cartItems = await prisma.cartItem.findMany();
    res.send(cartItems);
  } catch (err) {
    next(err);
  }
});


router.post("/", require("../auth/middleware"), async (req, res, next) => {
  try {
    const  {productId,quantity} = req.body
    const openOrder = await prisma.order.findFirst({
      where: {
        userId: req.user.id,
        isCart: true
      },
    });
    const newCartItem = await prisma.cartItem.create({
      data: {
        orderId: openOrder.id,
        productId,
        quantity,
      }
    });
    res.send(newCartItem);
  } catch (err) {
    next(err);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const cartItemToDelete = await prisma.cartItem.findUnique({
      where: {
        id: id, 
      },
    });

    if (!cartItemToDelete) {
      return res.status(404).send({ message: 'Cart item not found' });
    }
    const deletedCartItem = await prisma.cartItem.delete({
      where: {
        id: id,
      },
    });

    res.send({ message: 'Item deleted successfully', cartItem: deletedCartItem });
  } catch (err) {
    next(err);
  }
});


module.exports = router;


