'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calculator, Droplets, Flame } from 'lucide-react';
import { use, useState } from 'react';

export default function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Simple state for a generic calculator
  const [coffeeAmount, setCoffeeAmount] = useState(15);
  const [ratio, setRatio] = useState(15);

  const waterAmount = coffeeAmount * ratio;

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-espresso/60 hover:text-espresso mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-pastel-mocha/20">
          <div className="flex items-center gap-6 mb-12">
            <div className={`w-24 h-24 rounded-full bg-pastel-sage flex items-center justify-center`}>
              {slug.includes('ratio') ? <Calculator size={40} className="text-espresso" /> : 
               slug.includes('quiz') ? <Flame size={40} className="text-espresso" /> : 
               <Droplets size={40} className="text-espresso" />}
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-2">{title}</h1>
              <p className="text-charcoal/70 text-lg">Take the guesswork out of brewing.</p>
            </div>
          </div>

          {slug.includes('ratio') || slug.includes('strength') ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-espresso font-bold mb-4 text-lg">Coffee Amount (grams)</label>
                  <input 
                    type="range" 
                    min="10" 
                    max="50" 
                    value={coffeeAmount} 
                    onChange={(e) => setCoffeeAmount(Number(e.target.value))}
                    className="w-full accent-espresso"
                  />
                  <div className="text-right text-charcoal/70 mt-2 font-mono">{coffeeAmount}g</div>
                </div>

                <div>
                  <label className="block text-espresso font-bold mb-4 text-lg">Brew Ratio (1:X)</label>
                  <input 
                    type="range" 
                    min="10" 
                    max="20" 
                    step="0.5"
                    value={ratio} 
                    onChange={(e) => setRatio(Number(e.target.value))}
                    className="w-full accent-espresso"
                  />
                  <div className="text-right text-charcoal/70 mt-2 font-mono">1:{ratio}</div>
                </div>
              </div>

              <div className="bg-pastel-latte/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-pastel-mocha/30">
                <h3 className="text-espresso font-bold text-xl mb-2">Target Water Weight</h3>
                <div className="text-6xl font-bold text-espresso mb-4">{waterAmount}<span className="text-3xl text-espresso/50">g</span></div>
                <p className="text-charcoal/70">
                  For {coffeeAmount}g of coffee at a 1:{ratio} ratio, you need {waterAmount}g of water.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-espresso mb-6">What&apos;s your preferred flavor profile?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button className="p-6 rounded-2xl border-2 border-pastel-mocha/30 hover:border-espresso hover:bg-pastel-latte transition-all text-left">
                  <span className="block font-bold text-espresso mb-2">Fruity & Floral</span>
                  <span className="block text-sm text-charcoal/70">Bright acidity, tea-like body</span>
                </button>
                <button className="p-6 rounded-2xl border-2 border-pastel-mocha/30 hover:border-espresso hover:bg-pastel-mocha transition-all text-left">
                  <span className="block font-bold text-espresso mb-2">Chocolate & Nutty</span>
                  <span className="block text-sm text-charcoal/70">Balanced, sweet, medium body</span>
                </button>
                <button className="p-6 rounded-2xl border-2 border-pastel-mocha/30 hover:border-espresso hover:bg-pastel-brown transition-all text-left">
                  <span className="block font-bold text-espresso mb-2">Bold & Roasty</span>
                  <span className="block text-sm text-charcoal/70">Low acidity, heavy body, dark chocolate</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
