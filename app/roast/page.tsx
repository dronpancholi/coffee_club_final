'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Droplets, Leaf, Coffee } from 'lucide-react';

const ROASTS = [
  {
    id: 'light',
    name: 'Light Roast',
    color: 'bg-pastel-latte',
    textColor: 'text-pastel-brown',
    icon: Leaf,
    desc: "Roasted for a shorter time to preserve the bean's original characteristics. High acidity, floral and fruity notes, light body.",
    temp: "196°C - 205°C",
    bestFor: "Pour-over, Aeropress",
    flavorProfile: { acidity: 90, body: 30, sweetness: 70, bitterness: 10 }
  },
  {
    id: 'medium',
    name: 'Medium Roast',
    color: 'bg-pastel-mocha',
    textColor: 'text-espresso',
    icon: Droplets,
    desc: "The perfect balance. Roasting brings out caramel and chocolate notes while maintaining some of the bean's natural acidity. Medium body.",
    temp: "210°C - 219°C",
    bestFor: "Drip coffee, French Press",
    flavorProfile: { acidity: 50, body: 60, sweetness: 80, bitterness: 40 }
  },
  {
    id: 'dark',
    name: 'Dark Roast',
    color: 'bg-pastel-brown',
    textColor: 'text-pastel-cream',
    icon: Flame,
    desc: "Roasted longer for a bold, intense flavor. The roasting process dominates the bean's origin flavors, resulting in smoky, nutty, and chocolatey notes. Low acidity, heavy body.",
    temp: "225°C - 230°C",
    bestFor: "Espresso, Moka Pot",
    flavorProfile: { acidity: 10, body: 90, sweetness: 40, bitterness: 80 }
  }
];

export default function RoastGuidePage() {
  const [activeRoast, setActiveRoast] = useState(ROASTS[1]); // Default to Medium

  return (
    <div className="min-h-screen bg-pastel-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6 tracking-tight">The Roast Spectrum</h1>
          <p className="text-xl text-espresso/70 leading-relaxed">
            Roasting transforms green coffee beans into the aromatic brown beans we know and love. Discover how time and temperature shape your cup.
          </p>
        </motion.div>

        {/* Interactive Slider Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Visual Representation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative aspect-square rounded-[3rem] ${activeRoast.color} transition-colors duration-700 flex items-center justify-center overflow-hidden shadow-2xl`}
          >
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1000/1000?blur=10')] mix-blend-overlay opacity-20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoast.id}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center flex flex-col items-center"
              >
                <activeRoast.icon size={80} className={`${activeRoast.textColor} mb-6 opacity-80`} />
                <h2 className={`text-4xl font-bold ${activeRoast.textColor} mb-2`}>{activeRoast.name}</h2>
                <p className={`${activeRoast.textColor} opacity-70 font-medium tracking-widest uppercase text-sm`}>{activeRoast.temp}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Controls & Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Slider Controls */}
            <div className="flex justify-between items-center mb-12 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-pastel-mocha/30 -translate-y-1/2 rounded-full z-0" />
              {ROASTS.map((roast) => (
                <button
                  key={roast.id}
                  onClick={() => setActiveRoast(roast)}
                  className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeRoast.id === roast.id 
                      ? `${roast.color} shadow-lg scale-110` 
                      : 'bg-white text-espresso/50 hover:bg-pastel-latte'
                  }`}
                >
                  <Coffee size={24} className={activeRoast.id === roast.id ? roast.textColor : ''} />
                </button>
              ))}
            </div>

            {/* Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRoast.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-espresso mb-4">Flavor Profile</h3>
                <p className="text-lg text-espresso/70 leading-relaxed mb-8">{activeRoast.desc}</p>
                
                {/* Flavor Bars */}
                <div className="space-y-6 mb-8">
                  {Object.entries(activeRoast.flavorProfile).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between text-sm font-medium text-espresso/60 mb-2 uppercase tracking-wider">
                        <span>{key}</span>
                        <span>{value}%</span>
                      </div>
                      <div className="h-2 bg-pastel-mocha/20 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-full ${activeRoast.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-2xl p-6 border border-pastel-mocha/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-pastel-latte flex items-center justify-center shrink-0">
                    <Coffee size={20} className="text-pastel-brown" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-espresso/50 uppercase tracking-wider mb-1">Best For</p>
                    <p className="text-lg font-bold text-espresso">{activeRoast.bestFor}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </motion.div>
        </div>

      </div>
    </div>
  );
}
