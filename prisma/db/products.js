const products = [
    // Earbuds Products
    {
      name: "AirSound Pro",
      price: 129.99,
      details: "Wireless earbuds with crystal-clear sound, advanced noise-cancellation, and a comfortable fit.",
      category: { create: { name: "Earbuds" } },
      imageUrl: "https://m.media-amazon.com/images/I/61INRzmJaBL._AC_SL1500_.jpg"
    },
    {
      name: "BassBeats Budz",
      price: 99.99,
      details: "Compact earbuds featuring powerful bass and seamless connectivity.",
      category: { create: { name: "Earbuds" } },
      imageUrl: "https://m.media-amazon.com/images/I/61ziCBwTtEL._AC_SL1500_.jpg"
    },
    {
      name: "ClearTones",
      price: 79.99,
      details: "High-resolution earbuds with ambient sound mode.",
      category: { create: { name: "Earbuds" } },
      imageUrl: "https://m.media-amazon.com/images/I/613+h5iz9VL._AC_SL1500_.jpg"
    },
    // Headphones Products
    {
      name: "NoiseFree Over-Ear",
      price: 199.99,
      details: "Over-ear headphones providing immersive sound and noise cancellation.",
      category: { create: { name: "Headphones" } },
      imageUrl: "https://m.media-amazon.com/images/I/71ukJ0DfKzL._AC_SL1500_.jpg"
    },
    {
      name: "StudioSound Max",
      price: 299.99,
      details: "High-fidelity over-ear headphones for studio-quality sound.",
      category: { create: { name: "Headphones" } },
      imageUrl: "https://m.media-amazon.com/images/I/71-+0U8z-ZL._AC_SL1500_.jpg"
    },
    {
      name: "AudioFlex Premium",
      price: 179.99,
      details: "Flexible over-ear headphones with cushioned ear cups.",
      category: { create: { name: "Headphones" } },
      imageUrl: 'https://m.media-amazon.com/images/I/811RreTN3rL._AC_SL1500_.jpg'
    },
    // Speakers Products
    {
      name: "UltraBoom Speaker",
      price: 249.99,
      details: "Portable speaker with deep bass, high volume levels, and long-lasting battery.",
      category: { create: { name: "Speakers" } },
      imageUrl: 'https://m.media-amazon.com/images/I/81djh1gfUwL._AC_SL1500_.jpg'
    },
    {
      name: "MegaSound Blaster",
      price: 299.99,
      details: "Powerful speaker with advanced sound technology and connectivity features.",
      category: { create: { name: "Speakers" } },
      imageUrl: 'https://m.media-amazon.com/images/I/71coh8P4h6L._AC_SL1500_.jpg'
    },
    {
      name: "BassPro Go",
      price: 199.99,
      details: "Compact yet powerful speaker with water-resistant design.",
      category: { create: { name: "Speakers" } },
      imageUrl: 'https://m.media-amazon.com/images/I/71GA-xkPdwL._AC_SL1500_.jpg'
    }
  ];
  
  module.exports = products;
  