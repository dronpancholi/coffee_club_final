'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Heart, BookOpen, Users, Coffee } from 'lucide-react';

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-[60vh] overflow-hidden flex items-center justify-center mb-32 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-2xl">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop"
            alt="Coffee Culture"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-espresso/60 mix-blend-multiply" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <p className="text-pastel-mocha font-medium tracking-widest uppercase mb-6 text-sm">About Us</p>
          <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 tracking-tight">Discover the Art of Coffee</h1>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* The Story */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg md:prose-xl prose-p:text-charcoal/80 prose-p:leading-relaxed mx-auto text-center"
          >
            <p className="mb-8">
              Coffee Club is a space created for people who share a love for coffee and the culture around it. We believe that coffee is more than just a beverage—it is an experience, a craft, and a community.
            </p>
            <p className="mb-8">
              Our goal is to make the world of coffee more accessible to everyone. Through brewing guides, coffee knowledge, and interactive tools, Coffee Club helps beginners and enthusiasts alike understand how to brew better coffee and appreciate the story behind every cup.
            </p>
            <p className="mb-8">
              From learning different brewing methods to exploring coffee culture, Coffee Club is a place where curiosity meets community.
            </p>
            <p>
              Whether you are just starting your coffee journey or already a passionate coffee lover, Coffee Club welcomes you to learn, brew, and connect.
            </p>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
