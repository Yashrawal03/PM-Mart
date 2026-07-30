/**
 * PM Mart - Product Catalog
 * Add, edit, or remove products here. The website will update automatically.
 * 
 * Categories: 'kurtis', 'crafts', 'spices'
 * Badges: 'New Arrival', 'Best Seller', 'Limited Edition', 'Premium Picks', or leave empty ''
 */

const PRODUCTS = [
  // ==========================================
  // HANDMADE KURTIS
  // ==========================================
  {
    id: "k-01",
    name: "Floral Muse Kurti",
    description: "Elegant handmade cotton kurti with delicate block printing for modern aesthetics.",
    category: "kurtis",
    price: 1299,
    image: "assets/img/k1.jpeg",
    gallery: ["assets/img/k1.jpeg", "assets/img/k1.jpeg", "assets/img/k1.jpeg"],
    details: [
      "100% Pure Premium Cotton",
      "Traditional Hand Block Print",
      "Comfortable standard fit",
      "Gentle hand wash recommended"
    ],
    badge: "Best Seller",
    dateAdded: "2026-07-01"
  },
  {
    id: "k-02",
    name: "Ivory Bloom Kurti",
    description: "Premium dark floral kurti crafted for a sophisticated evening look.",
    category: "kurtis",
    price: 1599,
    image: "assets/img/k2.jpeg",
    gallery: ["assets/img/k2.jpeg", "assets/img/k2.jpeg", "assets/img/k2.jpeg"],
    details: [
      "Premium Silk-Cotton Blend",
      "Intricate floral motifs",
      "Perfect for evening occasions",
      "Dry clean only"
    ],
    badge: "New Arrival",
    dateAdded: "2026-07-28"
  },
  {
    id: "k-03",
    name: "Boho Breeze Kurti",
    description: "Detailed hand-embroidery on premium silk blend for a bohemian touch.",
    category: "kurtis",
    price: 1899,
    image: "assets/img/k3.jpeg",
    gallery: ["assets/img/k3.jpeg", "assets/img/k3.jpeg", "assets/img/k3.jpeg"],
    details: [
      "Heavy hand-embroidery work",
      "Vibrant fade-resistant color",
      "Comes with matching inner lining",
      "Dry clean recommended"
    ],
    badge: "Limited Edition",
    dateAdded: "2026-07-15"
  },
  {
    id: "k-04",
    name: "Indie Chic Kurti",
    description: "Vibrant ethnic kurti designed for festive celebrations and joy.",
    category: "kurtis",
    price: 1450,
    image: "assets/img/k4.jpeg",
    gallery: ["assets/img/k4.jpeg", "assets/img/k4.jpeg", "assets/img/k4.jpeg"],
    details: [
      "Rich crimson red fabric",
      "Festive gold foil print",
      "Breathable and lightweight",
      "Hand wash separately"
    ],
    badge: "",
    dateAdded: "2026-06-20"
  },
  {
    id: "k-05",
    name: "Weekend Muse Kurti",
    description: "A breezy luxury kurti for effortless weekend elegance.",
    category: "kurtis",
    price: 1650,
    image: "assets/img/k5.jpeg",
    gallery: ["assets/img/k5.jpeg", "assets/img/k5.jpeg", "assets/img/k5.jpeg"],
    details: [
      "Lightweight premium linen",
      "Minimalist design",
      "Subtle embroidery details",
      "Machine wash gentle"
    ],
    badge: "Premium Picks",
    dateAdded: "2026-07-25"
  },
  {
    id: "k-06",
    name: "The Artisan Edit Kurti",
    description: "Masterfully crafted cotton kurti featuring timeless heritage patterns.",
    category: "kurtis",
    price: 1750,
    image: "assets/img/k6.jpeg",
    gallery: ["assets/img/k6.jpeg", "assets/img/k6.jpeg", "assets/img/k6.jpeg"],
    details: [
      "Handwoven cotton",
      "Heritage inspired motifs",
      "Relaxed silhouette",
      "Dry clean recommended"
    ],
    badge: "Trending Now",
    dateAdded: "2026-07-29"
  },

  // ==========================================
  // HANDMADE CRAFTS
  // ==========================================
  {
    id: "c-01",
    name: "Artisan Living Basket",
    description: "Handcrafted everlasting floral arrangement wrapped in elegance.",
    category: "crafts",
    price: 799,
    image: "assets/img/c1.jpeg",
    gallery: ["assets/img/c1.jpeg", "assets/img/c1.jpeg", "assets/img/c1.jpeg"],
    details: [
      "Handmade with premium materials",
      "Everlasting, no maintenance required",
      "Perfect for gifting or home decor",
      "Comes beautifully wrapped"
    ],
    badge: "Best Seller",
    dateAdded: "2026-07-25"
  },
  {
    id: "c-02",
    name: "Bloom Decor Ceramic Vase",
    description: "Antique style handmade decor piece bringing vintage charm home.",
    category: "crafts",
    price: 2499,
    image: "assets/img/c2.jpeg",
    gallery: ["assets/img/c2.jpeg", "assets/img/c2.jpeg", "assets/img/c2.jpeg"],
    details: [
      "Authentic brass and ceramic elements",
      "Hand-polished vintage finish",
      "Elegant centerpiece",
      "Includes care instructions"
    ],
    badge: "Premium Picks",
    dateAdded: "2026-05-10"
  },
  {
    id: "c-03",
    name: "Rustic Charm Candle Holder",
    description: "Beautiful bohemian style wall art and decor for your living space.",
    category: "crafts",
    price: 1250,
    image: "assets/img/c3.jpeg",
    gallery: ["assets/img/c3.jpeg", "assets/img/c3.jpeg", "assets/img/c3.jpeg"],
    details: [
      "100% natural materials",
      "Hand-knotting technique",
      "Bohemian aesthetic",
      "Dimensions: 40cm x 60cm"
    ],
    badge: "",
    dateAdded: "2026-06-15"
  },
  {
    id: "c-04",
    name: "Curated Living Wall Art",
    description: "A statement artisan piece to elevate your interior aesthetic.",
    category: "crafts",
    price: 1899,
    image: "assets/img/c4.jpeg",
    gallery: ["assets/img/c4.jpeg", "assets/img/c4.jpeg", "assets/img/c4.jpeg"],
    details: [
      "Handwoven natural fibers",
      "Intricate texture and depth",
      "Ready to hang",
      "Indoor use only"
    ],
    badge: "New Arrival",
    dateAdded: "2026-07-28"
  },
  {
    id: "c-05",
    name: "The Cozy Edit Macrame",
    description: "Soft, textured handmade decor adding warmth to any room.",
    category: "crafts",
    price: 950,
    image: "assets/img/c5.jpeg",
    gallery: ["assets/img/c5.jpeg", "assets/img/c5.jpeg", "assets/img/c5.jpeg"],
    details: [
      "Premium cotton cord",
      "Hand-tied knots",
      "Minimalist design",
      "Spot clean only"
    ],
    badge: "Trending Now",
    dateAdded: "2026-07-20"
  },
  {
    id: "c-06",
    name: "Heritage Edit Brass Lamp",
    description: "Timeless brass lighting fixture with rustic charm and elegance.",
    category: "crafts",
    price: 3200,
    image: "assets/img/c6.jpeg",
    gallery: ["assets/img/c6.jpeg", "assets/img/c6.jpeg", "assets/img/c6.jpeg"],
    details: [
      "Solid brass construction",
      "Hand-etched details",
      "Standard bulb fitting",
      "Wipe clean with dry cloth"
    ],
    badge: "Limited Edition",
    dateAdded: "2026-07-29"
  }
];
