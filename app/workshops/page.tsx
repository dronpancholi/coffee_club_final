'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Users, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/components/CartContext';

const WORKSHOPS = [
  {
    title: "Brew Basics",
    desc: "Learn the fundamentals of coffee brewing including grind size, water temperature, and extraction.",
    instructor: "Sarah Jenkins",
    price: "₹799",
    duration: "2 hours",
    level: "Beginner",
    seats: "8 spots left",
    date: "Every Saturday, 10:00 AM",
    color: "bg-pastel-latte",
    img: "/images/workshops/brew-basics.png"
  },
  {
    title: "Latte Art Essentials",
    desc: "Learn milk texturing and latte art techniques.",
    instructor: "David Chen",
    price: "₹999",
    duration: "2.5 hours",
    level: "Beginner to Intermediate",
    seats: "4 spots left",
    date: "Every Sunday, 2:00 PM",
    color: "bg-pastel-mocha",
    img: "/images/workshops/latte-art.png"
  },
  {
    title: "Coffee Tasting Experience",
    desc: "Explore flavor notes and aroma profiles with guided tasting.",
    instructor: "Elena Rodriguez",
    price: "₹1,299",
    duration: "2 hours",
    level: "All Levels",
    seats: "12 spots left",
    date: "Every Wednesday, 6:00 PM",
    color: "bg-pastel-sage",
    img: "/images/workshops/coffee-tasting.png"
  }
];

export default function WorkshopsPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6 tracking-tight">Coffee Workshops</h1>
          <p className="text-xl text-espresso/70 leading-relaxed">
            Learn, brew, and experience The Art of the Roast.
          </p>
        </motion.div>

        {/* Workshops List */}
        <div className="space-y-12">
          {WORKSHOPS.map((workshop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col md:flex-row group"
            >
              {/* Image Section */}
              <div className="md:w-2/5 relative aspect-square md:aspect-auto overflow-hidden">
                <Image
                  src={workshop.img}
                  alt={workshop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 ${workshop.color} mix-blend-overlay opacity-40`} />
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-espresso">{workshop.title}</h2>
                  <span className="text-2xl font-bold text-pastel-brown">{workshop.price}</span>
                </div>
                
                <p className="text-lg text-espresso/70 leading-relaxed mb-8">
                  {workshop.desc}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-3 text-espresso/80">
                    <div className="w-10 h-10 rounded-full bg-pastel-cream flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-pastel-brown" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold opacity-50">Duration</p>
                      <p className="font-medium">{workshop.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-espresso/80">
                    <div className="w-10 h-10 rounded-full bg-pastel-cream flex items-center justify-center shrink-0">
                      <Users size={18} className="text-pastel-brown" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold opacity-50">Level</p>
                      <p className="font-medium">{workshop.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-espresso/80">
                    <div className="w-10 h-10 rounded-full bg-pastel-cream flex items-center justify-center shrink-0">
                      <Users size={18} className="text-pastel-brown" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold opacity-50">Instructor</p>
                      <p className="font-medium">{workshop.instructor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-espresso/80">
                    <div className="w-10 h-10 rounded-full bg-pastel-cream flex items-center justify-center shrink-0">
                      <Users size={18} className="text-pastel-brown" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider font-bold opacity-50">Availability</p>
                      <p className="font-medium">{workshop.seats}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={() => addToCart({ id: workshop.title.toLowerCase().replace(/ /g, '-'), title: workshop.title, price: workshop.price, img: workshop.img })}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-espresso text-pastel-cream px-8 py-4 rounded-full font-bold hover:bg-pastel-brown transition-colors group/btn"
                  >
                    <ShoppingBag size={18} /> Reserve Seat <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-3xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-pastel-mocha/20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-espresso mb-4">Book a Private Session</h2>
            <p className="text-espresso/70">Want a customized workshop for your group? Fill out the form below.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-espresso mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-pastel-mocha/50 focus:outline-none focus:ring-2 focus:ring-pastel-brown bg-pastel-cream/30" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-espresso mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-pastel-mocha/50 focus:outline-none focus:ring-2 focus:ring-pastel-brown bg-pastel-cream/30" placeholder="your@email.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-espresso mb-2">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-pastel-mocha/50 focus:outline-none focus:ring-2 focus:ring-pastel-brown bg-pastel-cream/30" placeholder="Your Phone Number" />
              </div>
              <div>
                <label className="block text-sm font-bold text-espresso mb-2">Number of seats</label>
                <input type="number" min="1" className="w-full px-4 py-3 rounded-xl border border-pastel-mocha/50 focus:outline-none focus:ring-2 focus:ring-pastel-brown bg-pastel-cream/30" placeholder="1" />
              </div>
            </div>
            <button type="button" className="w-full py-4 bg-espresso text-cream rounded-xl font-bold hover:bg-charcoal transition-colors shadow-lg">
              Submit Request
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
