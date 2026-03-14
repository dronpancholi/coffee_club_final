'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Droplets, Coffee, ArrowRight } from 'lucide-react';

const GRINDS = [
  {
    id: 'coarse',
    name: 'Coarse',
    size: 'Sea Salt',
    desc: 'Chunky particles. Ideal for immersion brewing where water and coffee sit together for a long time.',
    brewers: ['French Press', 'Cold Brew'],
    color: 'bg-pastel-latte',
    particleSize: 'w-4 h-4',
    particleCount: 20
  },
  {
    id: 'medium',
    name: 'Medium',
    size: 'Sand',
    desc: 'The standard grind. Perfect for drip coffee makers and most pour-over methods.',
    brewers: ['Drip Coffee Maker', 'Pour Over (V60)', 'Aeropress (Standard)'],
    color: 'bg-pastel-mocha',
    particleSize: 'w-2 h-2',
    particleCount: 50
  },
  {
    id: 'fine',
    name: 'Fine',
    size: 'Table Salt',
    desc: 'Smaller particles that pack tightly. Used when water passes through quickly under pressure.',
    brewers: ['Espresso', 'Moka Pot', 'Aeropress (Inverted)'],
    color: 'bg-pastel-brown',
    particleSize: 'w-1 h-1',
    particleCount: 150
  },
  {
    id: 'extra-fine',
    name: 'Extra Fine',
    size: 'Powder',
    desc: 'Like flour or powdered sugar. Used almost exclusively for traditional Turkish coffee.',
    brewers: ['Turkish Coffee (Ibrik)'],
    color: 'bg-pastel-sage',
    particleSize: 'w-0.5 h-0.5',
    particleCount: 300
  }
];

export default function GrindGuidePage() {
  const [activeGrind, setActiveGrind] = useState(GRINDS[1]); // Default to Medium

  const particles = useMemo(() => {
    return Array.from({ length: activeGrind.particleCount }).map((_, i) => {
      // Simple deterministic pseudo-random based on index
      const pseudoRandom1 = (Math.sin(i * 12.9898) * 43758.5453) % 1;
      const pseudoRandom2 = (Math.cos(i * 78.233) * 43758.5453) % 1;
      return {
        opacity: Math.abs(pseudoRandom1) * 0.5 + 0.5,
        rotate: Math.abs(pseudoRandom2) * 360
      };
    });
  }, [activeGrind.particleCount]);

  return (
    <div className="min-h-screen bg-pastel-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6 tracking-tight">The Grind Guide</h1>
          <p className="text-xl text-espresso/70 leading-relaxed">
            Grind size is the most important variable you can control. It determines how quickly water extracts flavor from the beans.
          </p>
        </motion.div>

        {/* Interactive Diagram Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          
          {/* Sidebar Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {GRINDS.map((grind) => (
              <button
                key={grind.id}
                onClick={() => setActiveGrind(grind)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                  activeGrind.id === grind.id 
                    ? `border-pastel-brown bg-white shadow-md` 
                    : 'border-transparent hover:bg-white/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-2xl font-bold ${activeGrind.id === grind.id ? 'text-espresso' : 'text-espresso/60'}`}>{grind.name}</h3>
                  {activeGrind.id === grind.id && <ArrowRight size={20} className="text-pastel-brown" />}
                </div>
                <p className={`text-sm font-medium uppercase tracking-wider ${activeGrind.id === grind.id ? 'text-pastel-brown' : 'text-espresso/40'}`}>
                  Looks like: {grind.size}
                </p>
              </button>
            ))}
          </motion.div>

          {/* Main Display Area */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 bg-white rounded-[3rem] p-10 md:p-16 shadow-xl relative overflow-hidden"
          >
            {/* Particle Visualization Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex flex-wrap content-start gap-1 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGrind.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex flex-wrap gap-2 content-start"
                >
                  {particles.map((particle, i) => (
                    <div 
                      key={i} 
                      className={`${activeGrind.particleSize} bg-espresso rounded-sm`}
                      style={{
                        opacity: particle.opacity,
                        transform: `rotate(${particle.rotate}deg)`
                      }}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGrind.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${activeGrind.color} flex items-center justify-center`}>
                      <Settings size={32} className={activeGrind.id === 'fine' || activeGrind.id === 'extra-fine' ? 'text-pastel-cream' : 'text-espresso'} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-espresso mb-1">{activeGrind.name} Grind</h2>
                      <p className="text-pastel-brown font-medium uppercase tracking-widest text-sm">Size: {activeGrind.size}</p>
                    </div>
                  </div>

                  <p className="text-xl text-espresso/80 leading-relaxed mb-12 max-w-2xl">
                    {activeGrind.desc}
                  </p>

                  <h3 className="text-2xl font-bold text-espresso mb-6 flex items-center gap-3">
                    <Droplets size={24} className="text-pastel-brown" /> Compatible Brewers
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeGrind.brewers.map((brewer, i) => (
                      <div key={i} className="bg-pastel-cream rounded-2xl p-6 flex items-center gap-4 border border-pastel-mocha/30">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                          <Coffee size={20} className="text-pastel-brown" />
                        </div>
                        <span className="text-lg font-bold text-espresso">{brewer}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
