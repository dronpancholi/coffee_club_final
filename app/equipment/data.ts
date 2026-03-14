export type Coffee = {
  name: string;
  roast: string;
  flavor: string;
  price: string;
};

export type Device = {
  id: string;
  name: string;
  desc: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  style: string;
  price: string;
  color: string;
  img: string;
  recommendedCoffees: Coffee[];
  bestRoast: string;
};

export const EQUIPMENT: Device[] = [
  {
    id: "french-press",
    name: "French Press",
    desc: "Full-bodied immersion brewing method that produces rich and bold coffee.",
    difficulty: "Beginner",
    style: "Immersion",
    price: "₹1,299",
    color: "bg-pastel-latte",
    img: "/images/products/french-press.png",
    bestRoast: "Medium to Dark Roast",
    recommendedCoffees: [
      { name: "Velvet Ember", roast: "Medium Roast", flavor: "Chocolate, caramel", price: "₹699" },
      { name: "Midnight Orchard", roast: "Dark Roast", flavor: "Cocoa, roasted nuts", price: "₹749" }
    ]
  },
  {
    id: "moka-pot",
    name: "Moka Pot",
    desc: "Stovetop coffee maker that produces strong, espresso-like coffee.",
    difficulty: "Intermediate",
    style: "Pressure",
    price: "₹1,899",
    color: "bg-pastel-brown",
    img: "/images/products/moka-pot.png",
    bestRoast: "Dark Roast",
    recommendedCoffees: [
      { name: "Midnight Orchard", roast: "Dark Roast", flavor: "Cocoa, roasted nuts", price: "₹749" },
      { name: "Golden Ember", roast: "Dark Roast", flavor: "Smoke, dark chocolate", price: "₹799" }
    ]
  },
  {
    id: "aeropress",
    name: "AeroPress",
    desc: "Versatile, portable device for quick and clean coffee.",
    difficulty: "Beginner",
    style: "Immersion/Pressure",
    price: "₹3,499",
    color: "bg-pastel-sage",
    img: "/images/products/aeropress.png",
    bestRoast: "Medium Roast",
    recommendedCoffees: [
      { name: "Velvet Ember", roast: "Medium Roast", flavor: "Chocolate, caramel", price: "₹699" },
      { name: "Golden Drift", roast: "Medium Roast", flavor: "Nutty, sweet", price: "₹649" }
    ]
  },
  {
    id: "pour-over",
    name: "Pour Over (V60)",
    desc: "Manual brewing method for clean, complex flavors.",
    difficulty: "Advanced",
    style: "Drip",
    price: "₹1,599",
    color: "bg-pastel-mocha",
    img: "/images/products/pour-over.png",
    bestRoast: "Light Roast",
    recommendedCoffees: [
      { name: "Morning Whisper", roast: "Light Roast", flavor: "Citrus, honey", price: "₹599" },
      { name: "Golden Drift", roast: "Medium Roast", flavor: "Nutty, sweet", price: "₹649" }
    ]
  },
  {
    id: "espresso-machine",
    name: "Espresso Machine",
    desc: "Professional-grade machine for concentrated espresso shots.",
    difficulty: "Advanced",
    style: "Pressure",
    price: "₹14,999",
    color: "bg-pastel-sage",
    img: "/images/products/espresso-machine.png",
    bestRoast: "Espresso Roast",
    recommendedCoffees: [
      { name: "Velvet Ember", roast: "Medium Roast", flavor: "Chocolate, caramel", price: "₹699" },
      { name: "Midnight Orchard", roast: "Dark Roast", flavor: "Cocoa, roasted nuts", price: "₹749" }
    ]
  },
  {
    id: "cold-brew-maker",
    name: "Cold Brew Maker",
    desc: "Slow-steeping method for smooth, low-acid coffee.",
    difficulty: "Beginner",
    style: "Immersion",
    price: "₹2,299",
    color: "bg-pastel-latte",
    img: "/images/products/cold-brew-maker.png",
    bestRoast: "Medium to Dark Roast",
    recommendedCoffees: [
      { name: "Midnight Orchard", roast: "Dark Roast", flavor: "Cocoa, roasted nuts", price: "₹749" },
      { name: "Velvet Ember", roast: "Medium Roast", flavor: "Chocolate, caramel", price: "₹699" }
    ]
  }
];

