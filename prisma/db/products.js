const products = [
  {
    name: "AirSound Pro",
    price: 129.99,
    details: "Wireless earbuds with crystal-clear sound, advanced noise-cancellation, and a comfortable fit.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61Y4f4fUmeL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/_k2WXAoKUn0'
  },
  {
    name: "BassBuds Lite",
    price: 99.99,
    details: "Lightweight earbuds with powerful bass and seamless connectivity.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/watch?v=EA9oLsnKJJY'
  },
  {
    name: "SoundWave X",
    price: 119.99,
    details: "Stylish earbuds offering immersive sound experience and long-lasting battery life.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/watch?v=tMpV6kiGRqM'
  },
  {
    name: "Echo Buds",
    price: 109.99,
    details: "Compact earbuds with dynamic audio and effective noise reduction.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/M6APYs_9vpw'
  },
  {
    name: "TrueSound E20",
    price: 139.99,
    details: "Premium earbuds delivering balanced sound and unmatched comfort.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/M6APYs_9vpw'
  },
  {
    name: "WirelessBeats X",
    price: 149.99,
    details: "High-performance earbuds with clear sound and secure fit.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/e3RS2IoNhxk'
  },
  {
    name: "AirPods Pro",
    price: 199.99,
    details: "Revolutionary earbuds with adaptive EQ and transparency mode.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/w3XU8gTgeZU'
  },
  {
    name: "Bose QuietComfort",
    price: 279.99,
    details: "Industry-leading earbuds with noise cancellation and aware mode.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/KY1L6VNt39s'
  },
  {
    name: "Jabra Elite 75t",
    price: 169.99,
    details: "Advanced earbuds with customizable sound and reliable call quality.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/9TrtGsFGrX4'
  },
  {
    name: "Samsung Galaxy Buds Pro",
    price: 199.99,
    details: "Innovative earbuds with intelligent active noise cancellation.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/GmchhAaVuE8'
  },
  {
    name: "NoiseFree Over-Ear",
    price: 199.99,
    details: "Over-ear headphones providing immersive sound and noise cancellation.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/TeSfXHHwYN8'
  },
  {
    name: "BassMaster 3000",
    price: 219.99,
    details: "Powerful over-ear headphones with deep bass and high fidelity.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/pOQpsANDfyg'
  },
  {
    name: "SoundSurge Q20",
    price: 179.99,
    details: "Comfortable headphones with hi-res audio and rapid charge.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/uJa_-6WZnTc'
  },
  {
    name: "AudioEscape Max",
    price: 249.99,
    details: "Premium headphones with superior sound and adaptive EQ.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/x6oVRhRjSuw'
  },
  {
    name: "ClearSound Pro",
    price: 199.99,
    details: "Elegant over-ear headphones with crystal-clear audio and sleek design.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/7hu9lmIYbb8'
  },
  {
    name: "Bose QuietComfort 45",
    price: 329.99,
    details: "Industry-leading headphones with unparalleled noise cancellation.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/ags0Wid9P2E'
  },
  {
    name: "Sony WH-1000XM4",
    price: 349.99,
    details: "High-resolution headphones with ambient sound control and touch sensor.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/7yXbzSzG6Lk'
  },
  {
    name: "ClearSound Pro",
    price: 199.99,
    details: "Elegant over-ear headphones with crystal-clear audio and sleek design.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/7hu9lmIYbb8'
  },
  {
    name: "JBL Live 660NC",
    price: 199.99,
    details: "Modern headphones with powerful drivers and voice assistant compatibility.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/_BrNzviq_3g'
  },
  {
    name: "Panasonic RB-M700B",
    price: 179.99,
    details: "Deep bass headphones with XBS DEEP and bass reactor.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/aZlRgw5iQf8'
  },
  {
    name: "EchoDot Smart",
    price: 89.99,
    details: "Smart speaker with Alexa, perfect for any room.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "BassBlast 500",
    price: 299.99,
    details: "Compact speaker with explosive bass and splash-proof design.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "SoundPulse Mini",
    price: 129.99,
    details: "Small yet powerful speaker with rich sound and built-in microphone.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "AquaTune Waterproof",
    price: 199.99,
    details: "Waterproof and durable speaker with dynamic audio performance.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "EchoDot Smart",
    price: 89.99,
    details: "Smart speaker with Alexa, perfect for any room.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "Sony SRS-XB23",
    price: 98.99,
    details: "Extra bass portable speaker with colorful line light.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/QY5O9Rn8700'
  },
  {
    name: "JBL Flip 6",
    price: 119.99,
    details: "Bold sound ultra-portable speaker with integrated carabiner.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif,',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/THcMW0mkc5o'
  },
  {
    name: "Anker Soundcore 2",
    price: 39.99,
    details: "Outdoor speaker with superior sound and impressive bass.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/sjHuodK-748'
  },
  {
    name: "Bose SoundLink Micro",
    price: 109.99,
    details: "Pocket-sized speaker with unmatched bass and waterproof design.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/RhZii7qbg_E'
  },
  {
    name: "Ultimate Ears Wonderboom 2",
    price: 99.99,
    details: "Super portable speaker with 360-degree sound and additional bass.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image2Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    image3Url: 'https://m.media-amazon.com/images/G/01/apparel/rcxgs/tile._CB483369110_.gif',
    videoUrl: 'https://www.youtube.com/shorts/RrfcEpKt1m0'
  },
  ];
  
  module.exports = products;
  