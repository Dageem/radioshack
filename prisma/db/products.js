const products = [
  {
    name: "AirSound Pro",
    price: 129.99,
    details: "Wireless earbuds with crystal-clear sound, advanced noise-cancellation, and a comfortable fit.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/415htcXRtmL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/41KCmUp61hL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/511i-sIqPxL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/_k2WXAoKUn0'
  },
  {
    name: "BassBuds Lite",
    price: 99.99,
    details: "Lightweight earbuds with powerful bass and seamless connectivity.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61IUWKb0FPL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71PqcKDWy2L._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71pg0vhrkDL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=EA9oLsnKJJY'
  },
  {
    name: "SoundWave X",
    price: 119.99,
    details: "Stylish earbuds offering immersive sound experience and long-lasting battery life.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71Sqg+w9bFL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81PETt0yg1L._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61vNXwgFx-L._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=tMpV6kiGRqM'
  },
  {
    name: "Echo Buds",
    price: 109.99,
    details: "Compact earbuds with dynamic audio and effective noise reduction.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/717ckvXvIvL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61FdL2qx-1L._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71gTVrX7NiL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/M6APYs_9vpw'
  },
  {
    name: "TrueSound E20",
    price: 139.99,
    details: "Premium earbuds delivering balanced sound and unmatched comfort.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71jj7svGfTL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71CrYzZPcpL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71sIlK-ineL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/M6APYs_9vpw'
  },
  {
    name: "WirelessBeats X",
    price: 149.99,
    details: "High-performance earbuds with clear sound and secure fit.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/613+h5iz9VL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71BI9euUqkL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81-h7sqLzeL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/e3RS2IoNhxk'
  },
  {
    name: "AirPods Pro",
    price: 199.99,
    details: "Revolutionary earbuds with adaptive EQ and transparency mode.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71lqmQbrWoL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71V4Sux6iPL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71WUtZA+PnL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/w3XU8gTgeZU'
  },
  {
    name: "Bose QuietComfort",
    price: 279.99,
    details: "Industry-leading earbuds with noise cancellation and aware mode.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61zJ3-tanCL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71xrT6SwzOL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61txOjG8FHL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/KY1L6VNt39s'
  },
  {
    name: "Jabra Elite 75t",
    price: 169.99,
    details: "Advanced earbuds with customizable sound and reliable call quality.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/51BOYHNPVyL._AC_SL1200_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/51A3NOYgz0L._AC_SL1200_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/51cQN3JaQgL._AC_SL1200_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/9TrtGsFGrX4'
  },
  {
    name: "Samsung Galaxy Buds Pro",
    price: 199.99,
    details: "Innovative earbuds with intelligent active noise cancellation.",
    category: { create: { name: "Earbuds" } },
    imageUrl: 'https://m.media-amazon.com/images/I/714jrLDPqjL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/716Vhcva7hL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61lBg4QK4eL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/GmchhAaVuE8'
  },
  {
    name: "NoiseFree Over-Ear",
    price: 199.99,
    details: "Over-ear headphones providing immersive sound and noise cancellation.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71eIMccUT3L._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71G0VGju3GL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71VRrn1Nx4L._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/TeSfXHHwYN8'
  },
  {
    name: "BassMaster 3000",
    price: 219.99,
    details: "Powerful over-ear headphones with deep bass and high fidelity.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61O7S27O+jL._AC_SL1468_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61s41QLT03L._AC_SL1468_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/61SKBssIhUL._AC_SL1468_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/pOQpsANDfyg'
  },
  {
    name: "SoundSurge Q20",
    price: 179.99,
    details: "Comfortable headphones with hi-res audio and rapid charge.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61bLr7u31DL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/6138Zhz8kUL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71YwM+pTEDL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/uJa_-6WZnTc'
  },
  {
    name: "AudioEscape Max",
    price: 249.99,
    details: "Premium headphones with superior sound and adaptive EQ.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/617c1ziVVNL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71INp1+YY1L._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71pdLC7iSbL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/x6oVRhRjSuw'
  },
  {
    name: "ClearSound Pro",
    price: 199.99,
    details: "Elegant over-ear headphones with crystal-clear audio and sleek design.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61H1cFamj+L._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61RjaFoLyIL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81vY1YTRY0L._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/7hu9lmIYbb8'
  },
  {
    name: "Bose QuietComfort 45",
    price: 329.99,
    details: "Industry-leading headphones with unparalleled noise cancellation.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71ioVs9lvWL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/716qOFgPNkL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81LpDNhtQ0L._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/ags0Wid9P2E'
  },
  {
    name: "Sony WH-1000XM4",
    price: 349.99,
    details: "High-resolution headphones with ambient sound control and touch sensor.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/619zjivnmYS._AC_SL1200_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61YQhunCM2S._AC_SL1200_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71PfEwou9KS._AC_SL1200_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/7yXbzSzG6Lk'
  },
  {
    name: "ClearSound Pro",
    price: 199.99,
    details: "Elegant over-ear headphones with crystal-clear audio and sleek design.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/41tp0JPPlmL._AC_SL1200_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/510wz4oMBxL._AC_SL1200_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/91hx2gnY0qL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/7hu9lmIYbb8'
  },
  {
    name: "JBL Live 660NC",
    price: 199.99,
    details: "Modern headphones with powerful drivers and voice assistant compatibility.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61x6E4kVXmL._AC_SL1178_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71xjsctt24L._AC_SL1200_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71652GVE0KL._AC_SL1200_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/_BrNzviq_3g'
  },
  {
    name: "Panasonic RB-M700B",
    price: 179.99,
    details: "Deep bass headphones with XBS DEEP and bass reactor.",
    category: { create: { name: "Headphones" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61RomAW4KuL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71ndlQJ-zjL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81Bs-Mpq9GL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/aZlRgw5iQf8'
  },
  {
    name: "EchoDot Smart",
    price: 89.99,
    details: "Smart speaker with Alexa, perfect for any room.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71coh8P4h6L._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71EbIL-S4NL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71GSwi1JGVL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "BassBlast 500",
    price: 299.99,
    details: "Compact speaker with explosive bass and splash-proof design.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/61iJoQoiVnL._AC_SL1200_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/41Jv9pt0-aL._AC_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71BmYuKFYfL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "SoundPulse Mini",
    price: 129.99,
    details: "Small yet powerful speaker with rich sound and built-in microphone.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/81Cu6K0m0+L._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71KHNSutivL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71AhHgBIf0L._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "AquaTune Waterproof",
    price: 199.99,
    details: "Waterproof and durable speaker with dynamic audio performance.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71nlCQ5HJiL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/81QSvMJ0SRL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81YUKNZtU4L._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "EchoDot Smart",
    price: 89.99,
    details: "Smart speaker with Alexa, perfect for any room.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71BJbii7jlL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/61fX+5nn6RS._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71mD4qkw+yL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/YQKtDv2un8A'
  },
  {
    name: "Sony SRS-XB23",
    price: 98.99,
    details: "Extra bass portable speaker with colorful line light.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71HC+kgyxnL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71WLgwSFIxL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71WLgwSFIxL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/QY5O9Rn8700'
  },
  {
    name: "JBL Flip 6",
    price: 119.99,
    details: "Bold sound ultra-portable speaker with integrated carabiner.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71W+keLlNIL._AC_SL1500_.jpg,',
    image2Url: 'https://m.media-amazon.com/images/I/71W+keLlNIL._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/81YK2tVB0NL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/THcMW0mkc5o'
  },
  {
    name: "Anker Soundcore 2",
    price: 39.99,
    details: "Outdoor speaker with superior sound and impressive bass.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/91udHoa6oCS._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/91D6umNxH2L._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/813n07j1dtL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/sjHuodK-748'
  },
  {
    name: "Bose SoundLink Micro",
    price: 109.99,
    details: "Pocket-sized speaker with unmatched bass and waterproof design.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/71zrApZgcEL._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71+6M8GoM1L._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71TTG+saYdL._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/RhZii7qbg_E'
  },
  {
    name: "Ultimate Ears Wonderboom 2",
    price: 99.99,
    details: "Super portable speaker with 360-degree sound and additional bass.",
    category: { create: { name: "Speakers" } },
    imageUrl: 'https://m.media-amazon.com/images/I/81PZVF0WosS._AC_SL1500_.jpg',
    image2Url: 'https://m.media-amazon.com/images/I/71nayiSHxCS._AC_SL1500_.jpg',
    image3Url: 'https://m.media-amazon.com/images/I/71z7bp2fNLS._AC_SL1500_.jpg',
    videoUrl: 'https://www.youtube.com/shorts/RrfcEpKt1m0'
  },
  ];
  
  module.exports = products;
  