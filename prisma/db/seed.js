const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const products = require("./products")



async function main() {
    for(let product of products) {
      await prisma.product.create({
        data: product
      });
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}) .finally(async() => {
    await prisma.$disconnect()
})



