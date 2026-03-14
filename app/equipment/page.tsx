'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ShoppingBag, Star, Coffee, Droplets, Flame, Settings, ChevronRight } from 'lucide-react';
import { EQUIPMENT } from './data';
import { useCart } from '@/components/CartContext';

export default function EquipmentPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6 tracking-tight">Brewing Gear</h1>
          <p className="text-xl text-espresso/70 leading-relaxed">
            Choose the right brewing device and the perfect coffee beans for your daily ritual.
          </p>
        </motion.div>

        {/* Equipment Sections */}
        <div className="space-y-32">
          {EQUIPMENT.map((device, i) => (
            <motion.section
              key={device.id}
              id={device.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Device Card */}
              <div className="group relative bg-white rounded-[2.5rem] p-1 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden border border-pastel-mocha/10">
                <div className={`aspect-[4/5] rounded-[2.2rem] ${device.color} overflow-hidden flex flex-col items-center justify-center p-12 transition-all duration-700 group-hover:scale-[0.98]`}>
                  <div className="relative w-full h-80 mb-10 drop-shadow-2xl">
                    <Image 
                      src={device.img} 
                      alt={device.name} 
                      fill 
                      className="object-contain group-hover:scale-110 transition-transform duration-1000" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                  <div className="text-center px-4">
                    <h3 className="text-4xl font-bold text-espresso mb-4 tracking-tight">{device.name}</h3>
                    <div className="flex items-center justify-center gap-3 mb-8">
                      <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-[10px] uppercase font-bold tracking-[0.2em] text-espresso/60 border border-espresso/5">
                        {device.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-[10px] uppercase font-bold tracking-[0.2em] text-espresso/60 border border-espresso/5">
                        {device.style}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-8">
                      <span className="text-3xl font-bold text-espresso">{device.price}</span>
                      <button 
                        onClick={() => addToCart({ id: device.id, title: device.name, price: device.price, img: device.img })}
                        className="flex items-center gap-3 bg-espresso text-cream px-10 py-4 rounded-2xl font-bold hover:bg-pastel-brown transition-all duration-500 shadow-xl shadow-espresso/10 hover:shadow-espresso/20 uppercase text-xs tracking-[0.15em] group/btn"
                      >
                        <ShoppingBag size={18} className="group-hover/btn:scale-110 transition-transform" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coffee Recommendations */}
              <div>
                <h4 className="text-2xl font-bold text-espresso mb-8">Best Coffee for This Brew</h4>
                <p className="text-pastel-brown font-medium mb-6">Best coffee: {device.bestRoast}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {device.recommendedCoffees.map((coffee) => (
                    <div key={coffee.name} className="bg-white rounded-2xl p-6 shadow-sm border border-pastel-mocha/10">
                      <h5 className="text-lg font-bold text-espresso mb-1">{coffee.name}</h5>
                      <p className="text-sm text-pastel-brown mb-2">{coffee.roast}</p>
                      <p className="text-sm text-espresso/70 mb-4">Flavor: {coffee.flavor}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-espresso">{coffee.price}</span>
                        <button 
                          onClick={() => addToCart({ id: coffee.name.toLowerCase().replace(/ /g, '-'), title: coffee.name, price: coffee.price, img: "https://picsum.photos/seed/" + coffee.name.toLowerCase().replace(/ /g, '-') + "/800/800" })}
                          className="text-sm bg-pastel-latte text-espresso px-4 py-2 rounded-full font-bold hover:bg-pastel-mocha transition-colors"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
