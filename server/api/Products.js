const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await prisma.product.findMany();
    res.send(allProducts);
  } catch (err) {
    next(err);
  }
});
router.get("/recent", async (req, res, next) => {
  try {
    const recentProducts = await prisma.product.findMany({
      take: 5,
      orderBy: {
        id: "desc",
      },
      include: {
        category: true,
      },
    });
    res.send(recentProducts);
  } catch (err) {
    next(err);
  }
});


router.get("/:id", async (req, res, next) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(product);
  } catch (err) {
    next(err);
  }
});
router.get("/category/:categoryName", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: {
          name: req.params.categoryName,
        },
      },
    });
    res.send(products);
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    if(req.body.categoryId) {
      req.body.categoryId = parseInt(req.body.categoryId, 10);
      if(isNaN(req.body.categoryId)) {
        return res.status(400).send({ error: 'categoryId must be a valid integer' });
      }
    }
    const product = await prisma.product.create({
      data: req.body,
    });
    res.status(201).send(product);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const product = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.send(product);
  } catch (err) {
    next(err);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    await prisma.product.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(204).send("Deleted Successfully");
  } catch (err) {
    next(err);
  }
});

module.exports = router;


