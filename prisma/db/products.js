const products = [
  // Earbuds Products
  {
      name: "AirSound Pro",
      price: 129.99,
      details: "Wireless earbuds with crystal-clear sound, advanced noise-cancellation, and a comfortable fit.",
      category: { create: { name: "Earbuds" } }
  },
  {
      name: "BassBeats Budz",
      price: 99.99,
      details: "Compact earbuds featuring powerful bass and seamless connectivity.",
      category: { create: { name: "Earbuds" } }
  },
  {
      name: "ClearTones",
      price: 79.99,
      details: "High-resolution earbuds with ambient sound mode.",
      category: { create: { name: "Earbuds" } }
  },

  // Headphones Products
  {
      name: "NoiseFree Over-Ear",
      price: 199.99,
      details: "Over-ear headphones providing immersive sound and noise cancellation.",
      category: { create: { name: "Headphones" } }
  },
  {
      name: "StudioSound Max",
      price: 299.99,
      details: "High-fidelity over-ear headphones for studio-quality sound.",
      category: { create: { name: "Headphones" } }
  },
  {
      name: "AudioFlex Premium",
      price: 179.99,
      details: "Flexible over-ear headphones with cushioned ear cups.",
      category: { create: { name: "Headphones" } }
  },
 
  // Speakers Products
  {
      name: "UltraBoom Speaker",
      price: 249.99,
      details: "Portable speaker with deep bass, high volume levels, and long-lasting battery.",
      category: { create: { name: "Speakers" } }
  },
  {
      name: "MegaSound Blaster",
      price: 299.99,
      details: "Powerful speaker with advanced sound technology and connectivity features.",
      category: { create: { name: "Speakers" } }
  },
  {
      name: "BassPro Go",
      price: 199.99,
      details: "Compact yet powerful speaker with water-resistant design.",
      category: { create: { name: "Speakers" } }
  }
];





module.exports = products;