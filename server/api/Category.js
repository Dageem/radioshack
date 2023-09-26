const express = require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


router.get('/:name', async (req,res,next)=>{
    try{
        const category = await prisma.category.findMany({
            where:{
                name: req.params.name
            }
        });
        res.send(category)
    }catch(err){
        next(err)
    }
})
router.get('/', async (req,res,next)=>{
    try{
        const allcategory = await prisma.category.findMany();
        res.send(allcategory)
    }catch(err){
        next(err)
    }
})


module.exports = router;