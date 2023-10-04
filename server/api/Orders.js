const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", require("../auth/middleware"), async (req, res, next) => {
  console.log("user", req.user);
  try {
    const userId = req.user.id;
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

router.get("/cart", async (req, res, next) => {
  try {
    const userId = req.user.id;
    const userOrder = await prisma.order.findUnique({
      where: {
        userId: userId,
        isCart: true,
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
    res.json(userOrder);
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

router.post("/", require("../auth/middleware"), async (req, res, next) => {
  const { userId, quantity, productId } = req.body;
  try {
    const openOrder = await prisma.order.findFirst({
      where: {
        userId: req.user.userId,
        isFulfilled: false,
      },
      include: {
        cartItem: {
          include: {
            product: true,
          },
        },
      },
    });

    const existingproduct = openOrder.cartItem.find(
      (product) => product.userId === userId
    );
    if (existingproduct) {
      const updatedCartItem = await prisma.cartItem.update({
        where: { id: existingproduct.id },
        data: {
          quantity: existingproduct.quantity + quantity,
        },
      });
      const updatedOrder = await prisma.order.findFirst({
        where: {
          userId: req.user.id,
          isFulfilled: false,
        },
        include: {
          cartItem: {
            include: {
              product: true,
            },
          },
        },
      });
      res.send({ addedToCart: updatedOrder.cartItem });
    } else {
      const createdCartItem = await prisma.cartItem.create({
        data: {
          orderId: openOrder.id,
          productId,
          quantity,
        },
      });

      const updatedOrder = await prisma.order.findFirst({
        where: {
          userId: req.user.id,
          isFulfilled: false,
        },
        include: {
          cartItem: {
            include: {
              product: true,
            },
          },
        },
      });
      res.send({ addedToCart: updatedOrder.cartItem });
    }
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
