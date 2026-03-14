'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Coffee, BookOpen, Calculator, Users, ChevronRight, Droplets, Flame, Settings, ShoppingBag } from 'lucide-react';
import { useRef } from 'react';
import { useCart } from '@/components/CartContext';

// Pre-calculated random values for the floating beans
const BEAN_CONFIGS = [
  { duration: 8.2, delay: 0.5, top: '15%', left: '25%', opacity: 0.4, scale: 1.2 },
  { duration: 6.5, delay: 1.2, top: '45%', left: '80%', opacity: 0.5, scale: 0.8 },
  { duration: 9.1, delay: 0.1, top: '75%', left: '15%', opacity: 0.35, scale: 1.5 },
  { duration: 7.8, delay: 1.8, top: '25%', left: '65%', opacity: 0.45, scale: 0.9 },
  { duration: 5.9, delay: 0.8, top: '85%', left: '55%', opacity: 0.55, scale: 1.1 },
  { duration: 8.5, delay: 1.5, top: '35%', left: '10%', opacity: 0.4, scale: 1.3 },
  { duration: 7.2, delay: 0.3, top: '65%', left: '90%', opacity: 0.3, scale: 0.7 },
  { duration: 6.8, delay: 1.9, top: '10%', left: '50%', opacity: 0.48, scale: 1.4 },
];

