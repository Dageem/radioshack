const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', async (req,res,next)=>{
    try{
       const allProducts = await prisma.product.findMany();
       res.send(allProducts)
    }catch(err){
        next(err)
    }
})
router.get('/:id', async (req,res,next)=>{
    try{
        const product = await prisma.product.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.send(product)
    }catch(err){
        next(err)
    }
})
router.get('/category/:categoryName', async (req, res, next) => {  ///test
    try {
      const products = await prisma.product.findMany({
        where: {
          category: {
            name: req.params.categoryName
          }
        }
      });
      res.send(products);
    } catch (err) {
      next(err);
    }
  });
  

module.exports = router;