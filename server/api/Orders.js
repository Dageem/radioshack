const express =require('express');
const router = express.Router();
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', async (req,res,next)=>{
    try {
        const allorders = await prisma.orders.findMany();
        res.send(allorders)
    } catch(err){
        next(err)
    }
})

router.get('/:id', async (req,res,next)=>{
    try {

        const singleorder = await prisma.orders.findUnique({
            where:{
                id: Number(req.params.id)
            }
        })
        res.send(singleorder)

    } catch(err){
        next(err)
    }
})

router.post('/', async (req,res,next)=>{
    try {
        const addorder = await prisma.order.create({
            data:req.body
        })
        res.send(addorder);
    } catch(err){
        next(err)
    }
} )

router.delete('/:id', async (req,res,next)=>{
    try {
        const deleteorder = await prisma.orders.delete(
            {
                where: {
                    id: Number(req.params.id)
                }
            }
        )
        res.send(deleteorder);
    } catch(err){
        next(err)
    }
})
module.exports = router;