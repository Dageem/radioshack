const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { checkAuthenticated } = require("../middleware/auth");

router.get('/user', checkAuthenticated, async (req, res) => {
  try {
    const userId = req.session.userId;
    const userProfile = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    res.json(userProfile);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put('/user', checkAuthenticated, async (req, res) => {
  try {
    const userId = req.session.userId;
    const updatedUserData = req.body;
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      email: updatedUserData, 
    });

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;