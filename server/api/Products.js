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
router.get('/category/:id', async (req,res,next)=>{
    try{
        const category = await prisma.product.findMany({
            where:{
                id: Number(req.params.id)
            }
        });
        res.send(category)
    }catch(err){
        next(err)
    }
})
module.exports = router;