export default function Home() {
  const containerRef = useRef(null);
  const { addToCart } = useCart();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* 1. Hero Section */}
      <section ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-pastel-latte via-cream to-cream">
        {/* Background Layer (Subtle Texture & Steam) */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
          {/* Subtle Steam Animation */}
          <motion.div 
            animate={{ 
              y: [-20, -100],
              x: [-10, 10, -10],
              opacity: [0, 0.3, 0],
              scale: [1, 1.5]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/20 blur-3xl rounded-full"
          />
          <motion.div 
            animate={{ 
              y: [-10, -120],
              x: [10, -10, 10],
              opacity: [0, 0.2, 0],
              scale: [1, 1.8]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-1/3 w-72 h-72 bg-white/20 blur-3xl rounded-full"
          />
        </motion.div>

        {/* Midground Layer (Floating Beans) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {BEAN_CONFIGS.map((config, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                x: [0, 10, -10, 0]
              }}
              transition={{
                duration: config.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: config.delay
              }}
              className="absolute"
              style={{
                top: config.top,
                left: config.left,
                opacity: config.opacity,
                scale: config.scale,
              }}
            >
              <Coffee className="text-espresso opacity-30" size={32} />
            </motion.div>
          ))}
        </div>

        {/* Foreground Content */}
        <motion.div 
          style={{ opacity: opacityText }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-espresso font-medium tracking-widest uppercase mb-6 text-sm">The Art of the Roast</p>
            <h1 className="text-6xl md:text-8xl font-bold text-espresso mb-8 tracking-tighter leading-none">
              Discover the<br />Art of Coffee.
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your destination for brewing guides, coffee culture, and a community of coffee lovers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/brew-guides" className="group relative px-8 py-4 bg-espresso text-cream rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center">
                <span className="relative z-10 font-medium flex items-center justify-center gap-2">
                  Explore Brewing Guides <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-charcoal transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </Link>
              <Link href="/join" className="group px-8 py-4 bg-transparent border border-espresso/20 text-espresso rounded-full hover:bg-espresso/5 transition-all duration-300 w-full sm:w-auto text-center font-medium">
                Join the Club
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Choose Your Brew Method Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">Choose Your Brew Method</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Find the perfect brewing device for your style.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: "French Press", icon: Droplets, id: "french-press" },
            { name: "Moka Pot", icon: Flame, id: "moka-pot" },
            { name: "AeroPress", icon: Settings, id: "aeropress" },
            { name: "Pour Over", icon: Coffee, id: "pour-over" },
            { name: "Espresso", icon: Settings, id: "espresso-machine" },
            { name: "Cold Brew", icon: Droplets, id: "cold-brew-maker" },
          ].map((device) => (
            <Link href={`/equipment#${device.id}`} key={device.id} className="group flex flex-col items-center gap-4 p-6 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-pastel-mocha/10">
              <div className="w-16 h-16 rounded-full bg-pastel-latte flex items-center justify-center group-hover:bg-pastel-brown transition-colors">
                <device.icon className="text-espresso group-hover:text-cream" size={32} />
              </div>
              <span className="font-bold text-espresso text-center">{device.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Explore Our Coffee Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-20 bg-cream">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">Explore Our Coffee</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Carefully roasted beans and tools designed to bring out the best in every cup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: "morning-whisper", title: "Morning Whisper", desc: "Light roast Ethiopian beans", notes: "citrus, honey", price: "₹599", img: "/images/products/morning-whisper.png", link: "/beans" },
            { id: "velvet-ember", title: "Velvet Ember", desc: "Medium roast Colombian beans", notes: "chocolate, caramel", price: "₹699", img: "/images/products/velvet-ember.png", link: "/beans" },
            { id: "french-press", title: "French Press", desc: "Full-bodied immersion brewing", notes: "Beginner Friendly", price: "₹1,299", img: "/images/products/french-press.png", link: "/equipment" },
            { id: "pour-over", title: "Pour Over (V60)", desc: "Manual brewing method", notes: "Advanced", price: "₹1,599", img: "/images/products/pour-over.png", link: "/equipment" }
          ].map((product, i) => (
            <div key={i} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer h-full flex flex-col bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-pastel-mocha/20"
              >
                <Link href={product.link}>
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-white">
                    <Image src={product.img} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-xl font-bold text-espresso mb-2">{product.title}</h3>
                  <p className="text-charcoal/70 text-sm mb-2">{product.desc}</p>
                  <p className="text-pastel-brown text-sm font-medium mb-4">{product.notes}</p>
                </Link>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-lg font-bold text-espresso">{product.price}</span>
                  <button 
                    onClick={() => addToCart({ id: product.id, title: product.title, price: product.price, img: product.img })}
                    className="w-10 h-10 rounded-full bg-pastel-latte flex items-center justify-center text-espresso group-hover:bg-espresso group-hover:text-cream transition-colors"
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Learn the Craft Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-pastel-latte/30 border-y border-pastel-mocha/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">Learn the Craft</h2>
              <p className="text-lg text-charcoal/70">
                Coffee is not just brewed — it is understood. Join our workshops and learn the fundamentals of brewing, tasting, and appreciating coffee.
              </p>
            </div>
            <Link href="/workshops" className="flex items-center gap-2 text-espresso font-medium hover:text-pastel-brown transition-colors">
              View all workshops <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Brew Basics", desc: "Learn the fundamentals of coffee brewing including grind size, water temperature, and extraction.", duration: "2 hours", level: "Beginner", price: "₹799" },
              { title: "Latte Art Essentials", desc: "Learn milk texturing and latte art techniques.", duration: "2.5 hours", level: "Beginner to Intermediate", price: "₹999" },
              { title: "Coffee Tasting Experience", desc: "Explore flavor notes and aroma profiles with guided tasting.", duration: "2 hours", level: "All Levels", price: "₹1,299" }
            ].map((workshop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-pastel-mocha/20 flex flex-col h-full"
              >
                <h3 className="text-2xl font-bold text-espresso mb-4">{workshop.title}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-6 flex-grow">{workshop.desc}</p>
                <div className="space-y-2 mb-8">
                  <p className="text-sm text-charcoal/80"><span className="font-semibold">Duration:</span> {workshop.duration}</p>
                  <p className="text-sm text-charcoal/80"><span className="font-semibold">Level:</span> {workshop.level}</p>
                  <p className="text-sm text-charcoal/80"><span className="font-semibold">Price:</span> {workshop.price}</p>
                </div>
                <Link href="/workshops" className="w-full py-3 bg-espresso text-cream rounded-full font-bold hover:bg-charcoal transition-colors text-center">
                  Reserve Seat
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brewing Guides Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-20 bg-cream">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">Master Your Brew</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Step-by-step guides for the most popular brewing methods. Perfect your technique and elevate your daily cup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "French Press Guide", icon: Droplets, color: "bg-pastel-latte", link: "/brew-guides/french-press" },
            { title: "Pour Over (V60)", icon: Coffee, color: "bg-pastel-mocha", link: "/brew-guides/pour-over" },
            { title: "Aeropress", icon: Settings, color: "bg-pastel-sage", link: "/brew-guides/aeropress" },
            { title: "Moka Pot", icon: Flame, color: "bg-pastel-brown", link: "/brew-guides/moka-pot" }
          ].map((guide, i) => (
            <Link href={guide.link} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer h-full"
              >
                <div className={`${guide.color} aspect-square rounded-[2rem] p-8 flex flex-col items-center justify-center mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden h-full`}>
                  <div className="absolute inset-0 bg-white/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <guide.icon size={48} className="text-espresso/40 mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-xl font-bold text-espresso text-center">{guide.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Coffee Knowledge Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-pastel-latte/30 border-y border-pastel-mocha/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">Coffee Knowledge</h2>
              <p className="text-lg text-charcoal/70">
                Dive deep into the science and art of coffee. Understand what makes your favorite cup taste so good.
              </p>
            </div>
            <Link href="/basics" className="flex items-center gap-2 text-espresso font-medium hover:text-pastel-brown transition-colors">
              View all basics <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Coffee Beans Explained", desc: "Understand origin, altitude, and processing methods.", img: "https://picsum.photos/seed/coffee-beans-explained/800/800", link: "/basics/beans-explained" },
              { title: "Arabica vs Robusta", desc: "The fundamental differences between the two main coffee species.", img: "https://picsum.photos/seed/arabica-vs-robusta/800/800", link: "/basics/arabica-vs-robusta" },
              { title: "Coffee Roast Levels", desc: "How roasting time and temperature affect flavor profiles.", img: "https://picsum.photos/seed/coffee-roast-levels/800/800", link: "/basics/roast-levels" },
              { title: "Coffee Flavor Wheel", desc: "Learn to identify and describe complex tasting notes.", img: "https://picsum.photos/seed/coffee-flavor-wheel/800/800", link: "/basics/flavor-wheel" }
            ].map((article, i) => (
              <Link href={article.link} key={i}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group flex flex-col sm:flex-row gap-6 bg-white/50 rounded-3xl p-4 hover:bg-white transition-colors duration-300 cursor-pointer h-full"
                >
                  <div className="w-full sm:w-1/3 aspect-[4/3] sm:aspect-square relative rounded-2xl overflow-hidden shrink-0">
                    <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col justify-center py-2 pr-4">
                    <h3 className="text-2xl font-bold text-espresso mb-3 group-hover:text-pastel-brown transition-colors">{article.title}</h3>
                    <p className="text-charcoal/70 leading-relaxed mb-4">{article.desc}</p>
                    <span className="text-sm font-bold uppercase tracking-wider text-espresso/50 flex items-center gap-1 mt-auto">
                      Read Article <ChevronRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Coffee Tools */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">Interactive Tools</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Take the guesswork out of brewing with our custom calculators and quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Brew Ratio Calculator", desc: "Find the perfect water-to-coffee ratio for any brewing method.", icon: Calculator, color: "bg-pastel-sage", link: "/tools/ratio-calculator" },
            { title: "Coffee Roast Quiz", desc: "Discover which roast level matches your flavor preferences.", icon: Flame, color: "bg-pastel-mocha", link: "/tools/roast-quiz" },
            { title: "Coffee Strength Calculator", desc: "Adjust your recipe to hit your ideal strength and extraction.", icon: Droplets, color: "bg-pastel-latte", link: "/tools/strength-calculator" }
          ].map((tool, i) => (
            <Link href={tool.link} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-pastel-mocha/20 group cursor-pointer flex flex-col items-center text-center h-full"
              >
                <div className={`w-20 h-20 rounded-full ${tool.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <tool.icon size={32} className="text-espresso" />
                </div>
                <h3 className="text-2xl font-bold text-espresso mb-4">{tool.title}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">{tool.desc}</p>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream text-espresso group-hover:bg-espresso group-hover:text-cream transition-colors duration-300">
                  <ArrowRight size={20} />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Coffee Culture / Blog */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-espresso text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cream">Coffee Culture</h2>
              <p className="text-lg text-cream/70">
                Stories, trends, and insights from the world of specialty coffee.
              </p>
            </div>
            <Link href="/blog" className="flex items-center gap-2 text-pastel-mocha font-medium hover:text-white transition-colors">
              Read the blog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "The Rise of Specialty Coffee in India", category: "Culture", img: "https://picsum.photos/seed/specialty-coffee-india/800/800", link: "/blog/specialty-coffee-india" },
              { title: "Best Coffee Cafés in India", category: "Guides", img: "https://picsum.photos/seed/best-cafes/800/800", link: "/blog/best-cafes" },
              { title: "How Coffee Changed Modern Work Culture", category: "History", img: "https://picsum.photos/seed/coffee-work-culture/800/800", link: "/blog/coffee-work-culture" },
              { title: "Beginner's Guide to Specialty Coffee", category: "Education", img: "https://picsum.photos/seed/beginners-guide/800/800", link: "/blog/beginners-guide" }
            ].map((post, i) => (
              <Link href={post.link} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                    <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                      {post.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold leading-tight group-hover:text-pastel-mocha transition-colors">{post.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. About Us */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
              alt="About Coffee Club" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">About Coffee Club</h2>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              Coffee Club is a space created for people who share a love for coffee and the culture around it. We believe that coffee is more than just a beverage—it is an experience, a craft, and a community.
            </p>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              Our goal is to make the world of coffee more accessible to everyone. Through brewing guides, coffee knowledge, and interactive tools, Coffee Club helps beginners and enthusiasts alike understand how to brew better coffee and appreciate the story behind every cup.
            </p>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              From learning different brewing methods to exploring coffee culture, Coffee Club is a place where curiosity meets community.
            </p>
            <p className="text-lg text-charcoal/80 mb-10 leading-relaxed">
              Whether you are just starting your coffee journey or already a passionate coffee lover, Coffee Club welcomes you to learn, brew, and connect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. Join the Coffee Club */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-pastel-latte rounded-[3rem] p-12 md:p-20 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 text-pastel-brown/20">
            <Users size={200} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-espresso mb-6">Join the Coffee Club</h2>
            <p className="text-xl text-charcoal/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of coffee lovers learning and sharing their love for coffee. Get exclusive guides, tips, and community updates.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-espresso text-cream rounded-full font-bold hover:bg-charcoal transition-colors shadow-lg">
                Join Newsletter
              </button>
              <button className="px-8 py-4 bg-white text-espresso border border-pastel-mocha/50 rounded-full font-bold hover:bg-pastel-cream transition-colors shadow-sm">
                Share Your Brew
              </button>
              <button className="px-8 py-4 bg-transparent text-espresso rounded-full font-bold hover:bg-white/50 transition-colors">
                Follow on Instagram
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
