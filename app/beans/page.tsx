'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import { useCart } from '@/components/CartContext';

const BEANS = [
  {
    name: "Morning Whisper",
    desc: "Light roast Ethiopian beans",
    flavor: "citrus, honey",
    roast: "Light Roast",
    price: "₹599",
    color: "bg-pastel-cream",
    img: "/images/products/morning-whisper.png"
  },
  {
    name: "Velvet Ember",
    desc: "Medium roast Colombian beans",
    flavor: "chocolate, caramel",
    roast: "Medium Roast",
    price: "₹699",
    color: "bg-pastel-mocha",
    img: "/images/products/velvet-ember.png"
  },
  {
    name: "Midnight Orchard",
    desc: "Dark roast Brazilian beans",
    flavor: "cocoa, roasted nuts",
    roast: "Dark Roast",
    price: "₹749",
    color: "bg-pastel-mocha",
    img: "/images/products/midnight-orchard.png"
  },
  {
    name: "Golden Drift",
    desc: "Single origin light roast",
    flavor: "berry, floral",
    roast: "Light Roast",
    price: "₹649",
    color: "bg-pastel-sage",
    img: "/images/products/golden-drift.png"
  }
];

export default function BeansPage() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-pastel-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6 tracking-tight">Curated Beans</h1>
          <p className="text-xl text-espresso/70 leading-relaxed">
            Discover our carefully selected single-origin beans and signature blends. Roasted to perfection to bring out their unique flavor profiles.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BEANS.map((bean, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group flex flex-col"
            >
              {/* Product Visual */}
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 bg-white">
                <Image 
                  src={bean.img} 
                  alt={bean.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Branding Overlay (Subtle) */}
                <div className="absolute top-6 left-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-espresso/40">Coffee Club</p>
                </div>
                
                {/* Quick Add Button (Hover) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <button 
                    onClick={() => addToCart({ id: bean.name.toLowerCase().replace(/ /g, '-'), title: bean.name, price: bean.price, img: bean.img })}
                    className="flex items-center gap-2 bg-espresso text-pastel-cream px-6 py-3 rounded-full text-sm font-bold hover:bg-pastel-brown transition-colors shadow-lg"
                  >
                    <ShoppingBag size={16} /> Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-espresso">{bean.name}</h3>
                  <span className="text-lg font-bold text-pastel-brown">{bean.price}</span>
                </div>
                <p className="text-sm font-medium text-espresso/50 mb-3">{bean.roast} • {bean.flavor}</p>
                <p className="text-espresso/70 text-sm leading-relaxed mb-4 flex-grow">{bean.desc}</p>
                
                <div className="flex items-center gap-1 text-pastel-brown mt-auto">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <span className="text-xs text-espresso/50 ml-1">(4.9)</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

