const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  try {
    const userId = req.userId;
    const userOrders = await prisma.order.findMany({
      where: {
        userId: userId,
        isCart: false,
      },
      include: {
        user: true,
        cartItems: {
          include: {
            product: true,
          },
        },
      },
    });
    res.json(userOrders);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const singleorder = await prisma.order.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(singleorder);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const addorder = await prisma.order.create({
      data: req.body,
    });
    res.send(addorder);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteorder = await prisma.orders.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(deleteorder);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
